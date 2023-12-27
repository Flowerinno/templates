import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc/trpc";
import { createToken, verifyToken } from "../services/auth/jwt";
import { Auth_Error } from "./errors";

import bcrypt from "bcrypt";

import z from "zod";

export const authRouter = router({
	register: publicProcedure
		.input(
			z.object({
				name: z.string().min(1),
				password: z.string().min(4),
				email: z.string().email(),
			})
		)
		.mutation(async (opts) => {
			const { ctx, input } = opts;

			const user = await opts.ctx.prisma.user.findUnique({
				where: { email: input.email },
			});

			if (user) {
				throw new TRPCError({
					message: "User already exists",
					code: "BAD_REQUEST",
					cause: "User already exists",
				});
			}

			const hash = await bcrypt.hash(input.password, 10);

			const newUser = await ctx.prisma.user.create({
				data: {
					name: input.name,
					email: input.email,
					password: hash,
				},
			});

			if (!newUser) {
				throw new TRPCError({
					message: "User not created",
					code: "BAD_REQUEST",
					cause: "User not created",
				});
			}

			const { password, ...rest } = newUser;

			return { ...rest, token: createToken(newUser) };
		}),
	login: publicProcedure
		.input(
			z.object(
				{
					email: z.string().email(),
					password: z.string().min(4),
				},
				{
					errorMap: (issue, ctx) => {
						return { message: "Email or password is incorrect" };
					},
				}
			)
		)
		.mutation(async (opts) => {
			const { ctx, input } = opts;

			const user = await ctx.prisma.user.findUnique({
				where: { email: input.email },
			});

			if (!user) {
				throw new TRPCError({
					message: "User not found",
					code: "BAD_REQUEST",
					cause: "User not found",
				});
			}

			const match = await bcrypt.compare(input.password, user.password);

			if (!match) {
				throw new TRPCError({
					message: "Password incorrect",
					code: "BAD_REQUEST",
					cause: "Password incorrect",
				});
			}

			const { password, ...rest } = user;

			return { ...rest, token: createToken(user) };
		}),
});
