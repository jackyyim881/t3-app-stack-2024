import { Stripe } from "stripe";
import { env } from "../../../env";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const paymentRouter = createTRPCRouter({
    create: protectedProcedure
        .input(z.object({ amount: z.number() }))
        .mutation(async ({ ctx, input }) => {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: input.amount,
            currency: "usd",
        });
    
        return paymentIntent;
        }),
    });

export type PaymentRouter = typeof paymentRouter;