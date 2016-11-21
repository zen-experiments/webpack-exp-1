import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router'

import routes from './navigation';

render((
    <BrowserRouter>
        {routes}
    </BrowserRouter>
), document.getElementById('root'));
