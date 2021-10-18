import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
const App = lazy(() => import('./App'));

const mount = (el) => {
  ReactDOM.render(
    <Suspense fallback="Loading App...">
      <App />
    </Suspense>,
    el,
  );
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
