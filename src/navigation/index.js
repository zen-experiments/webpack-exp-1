import React from 'react';
import {Match, Miss} from 'react-router'

import App from './App';
import Home from './Home';
import RouteA from './RouteA';
import RouteB from './RouteB';
import NoMatch from './NoMatch';

export default (
    <App>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/route-a" component={RouteA} />
        <Match pattern="/route-b" component={RouteB} />
        <Miss component={NoMatch} />
    </App>
);
