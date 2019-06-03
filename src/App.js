import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom"

import Home from './layout/Home'
import Clothes from "./layout/Clothes"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ Home } />
                <Route path="/clothes" component={ Clothes }/>
            </div>
        </BrowserRouter>
    )
  }
}

export default App
