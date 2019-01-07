import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay'

class CounterBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e
        this.setState({ totalCount })
    }
    renderActionButtons() {
        let numbers = [1, -1, 5, -5, 10, -10, 100, -100, 1000, -1000, 1, -1, 5, -5, 10, -10, 100, -100, 1000, -1000];
        return numbers.map((n, idx) => <ActionButton key={idx} value={n} onAction={e => this.incrementTotalCount(e)} />)
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">counter box :  <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    {
                        /* 
                           <ActionButton value={1} onAction={e => this.incrementTotalCount(e)} />
                           <ActionButton value={10} onAction={e => this.incrementTotalCount(e)} /> 
                        */
                    }
                    {this.renderActionButtons()}
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterBox;