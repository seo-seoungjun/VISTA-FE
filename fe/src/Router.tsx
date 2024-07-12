import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import ChatRoom from './routes/ChatRoom';

const Demo = lazy(() => import('./routes/Demo'));
const Main = lazy(() => import('./routes/Main'));
const Analytics = lazy(() => import('./routes/Analytics'));

function LidaRouter() {
  return (
    <BrowserRouter>
      <Suspense>
        <Switch>
          <Route path="/chat/:thread_id">
            <ChatRoom />
          </Route>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default LidaRouter;
