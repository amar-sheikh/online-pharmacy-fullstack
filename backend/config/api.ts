export default {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
};

module.exports = {
  chatbot: {
    enabled: true,
    resolve: './api/chatbot'
  }
};
