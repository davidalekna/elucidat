import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import setupMiddware from './middleware';
import apolloConfig from './api';

const app = express();
const apolloServer = new ApolloServer(apolloConfig);
setupMiddware(app, apolloServer);

export default function setup(PORT: unknown, callback: Function) {
  return app.listen(PORT, () => callback(PORT));
}
