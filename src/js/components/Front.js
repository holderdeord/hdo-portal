import React, { Component } from 'react';
import Services from './Services';

export default class Front extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Services />
                </div>
            </div>
        )
    }
}