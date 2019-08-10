import { Express } from 'express';

export default function setGlobalMiddleware(app: Express, server) {
  app.disable('x-powered-by');
  server.applyMiddleware({
    app,
    path: '/graphql',
    bodyParser: true,
    cors: {
      origin: (origin: any, callback: any) => {
        if (
          origin === undefined ||
          process.env.WHITELIST.indexOf(origin) !== -1
        ) {
          callback(null, true);
        } else {
          callback(new Error('🚨  Not allowed by CORS'));
        }
      },
      credentials: true,
    },
  });
}
