import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
})

export default function App({ history, onSignIn }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={() => <SignIn onSignIn={onSignIn} />} />
            <Route path="/auth/signup" component={() => <SignUp onSignIn={onSignIn} />} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
