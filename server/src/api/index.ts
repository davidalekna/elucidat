import axios from 'axios';
import { merge } from 'lodash';
import seat from './seat';

const typeDefs = [seat.typeDefs];

const resolvers = merge({}, seat.resolvers);

const schema = {
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
    instance: axios.create({
      baseURL: process.env.JSON_SERVER,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  }),
  tracing: true,
  introspection: true,
  playground: true,
  cacheControl: false,
};

export default schema;
