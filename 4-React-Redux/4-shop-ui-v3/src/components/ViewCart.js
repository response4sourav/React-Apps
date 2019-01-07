
import React from 'react'

import { buy } from '../actions/cart'

import { connect } from 'react-redux';

function incQty(item, buy) {
    buy(item)
}

function renderCartItems(cart, buy) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
                <td><i onClick={e => incQty(item, buy)} className="fa fa-plus"></i></td>
                <td><i className="fa fa-minus"></i></td>
            </tr>
        )
    });
}

const ViewCart = ({ cart, buy }) => {
    return (
        <div>
            <div className="col-md-8 col-lg-6">
                <div className="card card-default">
                    <div className="card-header">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <tbody>
                                {renderCartItems(cart, buy)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buy: (item) => dispatch(buy(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart)