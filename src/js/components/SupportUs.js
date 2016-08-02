import React, { Component } from 'react';
import Text from './Text';

export default class SupportUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="hdo-card m-b-1 p-a-2">
                            <h2>Støtt Holder de ord</h2>

                            <p>
                                Holder de ord er et dugnadsprosjekt og vi er avhengig av din støtte for å finansiere drift av nettsidene og organisasjonen.
                            </p>

                            <p>
                                For å støtte oss kan du sette inn penger på konto <strong>1503 29 354 08</strong> eller bruke Vipps med nummer <strong>11789</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}