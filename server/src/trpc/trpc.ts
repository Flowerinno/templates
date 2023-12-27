import trpc, { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const createContext = ({
	req,
	res,
}: trpcExpress.CreateExpressContextOptions) => ({
	req,
	res,
	prisma,
});

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;
export const router = t.router;
export const mergeRouter = t.mergeRouters;
