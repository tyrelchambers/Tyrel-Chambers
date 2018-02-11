import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import App from './pages/App';
import About from './pages/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer.js';
import Resources from './pages/Resources';
import CSSCheatSheet from './pages/CSSCheatSheet';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router basename="/">
    <div>
      <Header/>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources}/>
      <Route path="/css-cheat-sheet" component={CSSCheatSheet} />
      <Footer/>

    </div>
    
  </Router>, document.getElementById('root'));
registerServiceWorker();
