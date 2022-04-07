module.exports = {
  client: {
    includes: ['src/**/*.ts', 'src/**/*.tsx'],
    tagName: 'gql',
    service: {
      name: 'federation-api',
      url: 'http://localhost:3000/graphql',
    },
  },
};
