import React, { Component } from 'react';
import Text from './Text';
import People from './People';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="hdo-card m-b-1">
                    <Text name="hva-vi-gjor" />
                </div>

                <People />

                <div className="hdo-card m-y-1">
                    <Text name="vare-venner" />
                </div>
            </div>
        )
    }

}