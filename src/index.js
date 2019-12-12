import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello';

export const App = () => (
  <div>
    <Hello name="Tony, a very good coach" />
  </div>
);

render(<App />, document.getElementById('root'));
