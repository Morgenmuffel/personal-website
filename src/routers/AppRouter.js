import React from 'react';

import {
  BrowserRouter as Router, // as is just renaming the component
  Switch,
  Route,
  Link,
} from "react-router-dom";

import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import BlogPage from '../components/BlogPage'

import NavigationUrls from './NavigationUrls';

const AppRouter = () => (
    <Router>
        <Switch>
          <Route exact={true} path={NavigationUrls.homePageUrl} component={HomePage}/>
          <Route path={NavigationUrls.aboutPageUrl} component={AboutPage}/>
          <Route path={NavigationUrls.blogPageUrl} component={BlogPage}/>
        </Switch>
    </Router>

);

export default AppRouter;