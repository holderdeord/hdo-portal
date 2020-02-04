import "../../styles/main.scss";

import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="alert alert-info">
                        <p>
                            <strong>Holder de ord</strong> legges ned i løpet av
                            2020.
                        </p>
                        <p>
                            Tjenestene <em>Sagt i salen</em>, <em>Enighet</em>{" "}
                            og
                            <em>Partipisken</em>
                            {" "}
                            mottar fremdeles data og viser oppdatert
                            informasjon. Andre tjenester vil ikke bli oppdatert.
                        </p>
                    </div>
                </div>

                <main>{this.props.children}</main>

                <Footer />
            </div>
        );
    }
}
