import React, { Component } from 'react';
import Product from './Product'

import { loadProducts } from '../actions/products'

import { connect } from 'react-redux';

class ProductList extends Component {

    componentDidMount() {
        let { loadAll } = this.props;
        loadAll('elec', 2)
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
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        products: state.products
    }
}
// action dispatcher
function mapDispathToProps(dispatch) {
    return {
        loadAll: (type, size) => dispatch(loadProducts(type, size))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductList);