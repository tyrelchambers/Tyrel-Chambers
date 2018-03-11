import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import App from './pages/App/App';
import About from './pages/About/About';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Resources from './pages/Resources/Resources';
import CSSCheatSheet from './pages/CssCheatSheet/CSSCheatSheet';
import Playground from './pages/Playground/Playground';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router basename="/">
    <div>
      <Header/>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources}/>
      <Route path="/css-cheat-sheet" component={CSSCheatSheet} />
      <Route path="/playground" component={Playground} />
      <Footer/>

    </div>
    
  </Router>, document.getElementById('root'));
registerServiceWorker();
