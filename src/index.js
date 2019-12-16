import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Counting from './components/Couting';
import store from './reducers';
import Favoriting from './components/Favoriting';

export const App = () => (
  <div>
    <Counting />
    <Favoriting />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
