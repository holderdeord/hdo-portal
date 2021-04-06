import React, { Component } from "react";
import { Link } from "react-router";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <Link to="/portal">
                        <div className="hdo-logo" />
                    </Link>

                    <h4>Holder de ord &copy; {new Date().getFullYear()}</h4>

                    <div>
                        <small>
                            Spørsmål? Ta{" "}
                            <a
                                href="mailto:kontakt@holderdeord.no"
                                style={{ textDecoration: "underline" }}
                            >
                                kontakt
                            </a>
                            .
                        </small>
                    </div>

                    <p className="links">
                        <Link to="/portal" alt="Holder de ord">
                            holderdeord.no
                        </Link>
                        &nbsp;&middot;&nbsp;
                        <a
                            href="https://twitter.com/holderdeord/"
                            alt="Holder de ord på Twitter"
                        >
                            @holderdeord
                        </a>
                    </p>
                </div>
            </footer>
        );
    }
}
