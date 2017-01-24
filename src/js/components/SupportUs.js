import React, { Component } from 'react';
import { Link } from 'react-router';
import Text from './Text';
import ContainerDimensions from 'react-container-dimensions';

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

                <div className="row hdo-card no-gutters m-t-3">
                    <div className="col-md-12">
                        <h3 className="hdo-card-header p-x-2">Bli med på årets viktigste dugnadsprosjekt</h3>
                    </div>

                    <div className="col-md-6">
                        <Text name="bli-med-tekst" />
                    </div>

                    <div className="col-md-6">
                        Høstens og vinterens meetup-kalender:

                        <ContainerDimensions>
                            {props =>
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=holderdeord.no_gf48u1babjpe6bb1bsjkjbuhic%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=Europe%2FOslo"
                                    style={{borderWidth: 0, padding: '1rem .5rem 1rem 0'}}
                                    width={props.width}
                                    height="400"
                                    frameBorder="0"
                                    scrolling="no"
                                    />
                            }
                        </ContainerDimensions>
                    </div>
                </div>

            </div>
        )
    }
}