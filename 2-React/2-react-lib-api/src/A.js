import React, { Component } from 'react';
import B from './B';
import ValueContext from './ValueContext'

class A extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-dark"> A - component </span>
                    &mdash; {value}

                    <ValueContext.Provider value={value}>
                        <B />
                    </ValueContext.Provider>


                </div>
            </div>
        );
    }
}

export default A;