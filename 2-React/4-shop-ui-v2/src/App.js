import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      cart: [],
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

  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }


  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (isCartOpen) return <ViewCart cart={cart} />
    else
      return products.map((item, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product value={item} onBuy={item => this.addToCart(item)} />
          </div>
        )
      })
  }

  render() {
    let { cart, isCartOpen } = this.state
    return (
      <div className="container">
        <Navbar title="onlne-shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-dark">{cart.length}</span> item(s) in cart
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" onClick={e => this.toggleCart()} href="/#">{isCartOpen ? 'View products' : 'View cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
