import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navigation_bar";
import landing_page from './components/landing_page'
import blog_post from './components/blog_post'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch } from 'react-router-dom'
library.add(fab, fas);
class App extends Component {
  render() {
    return (
      <div class="max-height">
        <div id="intro" class="view">
          <div class="scroll mask rgba-black-strong">
            <NavBar />
            <Switch>
              <Route path="/" component={landing_page} exact />
              <Route path="/blog" component={blog_post} exact />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
