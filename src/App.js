import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomNav from './components/navbar'
import Home from './components/Views/Home';
import Modes from './components/Views/Modes';
import Rooms from './components/Views/Rooms';
import Routines from './components/Views/Routines';
import RecentlyViewed from './components/Views/RecentlyViewed';

function App() {
  return (
    <Router>
      <CustomNav />
      <Switch>
       <Route path="/" exact component={ Home } />
       <Route path="/Modes" component={ Modes } />
       <Route path="/Rooms" component={ Rooms } />
       <Route path="/Routines" component={ Routines } />
       <Route path="/RecentlyViewed" component={ RecentlyViewed } />
      </Switch>
    </Router>
  );
}

export default App;
