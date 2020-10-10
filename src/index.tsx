import React from 'react';
import ReactDOM from 'react-dom';

const style = require('./index.scss');

const App = () => (
  <main className={style.root}>Hello, React!</main>
);

ReactDOM.render(<App />, document.getElementById('root'));
