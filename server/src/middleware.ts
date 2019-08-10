import { Express } from 'express';

export default function setGlobalMiddleware(app: Express, server) {
  app.disable('x-powered-by');
  server.applyMiddleware({
    app,
    path: '/graphql',
    bodyParser: true,
    cors: false,
  });
}
