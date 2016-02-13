import React, { Component } from 'react';
import text from '../../text';

export default class Text extends Component {
    render() {
        return (
            <div
                className="text"
                dangerouslySetInnerHTML={{__html: text[this.props.name]}} />
        )
    }
}