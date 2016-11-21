import React, {Component} from 'react';
import {Link} from 'react-router';

export default class RouteB extends Component {
    render() {
        return (
            <div>
                <h2>Route B</h2>
                <hr />
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/route-b">Route B</Link>
            </div>
        );
    }
}
