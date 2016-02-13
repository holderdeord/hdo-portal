import '../../styles/main.scss';

import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <main className="container">
                    {this.props.children}
                </main>

                <Footer />
            </div>
        )
    }
}
