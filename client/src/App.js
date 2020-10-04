import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from './Home';
import TopRated from "./TopRated";
import Newest from './Newest';
import MostViewed from './MostViewed';
import Login from './Login';

const App = () => (
    <Router>
    <div>
      <ul>
          <span>6GAG</span>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Newest">Newest</Link></li>         
          <li><Link to="/MostViewed">Most viewed</Link></li>
          <li><Link to="/TopRated">Top rated</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Newest" component={Newest} />
          <Route path="/MostViewed" component={MostViewed} />
          <Route path="/TopRated" component={TopRated} />
          <Route path="/Login" component={Login} />
        </Switch>
    </div>
    </Router>
);

export default App;
