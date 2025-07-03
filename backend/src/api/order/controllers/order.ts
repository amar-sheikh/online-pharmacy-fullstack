'use strict';

const stripe = require('stripe')(process.env.STRIPE_KEY);
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    if (!Array.isArray(products) || products.length === 0) {
      return ctx.throw(400, 'No products provided');
    }

    try {
      let totalAmount = 0;

      await Promise.all(
        products.map(async (product) => {
          const item = await strapi.entityService.findOne(
            'api::product.product',
            product.id,
            { populate: ['img'] }
          );

          if (!item) {
            throw new Error(`Product with ID ${product.id} not found`);
          }

          const priceInCents = Math.round(item.price * 100);
          if (priceInCents < 50) {
            throw new Error(`Product "${item.title}" must be at least $0.50`);
          }

          totalAmount += priceInCents * product.quantity;
        })
      );

      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
      });

      await strapi.entityService.create('api::order.order', {
        data: {
          products,
          stripeid: paymentIntent.id,
          amount: totalAmount,
          status: 'pending',
        },
      });

      return { clientSecret: paymentIntent.client_secret };

    } catch (error) {
      console.error('❌ Stripe Payment Error:', error.message);
      ctx.response.status = 500;
      ctx.body = {
        error: error.message || 'Something went wrong with payment setup',
      };
    }
  },
}));
