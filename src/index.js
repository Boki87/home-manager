import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/bulma/css/bulma.min.css'

import CombinedContext from './contexts'
import GlobalStyle from './utils/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <CombinedContext>

      <App />
      <GlobalStyle />

    </CombinedContext>
  </React.StrictMode>,
  document.getElementById('root')
);

