import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './routes/Main';
import Demo from './routes/Demo';
import Analytics from './routes/Analytics';
import Login from './routes/Login';

function LidaRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/analytics/:fileId">
          <Analytics />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default LidaRouter;
