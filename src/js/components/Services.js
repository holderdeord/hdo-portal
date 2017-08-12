import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import chunk from 'lodash.chunk';
import Service from './Service';

export default class Services extends Component {
    state = { services: [] };

    componentDidMount() {
        const service = window.location.host.includes('localhost') ? 'local' : 'portal';

        fetch(`https://files.holderdeord.no/data/hdo/services.json?service=${service}`)
            .then(res => res.ok ? res.json() : [])
            .then(services => this.setState({services: this.clean(services)}));
    }

    render() {
        const { services } = this.state;

        if (!services.length) {
            return null;
        }

        return (
            <div className="services">
                <div className="row">
                    {services.map(service => (
                        <div className={`col-lg-${service.width === 'full' ? '12' : '6'}`} key={service.title}>
                            <Service {...service} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    clean(services) {
        // services = services.filter(s => s.enabled);

        services.forEach(s => {
            if (s.title === 'holderdeord.no') {
                s.title = 'data.holderdeord.no';
            }

            s.url = s.url.replace(/www\.holderdeord\.no/, 'data.holderdeord.no');
        })

        return services;
    }
}