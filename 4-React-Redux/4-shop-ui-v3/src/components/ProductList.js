import React, { Component } from 'react';
import Product from './Product'

import { loadProducts } from '../actions/products'

import { connect } from 'react-redux';

class ProductList extends Component {

    componentDidMount() {
        let { loadProducts } = this.props;
        loadProducts('elec', 2)
    }

    renderProducts() {
        let { products } = this.props;
        return products.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product value={item} />
                </div>
            )
        })
    }
    render() {
        let { status } = this.props;
        return (
            <div>
                {status.message ? <span className="bg-info">{status.message}</span> : null}
                {this.renderProducts()}
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        products: state.products,
        status: state.status
    }
}
// action dispatcher
function mapDispathToProps(dispatch) {
    return {
        loadProducts: (type, size) => dispatch(loadProducts(type, size))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductList);