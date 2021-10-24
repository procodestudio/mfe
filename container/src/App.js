import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignOut = () => {
    setIsSignedIn(false);
  }

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={() => <AuthApp onSignIn={() => setIsSignedIn(true)} />} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}
