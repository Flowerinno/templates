import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc/trpc";

import z from "zod";

export const userRouter = router({
	getUser: publicProcedure.input(z.string()).query(async (opts) => {
		const user = await opts.ctx.prisma.user.findUnique({
			where: { id: opts.input },
		});

		if (!user) {
			throw new TRPCError({
				message: "User not found",
				code: "BAD_REQUEST",
				cause: 'Wrong "id" parameter',
			});
		}

		const { password, ...rest } = user;

		return rest;
	}),
});
