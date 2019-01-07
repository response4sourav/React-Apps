import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    } 
    componentDidMount() {
        //
        let api = "http://localhost:8080/api/products";
        fetch(api)
            .then(response => response.json())
            .then(products => this.setState({ products }))

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