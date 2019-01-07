import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';
import ReviewForm from './ReviewForm';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
            reviews: []
        }
    }

    changeTab(tabIndex) {
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value: product } = this.props;
                let { id } = product;
                let api = `http://localhost:8080/api/products/${id}/reviews`;
                fetch(api)
                    .then(response => response.json())
                    .then(reviews => {
                        reviews = reviews || [];
                        this.setState({ reviews })
                    })
            }
        })
    }

    handleBuy() {
        let { value: product, onBuy } = this.props;
        if (onBuy)
            onBuy(product)
    }

    renderBuyBtn(product) {
        return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => <Review value={review} key={idx} />)
    }
    handleNewReview(newReview) {
        let { value: product } = this.props;
        let { id } = product;
        let api = `http://localhost:8080/api/products/${id}/reviews`;
        fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(response => response.json())
            .then(review => {
                let { reviews } = this.state;
                reviews = reviews.concat(review);
                this.setState({ reviews })
            })
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
                panel = (
                    <div>
                        {this.renderReviews()}<hr />
                        <ReviewForm onNewReview={newReview => this.handleNewReview(newReview)} />
                    </div>)
                break;
            }
            default: {
                panel = null;
            }
        }
        return panel;
    }

    render() {
        let { value: product } = this.props
        let { currentTab } = this.state;
        return (
            <div>
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
        );
    }
}

export default Product;