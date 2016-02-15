import React, { Component } from 'react';


export default (props) => (
    <div className="person">
        <div className="p-a-1">
            <div className="row">
                <div className="col-xs-4 text-sm-right">
                    <img src={props.image} className="photo" />
                </div>

                <div className="col-xs-7">
                    <h5><mark>{props.name}</mark></h5>

                    <p>{props.title}</p>

                    <small className="p-t-1 text-muted">{props.description}</small>
                </div>
            </div>
        </div>
    </div>
)