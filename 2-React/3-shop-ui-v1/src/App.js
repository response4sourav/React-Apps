import React, { Component } from 'react';
import Navbar from './components/Navbar';
import classNames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 1,
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

  changeTab(tabIndex) {
    this.setState({ currentTab: tabIndex })
  }

  renderBuyBtn(product) {
    if (product.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
    else return null;
  }
  renderTabPanel(product) {
    let { currentTab } = this.state;
    let panel;
    switch (currentTab) {
      case 1: {
        panel = (<div>{product.description}</div>)
        break;
      }
      case 2: {
        panel = (<div>Not Yet</div>)
        break;
      }
      case 3: {
        panel = (<div>None Yet</div>)
        break;
      }
      default: {
        panel = null;
      }
    }
    return panel;
  }

  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <img src={product.image} className="img-fluid" alt={product.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <br />
              <br />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(1)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="#/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(2)} className={classNames('nav-link', { active: currentTab === 2 })} href="#/">Specification</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(3)} className={classNames('nav-link', { active: currentTab === 3 })} href="#/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar title="onlne-shopping" />
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
