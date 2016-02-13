import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <a href="https://www.holderdeord.no/">
                        <div className="hdo-logo" />
                    </a>

                    <h4>Holder de ord &copy; {new Date().getFullYear()}</h4>

                    <div>
                        <small>
                            Spørsmål? Ta <a href="mailto:kontakt@holderdeord.no" style={{textDecoration: 'underline'}}>kontakt</a>.
                        </small>
                    </div>

                    <p className="links">
                        <a href="https://www.holderdeord.no/" alt="Holder de ord">holderdeord.no</a>
                        &nbsp;&middot;&nbsp;
                        <a href="https://twitter.com/holderdeord/" alt="Holder de ord på Twitter">@holderdeord</a>
                    </p>
                </div>
            </footer>
        );
    }
}

