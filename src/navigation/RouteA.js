import React, {Component} from 'react';
import {Link} from 'react-router';

export default class RouteA extends Component {
    render() {
        return (
            <div>
                <h2>Route A</h2>
                <hr />
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/route-b">Route B</Link>
            </div>
        );
    }
}
