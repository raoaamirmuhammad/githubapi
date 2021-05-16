import React from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Gists from './Gists'
import GistInfo from './Gist'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Gists}></Route>
          <Route exact path="/:id" component={GistInfo}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
