import React, { lazy, Suspense } from 'react'
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Landing = lazy(() => import('./components/Landing'));
const Pricing = lazy(() => import('./components/Pricing'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing',
})

export default function App({ history }) {
  return (
    <div>
      <Suspense fallback="Loading...">
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route path="/" component={Landing} />
            </Switch>
          </Router>
        </StylesProvider>
      </Suspense>
    </div>
  )
}
