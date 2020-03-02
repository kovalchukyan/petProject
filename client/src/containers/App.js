import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header/header';
import Main from './MainContainer';
import Login from '../components/Login/login';

function App() {
    return (
        <div>
          <Header />
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/contacts" component={Main} />
              <Redirect to="/" />
          </Switch>
        </div>
    );
}

export default App;

