import React, { Component } from 'react';
import Aboutme from '../aboutme/aboutme';
import TwitterFeed from '../twitterfeed/twitterfeed';

class Container extends Component {
    render() {
        return (
            <div className="wrapper">
                <section id="about" className="page">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-8">
                                <Aboutme></Aboutme>
                            </div>
                            <div className="col-md-4">
                                <TwitterFeed></TwitterFeed>
                            </div>
                            {/* <div className="col-md-3">
                                <h2 className="section-title"><span><i className="icon-cog-1"></i>Latest Pet Projects</span></h2>
                                <ul>
                                    <li><a href="http://eminem.varanjith.com">Eminem (a react project)</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h2 className="section-title"><span><i className="icon-chat"></i>LET'S SOCIALIZE</span></h2>
                                <ul className="social">
                                    <li><a className="facebook" href="https://www.facebook.com/ranjith.varadan"></a></li>
                                    <li><a className="twitter" href="https://twitter.com/VaRanjith"></a></li>
                                    <li><a className="linkedin" href="https://www.linkedin.com/in/varanjith/"></a></li>
                                    <li><a className="github" href="https://github.com/darthranjith"></a></li>
                                    <li><a className="skype" href="skype:r4njith?call"></a></li>
                                    <li><a className="stack-overflow" href="https://stackoverflow.com/users/4365228/ranjith-varadan"></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Container;