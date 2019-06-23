import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main'
import Bills from './Bills'
import Votes from './Votes'
import Statements from './Statements'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/bills" component={Bills} />
          <Route path="/votes" component={Votes} />
          <Route path="/statements" component={Statements} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;