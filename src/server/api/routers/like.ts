import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const likeRouter = createTRPCRouter({
  likeProduct: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const productId = input.productId;
      const like = await ctx.db.like.findFirst({
        where: {
          userId,
          productId,
        },
      });
      if (like) {
        await ctx.db.like.delete({
          where: {
            id: like.id,
          },
        });
        return false;
      } else {
        await ctx.db.like.create({
          data: {
            userId,
            productId,
          },
        });
        return true;
      }
    }),
});

export type LikeRouter = typeof likeRouter;
