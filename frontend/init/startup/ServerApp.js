// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from '../Router';

//Instruments
import redusers from '../redusers';
import Routes from '../Router/Routes';

export default class ClientApp extends Component {
    render () {
        const { location } = this.props;
        const initialState =  { ...this.props };

        delete initialState.location;

        const store = createStore(
            redusers,
            initialState
        );

        return (
            <Provider store = { store }>
                <Router location = { location }>
                    <Routes />
                </Router>
            </Provider>
        );
    }
}