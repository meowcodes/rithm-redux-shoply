import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ItemList from './ItemList';
import Cart from './Cart';
import { items } from './items.json';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => <ItemList  items={items}/> } />
                <Route exact path='/cart' render={() => <Cart  /> } />
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default Routes;