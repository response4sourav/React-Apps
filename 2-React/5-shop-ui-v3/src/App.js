import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ViewCart from './components/ViewCart';
import Home from './components/Home';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }


  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }


  render() {
    let { cart } = this.state
    return (
      <div className="container">
        <Navbar title="onlne-shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-dark">{cart.length}</span> item(s) in cart
        <hr />
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products">View products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">View cart</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products"} render={() => <ProductList onBuy={item => this.addToCart(item)} />} />
              <Route path={"/cart"} render={() => <ViewCart cart={cart} />} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
