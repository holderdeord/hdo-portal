import "../../styles/main.scss";

import React, { Component } from "react";

import Header from "./Header";

export default class App extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Header />

                <div className="container">
                    <div
                        style={{
                            background: "#eee",
                            padding: "1rem 2rem",
                            textAlign: "center",
                            margin: "1rem 0",
                        }}
                    >
                        <strong>Holder de ord</strong> er avviklet. Styret har
                        en dialog med en interessent om mulig overtagelse av
                        tjenestene.
                        <div>
                            Spørsmål? Ta{" "}
                            <a
                                href="mailto:kontakt@holderdeord.no"
                                style={{ textDecoration: "underline" }}
                            >
                                kontakt
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
