import React, { Component } from 'react';
import Text from './Text';
import People from './People';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="hdo-card m-b-1">
                    <Text name="om-oss" />
                </div>

                <People />
            </div>
        )
    }

}