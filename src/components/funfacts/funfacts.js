import React, { Component } from 'react';

class FunFacts extends Component {
    state= {
        icon:["icon-instagram-1","icon-jabber","icon-child","icon-person"],
        desc:["1800+ SHOTS CAPTURED","18 PROJECTS COMPLETED","50+ SATISFIED CLIENTS","360 KM WALKED"]
    };

    showFacts=()=>(
        this.state.icon.map((item,i)=>(
            <div className="col-sm-6 col-md-3">
                <div className="fun-fact">
                    <i className={this.state.icon[i]}/>
                    <h4>{this.state.desc[i]}</h4>
                </div>
            </div>
        ))
    );
    render() {
        return (
            <div>
                <h2 className="section-title"><span>FUN FACT</span></h2>
                <div className="row">
                    {this.showFacts()}
                </div>
            </div>
        );
    }
}

export default FunFacts;