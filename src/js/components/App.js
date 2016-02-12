import '../../styles/main.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div id='App'>
                App
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

render(<App />, document.getElementById('content'));