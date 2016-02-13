import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Person from './Person';
import partition from 'lodash.partition';
import chunk from 'lodash.chunk';

export default class People extends Component {
    state = {people: []};

    componentDidMount() {
        fetch('https://data.holderdeord.no/api/hdo/users')
            .then(res => res.ok ? res.json() : [])
            .then(data => this.setState({
                people: data._embedded.users.sort(sortByLastName)
            }));
    }

    render() {
        const [board, members] = partition(this.state.people, 'board');

        return (
            <div className="hdo-card">
                <h4 className="hdo-card-header p-a-1">Styret</h4>
                {this.renderGroup(board)}

                <h4 className="hdo-card-header p-a-1">Bidragsytere</h4>
                {this.renderGroup(members)}
            </div>
        )
    }

    renderGroup(members) {
        return chunk(members, 2).map(([left, right]) => (
            <div className="row" key={left.name + (right ? right.name : '')}>
                <div className="col-md-6">
                    <Person key={left.name} {...left} />
                </div>

                <div className="col-md-6">
                    {right && <Person key={right.name} {...right} />}
                </div>

                <hr />
            </div>
        ))
    }
}

function sortByLastName(a, b) {
    const aName = a.name.split(' ').slice(-1)[0]
    const bName = b.name.split(' ').slice(-1)[0]

    return aName.localeCompare(bName);
}