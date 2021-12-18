'use strict'

import React from 'react';
import { authContext } from '../../context/authContext';
import { When } from 'react-if';
export default class Auth extends React.Component {
    static contextType = authContext;
    render() {
        const loginFlag = this.context.loginFlag;
        const doHaveCapabilities = this.context.can(this.props.capability);
        return (
            <When condition={  doHaveCapabilities}>
                {this.props.children}
            </When>
        )
    }
}