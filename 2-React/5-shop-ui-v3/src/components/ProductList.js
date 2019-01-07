

import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Laptop',
                    price: 198000,
                    description: 'New MAC pro',
                    canBuy: true,
                    image: 'images/Laptop.png'
                },
                {
                    id: 2,
                    name: 'Mobile',
                    price: 18000,
                    description: 'New  pro',
                    canBuy: true,
                    image: 'images/Mobile.png'
                }
            ]
        }
    }
    renderProducts() {
        let { products } = this.state;
        return products.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product value={item} onBuy={item => this.props.onBuy(item)} />
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