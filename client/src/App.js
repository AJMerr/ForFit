import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllRoutines from "./components/AllRoutines"
import './App.css';

class App extends React.Component {
  render() {

    return (
      <Router>
        <div>

          <div className="header">

          </div>

          <Switch>
            <Route exact path = '/' component={AllRoutines} />
          </Switch>

        </div>
      </Router>

    )
  }
}

export default App;
