import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <hr />
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/route-a">Route A</Link>
                <span> | </span>
                <Link to="/route-b">Route B</Link>
            </div>
        );
    }
}
