import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getAuth } from "@clerk/nextjs/server";
import superjson from "superjson";

type CreateContextOptions = Record<string, never>;

const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {};
};

export const createTRPCContext = (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const sesh = getAuth(req);

  return {
    ...createInnerTRPCContext({}),
    userId: sesh.userId,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      userId: ctx.userId,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
