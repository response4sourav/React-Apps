// import React, { Component } from 'react';

//----------------------------------------
// way-1 :
//----------------------------------------
/*
class Review extends Component {
    render() {
        let { value: review } = this.props;
        return (
            <div className="row">
                <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                    <div className="alert alert-info">
                        {review.stars} &mdash; {review.author}
                        <hr />
                        <p>{review.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;

*/



//----------------------------------------
// way-2 : functional syntax for stateless components
//----------------------------------------

/*
import React from 'react';

function Review(props) {
    let { value: review } = props;
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                <div className="alert alert-info">
                    {review.stars} &mdash; {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    );
}

export default Review; 

*/


//----------------------------------------
// way-2 : arrow-function
//----------------------------------------

import React from 'react';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++)
        arr.push(<i style={{ color: 'red' }} className="fa fa-star" key={i}></i>)
    return arr
}

export default ({ value: review }) => {
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                <div className="alert alert-info">
                    {renderStars(review.stars)} &mdash; {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    );
};
