import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

import { createContext } from "./trpc/trpc";
import { mergeRouter } from "./trpc/trpc";
import { userRouter } from "./routes/userRouter";
import { authRouter } from "./routes";

export const appRouter = mergeRouter(userRouter, authRouter);
export type AppRouter = typeof appRouter;

const app = express();
app.use(express.json());
app.use(cors());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	})
);

app.listen(8000);
console.log("Server started on port 8000");
