import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history'; 

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));
const history = createBrowserHistory();

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignOut = () => {
    setIsSignedIn(false);
  }

  useEffect(() => {
    isSignedIn && history.push('/dashboard');
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={() => <AuthApp onSignIn={() => setIsSignedIn(true)} />} />
              <Route path="/dashboard" component={() => (
                !isSignedIn ? <Redirect to="/" /> : <DashboardApp />
              )} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  )
}
