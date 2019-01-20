import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="/resources/images/site/logo.png" alt="logo" />
                <h1>VaRanjith</h1>
                <p>Senior Software Engineer</p>
            </div>
        );
    }
}

export default Header;