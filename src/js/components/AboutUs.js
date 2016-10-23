import React, { Component } from 'react';
import Text from './Text';
import People from './People';
import ContactUs from './ContactUs';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="hdo-card m-b-1">
                            <Text name="hva-vi-gjor" />
                        </div>
                    </div>

                    <div className="col-lg-6 hidden-md-down">
                        <div className="hdo-card m-b-1">
                            <ContactUs />
                        </div>
                    </div>
                </div>

                <People />

                <div className="hdo-card m-y-1">
                    <Text name="vare-venner" />
                </div>
            </div>
        )
    }

}