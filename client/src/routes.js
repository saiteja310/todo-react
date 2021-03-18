import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TodoContainer from './todos/containers/todoContainer'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TodoContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }