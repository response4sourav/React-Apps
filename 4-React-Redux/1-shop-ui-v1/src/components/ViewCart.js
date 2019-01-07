
import React from 'react'

import store from '../store'
import { buy } from '../actions/cart'

function incQty(item) {
    store.dispatch(buy(item))
}

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
                <td><i onClick={e => incQty(item)} className="fa fa-plus"></i></td>
                <td><i className="fa fa-minus"></i></td>
            </tr>
        )
    });
}

export default ({ cart }) => {
    return (
        <div>
            <div className="col-md-8 col-lg-6">
                <div className="card card-default">
                    <div className="card-header">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <tbody>
                                {renderCartItems(cart)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}