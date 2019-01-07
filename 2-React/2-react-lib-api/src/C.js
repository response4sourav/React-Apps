import React, { Component } from 'react';

import ValueContext from './ValueContext'

class C extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-dark"> C - component </span>
                    <span className="">
                        <ValueContext.Consumer>
                            {value => <span>{value}</span>}
                        </ValueContext.Consumer>
                    </span>
                </div>
            </div>
        );
    }
}

export default C;