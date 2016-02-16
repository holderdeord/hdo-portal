import React from 'react';

export default (service) => (
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
);

