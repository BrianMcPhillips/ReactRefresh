import React from 'react';
import HeyArnold from '../../containers/HeyArnold/HeyArnold';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Detail from '../../containers/Detail/Detail';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HeyArnold}/>
        <Route exact path="/detail/:id" component={Detail}/>
      </Switch>
    </Router>
  );
}
