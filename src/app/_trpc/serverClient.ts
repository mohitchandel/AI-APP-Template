import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

/* This code snippet is creating a client for making remote procedure calls (RPC) using the `trpc` library
 */
export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
