import React from 'react';
import HeyArnold from '../../containers/HeyArnold/HeyArnold';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HeyArnold}/>
        {/* <Route exact path="/detail:id" component={}/> */}
      </Switch>
    </Router>
  );
}
