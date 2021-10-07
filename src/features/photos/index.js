import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import MainPage from './pages/Mainpage';
import AddEditPage from './pages/Addeditpage';
export default function Test() {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={MainPage} />
        <Route path={`${match.url}/add`} component={AddEditPage} />
        <Route path={`${match.url}/photoId`} component={AddEditPage} />
      </Switch>
    </div>
  );
}
