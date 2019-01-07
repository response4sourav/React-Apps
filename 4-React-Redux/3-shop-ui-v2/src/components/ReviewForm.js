import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'nag@gmail.com',
            body: ''
        }
    }
    toggleForm() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [field]: fieldValue })
    }
    handleSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = {
            stars, author, body
        }
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview)
            this.toggleForm();
        }
    }
    validateForm() {
        let { stars } = this.state
        if (stars < 3) return true
        else return false;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
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
                                        <select className="form-control" value={stars} id="stars" onChange={e => this.handleChange(e)}>
                                            {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                                        </select>
                                        {stars < 3 ? 'You must give atleast 3 stars' : ''}
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" value={author} id="author" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" value={body} id="body" onChange={e => this.handleChange(e)}></textarea>
                                    </div>
                                    <button disabled={this.validateForm()} className="btn btn-dark">submit</button>&nbsp;
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