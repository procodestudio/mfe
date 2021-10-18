import React, { lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Landing = lazy(() => import('./components/Landing'));
const Pricing = lazy(() => import('./components/Pricing'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing',
})

export default function App() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <StylesProvider generateClassName={generateClassName}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route path="/" component={Landing} />
            </Switch>
          </BrowserRouter>
        </StylesProvider>
      </Suspense>
    </div>
  )
}
