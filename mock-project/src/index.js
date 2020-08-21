import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './IndexPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
