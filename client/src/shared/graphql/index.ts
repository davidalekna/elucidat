import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

export function createClient() {
  const cache = new InMemoryCache({
    dataIdFromObject: (object: any) => object.key || null,
  });

  return new ApolloClient({
    link: ApolloLink.from([
      createPersistedQueryLink({ useGETForHashedQueries: true }),
      createHttpLink({
        uri: process.env.REACT_APP_NODE_API,
      }),
    ]),
    cache,
  });
}
