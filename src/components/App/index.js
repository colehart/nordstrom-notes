import React from 'react';
import { Route, Switch } from 'react-router-dom';
// will have to change import style for containers once connected to store
import { Header } from '../../containers/Header'
import { NoteForm } from '../../containers/NoteForm'
import { NotesList } from '../../containers/NotesList'
import './App.css';

export const App = () => {
  const noMatch = ({ location }) => (
    <div className='a-404'>
      <h2>404 &ndash; Path not found.</h2>
      <p>No routes match <code>{location.pathname}</code>.</p>
      <p>Please click the the 'Take Note' or 'Notable Notes' buttons or your browser's forward and back buttons to navigate to your desired destination.</p>
      <p>The Nordstrom Notes logo will return you to the Take Note page.</p>
    </div>
  )

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact path='/'
          component={ NoteForm }
        />
        <Route
          exact path='/notes'
          component={ NotesList }
        />
        <Route
          component={ noMatch }
        />
      </Switch>
    </div>
  );
}

