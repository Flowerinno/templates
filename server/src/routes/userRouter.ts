import { router, publicProcedure } from "../trpc/trpc";

import z from "zod";

export const userRouter = router({
	getUser: publicProcedure.input(z.string()).query(async (opts) => {
		console.log(opts);
		return { name: "John Doe" };
	}),
});
