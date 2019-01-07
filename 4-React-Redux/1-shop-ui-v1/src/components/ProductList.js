import React, { Component } from 'react';
import Product from './Product'

import store from '../store'
import { loadProducts } from '../actions/products'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        this.unsubscribe = store.subscribe(() => {
            console.log("ProductList - subscribing products state");  
            let products = store.getState().products;
            this.setState({ products })
        })
 

        let action = loadProducts('elec', 2);
        store.dispatch(action)

    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    

    renderProducts() {
        let { products } = this.state;
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

export default ProductList;