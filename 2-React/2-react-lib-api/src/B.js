import React, { Component } from 'react';
import C from './C';
import D from './D';

class B extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-dark"> B - component </span>
                    <C />
                    <D />
                </div>
            </div>
        );
    }
}

export default B;