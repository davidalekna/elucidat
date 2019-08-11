import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import GlobalStyle from './reset.css';
import * as serviceWorker from './serviceWorker';
import { createClient } from './shared/graphql';
import { theme } from './shared/theme';
import { RootView } from './views/index';
import storeConfig from './store';
import ModalRoot from 'components/modals/modalRoot';
import { ToastsProvider } from 'components/toasts';

const client = createClient();
const store = storeConfig();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <GlobalStyle />
          <ToastsProvider>
            <ModalRoot />
            <RootView />
          </ToastsProvider>
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
