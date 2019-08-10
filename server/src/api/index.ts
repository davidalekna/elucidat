import { merge } from 'lodash';
import seat from './seat';

const typeDefs = [seat.typeDefs];

const resolvers = merge({}, seat.resolvers);

const schema = {
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
  }),
  tracing: false,
  introspection: false,
  playground: true,
  cacheControl: {
    defaultMaxAge: 5,
    stripFormattedExtensions: false,
    calculateCacheControlHeaders: false,
  },
};

export default schema;
