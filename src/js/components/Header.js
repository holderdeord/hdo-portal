import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <header className="container">
                    <Link className="navbar-brand" to="/portal">
                        <div className="hdo-logo">Holder de ord</div>
                    </Link>

                    <ul className="nav navbar-nav pull-sm-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/portal/om-oss">Om oss</Link>
                        </li>
                        <li className="nav-item highlight">
                            <Link className="nav-link" to="/portal/stott-oss">Støtt oss</Link>
                        </li>
                    </ul>
                </header>
            </nav>
        )
    }
}