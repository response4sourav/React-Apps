import React, { Component } from 'react';
import B from './B';
import ValueContext from './ValueContext'

class D extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-dark"> B - component </span>
                    <ValueContext.Consumer>
                        {value => <span>{value}</span>}
                    </ValueContext.Consumer>
                </div>
            </div>
        );
    }
}

export default D;