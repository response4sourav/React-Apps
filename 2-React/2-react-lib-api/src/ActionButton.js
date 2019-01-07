import React, { Component } from 'react';
import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment() {
        let { count } = this.state;
        count += 1
        this.setState({ count })
        let { onAction, value } = this.props;
        if (onAction) {
            onAction(value);
        }
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = value > 0 ? 'btn btn-success' : 'btn btn-warning';
        return (
            <div className="action-button">
                <div className="card card-deault">
                    <div className="card-body">
                        <button onClick={e => this.increment()} className={className}>{value}</button>
                        &nbsp; &mdash; &nbsp;
                        <span className="badge badge-dark">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButton;