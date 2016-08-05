import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SupportUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row hdo-card no-gutters">
                    <div className="col-md-5">
                        <div>
                            <h3 className="hdo-card-header p-x-2">Støtt Holder de ord</h3>

                            <div className="p-a-2">
                                <p>
                                    Holder de ord er et dugnadsprosjekt og vi er avhengig av din støtte for å finansiere organisasjonen og drift av våre tjenester.
                                </p>

                                <p>
                                    For å støtte oss kan du sette inn penger på konto <strong>1503 29 354 08</strong> eller bruke Vipps med nummer <strong>11789</strong>.
                                </p>

                                <p><small>Støtter du oss med mer enn 10 000 kr vil navnet ditt bli publisert i <Link to="/portal/om-oss">vår gaveoversikt.</Link></small></p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-7">
                        <img src="//files.holderdeord.no/images/hackaton.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        )
    }
}