import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import App from './components/App/index.js';
import BaseLayout from './components/BaseLayout/index.js';
import About from './components/About/index.js';
import Home from './components/Home/index.js';
import NavBar from './components/NavBar/index.js';
import Portfolio from './components/Portfolio/index.js';
import Contact from './components/Contact/index.js';
import References from './components/References/index.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <NavBar>
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/references" component={References}/>
          <Route path="/about" component={About}/>
          <Route path="/app" component={App}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/" component={Home}/>
        </Switch>
      </NavBar>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
