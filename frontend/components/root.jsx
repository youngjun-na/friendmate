import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ScrollTop from './scroll_top';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <ScrollTop>
        <App />
      </ScrollTop>
    </HashRouter>
  </Provider>
);
export default Root;