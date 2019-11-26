import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/fonts/proximanova-regular.otf';
import './assets/fonts/proximanova-semibold.otf';
import './assets/fonts/proximanova-semibolditalic.otf';
import './assets/fonts/proximanova-light.otf';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
