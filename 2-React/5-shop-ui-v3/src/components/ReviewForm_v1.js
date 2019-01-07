import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggleForm() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        }
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview)
            this.toggleForm();
        }
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (<button onClick={e => this.toggleForm()} className="btn btn-info"><i className="fa fa-plus"></i></button>)
        } else {
            return (
                <div>
                    <div className="col-md-8 col-lg-6">
                        <div className="card card-default">
                            <div className="card-header">Review Form</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <label>stars</label>
                                        <select className="form-control" ref="stars">
                                            {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" ref="author" />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" ref="body"></textarea>
                                    </div>
                                    <button className="btn btn-dark">submit</button>&nbsp;
                                    <button onClick={e => this.toggleForm()} type="button" className="btn btn-danger">cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default ReviewForm;