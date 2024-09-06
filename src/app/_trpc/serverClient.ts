import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc";


export const serverClient = createCallerFactory(appRouter)({
  userId: null,
});
