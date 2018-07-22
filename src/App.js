import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navigation_bar";
import landing_page from './components/landing_page'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route } from 'react-router-dom'
library.add(fab, fas);
class App extends Component {
  render() {
    return (
      <div class="max-height">
        <NavBar />
        <Route path="/" component={landing_page} />
      </div>
    );
  }
}

export default App;
