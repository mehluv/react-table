import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

import { Table } from './Table';
import { PracticeSpace } from './PracticeSpace'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">

        <nav>
            <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/table'>Table</Link></li>
        <li><Link to='/prac'>Practice Space</Link></li>
      </ul>
        </nav>
        </header>

        <div>
          <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/table' component={Table}/>

    <Route path='/prac' component={PracticeSpace}/>

  </Switch>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <h1>
      Please select a link!
      </h1>
      );
  }
}

export default App;
