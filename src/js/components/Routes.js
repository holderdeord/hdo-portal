import React, { Component } from 'react';
import { render } from 'react-dom';

import {
    Router,
    Route,
    IndexRoute,
    Link,
    browserHistory as history
} from 'react-router'

import App from './App'
import Front from './Front'
import AboutUs from './AboutUs'

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                  <IndexRoute component={Front} />
                  <Route path="/om-oss" component={AboutUs} />
                </Route>
            </Router>
        )
    }
}

render(<Routes />, document.getElementById('content'));