import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllRoutines from "./components/AllRoutines";
import SingleRoutine from './components/SingleRoutine';
import AllWorkouts from './components/AllWorkouts';
import SingleWorkout from './components/SingleWorkout';
import AllGoals from './components/AllGoals';
import './App.css';


class App extends React.Component {
  render() {

    return (
      <Router>
        <div>

          <div className="header">

          </div>

          <Switch>
            <Route exact path = '/' component = {AllRoutines} />
            <Route exact path = '/routine/:id' component = {SingleRoutine} />
            <Route exact path = '/workouts' component = {AllWorkouts} />
            <Route exact path = '/workouts/:id' component = {SingleWorkout} /> 
            <Route exact path = '/goal' component = {AllGoals} />
          </Switch>

        </div>
      </Router>

    )
  }
}

export default App;
