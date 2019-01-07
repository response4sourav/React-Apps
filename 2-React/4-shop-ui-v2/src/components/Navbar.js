

import React from 'react';

/*
class Navbar extends React.Component {
    render() {
        let { title } = this.props;
        return (
            <div>
                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand" href="#/">{title}</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;

*/

export default ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand" href="#/">{title}</a>
            </nav>
        </div>
    );
}