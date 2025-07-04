'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/ask',
      handler: 'chatbot.ask',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
