import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './components/Header/header';

const Photo = React.lazy(() => import('./features/photos'));

function App() {
  return (
    <div className='grid'>
      <Suspense fallback={<div>...dang loading</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
