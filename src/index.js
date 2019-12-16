import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/hello';
import store from './Redux';

export const App = () => (
  <div>
    <Hello name="Tony, a very good coach" />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
