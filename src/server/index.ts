import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const appRouter = router({
  generateStory: publicProcedure.query(async () => {
    return "Hello World";
  }),
});

export type AppRouter = typeof appRouter;
