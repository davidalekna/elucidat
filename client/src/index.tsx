import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import GlobalStyle from './reset.css';
import * as serviceWorker from './serviceWorker';
import { createClient } from './shared/graphql';
import { theme } from './shared/theme';
import { RootView } from './views/index';

const client = createClient();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <RootView />
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
