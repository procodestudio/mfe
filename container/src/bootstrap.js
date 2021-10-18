import React, { lazy, Suspense } from 'react'
import ReactDOM from  'react-dom';
const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback="Loading App...">
    <App />
  </Suspense>,
  document.querySelector('#root'),
);
