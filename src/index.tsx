import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'src/calendar';

const style = require('./index.scss');

const App = () => (
  <main className={style.root}>
    <Calendar />
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));
