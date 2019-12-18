import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
