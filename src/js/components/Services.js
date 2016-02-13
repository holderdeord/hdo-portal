import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import chunk from 'lodash.chunk';

export default class Services extends Component {
    state = { services: [] };

    componentDidMount() {
        fetch('https://files.holderdeord.no/data/hdo/services.json?service=portal')
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
                {chunk(services, 2).map(serviceGroup => (
                    <div className="row" key={serviceGroup.map(e => e.title).join()}>
                        {serviceGroup.map(service => (
                            <div className="col-lg-6" key={service.title}>
                                <div className="service hdo-card m-y-1">
                                    <a href={service.url}>
                                        <div
                                            className="img"
                                            style={service.style || {backgroundImage: `url(${service.img})`}} />

                                        <div className="p-a-1">
                                            <h4>{service.title}</h4>
                                            <p className="description">{service.description}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
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