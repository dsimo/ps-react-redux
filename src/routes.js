/**
 * Created by SIMODAVI on 3/8/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './compnents/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
  </Route>
);
