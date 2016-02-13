import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';

import {
    Router,
    Route,
    IndexRoute,
    Link,
    browserHistory as history,
    Redirect
} from 'react-router'

import App from './App'
import Front from './Front'
import AboutUs from './AboutUs'

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Redirect path="/" to="/portal" />

                <Route path="/portal" component={App}>
                  <IndexRoute component={Front} />
                  <Route path="/portal/om-oss" component={AboutUs} />
                </Route>
            </Router>
        )
    }
}

render(<Routes />, document.getElementById('content'));