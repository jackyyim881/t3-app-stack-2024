import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { likeRouter } from "./routers/like";
import { paymentRouter } from "./routers/payment";
import { productsRouter } from "./routers/products";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  products: productsRouter,
  payments: paymentRouter,
  like: likeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
