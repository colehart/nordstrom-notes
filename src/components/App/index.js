import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../containers/Header'
import Main from '../../containers/Main'
import './App.css';

export const App = () => {
  const noMatch = ({ location }) => (
    <main className='a-404'>
      <h2>404 &ndash; Path not found.</h2>
      <p>No routes match <code>{location.pathname}</code>.</p>
      <p>Please click the the 'Take Note' or 'Notable Notes' buttons above or your browser's forward and back buttons to navigate to your desired destination.</p>
      <p>The Nordstrom Notes logo will return you to the Take Note page.</p>
    </main>
  )

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact path='/'
          component={ Main }
        />
        <Route
          exact path='/notes'
          component={ Main }
        />
        <Route
          component={ noMatch }
        />
      </Switch>
    </div>
  );
}

