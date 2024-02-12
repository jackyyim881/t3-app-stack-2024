import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number().min(0),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.db.product.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
      return product;
    }),
});
