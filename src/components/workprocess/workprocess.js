import React, { Component } from 'react';

class WorkProcess extends Component {
    state = {
        icon:["icon-lamp","fa fa-puzzle-piece","icon-brush","fa fa-cube","fa fa-bug","fa fa-rocket"],
        desc:["IDEA","CONCEPT","DESIGN","DEVELOP","TEST","LAUNCH"]
    };
    showProcess=()=>(
        this.state.icon.map((item,i)=>(
            <div className="col-xs-6 col-sm-4 col-md-2">
                <div className="process">
                    <div className="process-box">
                        <i className={this.state.icon[i]}/>
                        <h4>{this.state.desc[i]}</h4>
                    </div>
                </div>
            </div>
        ))
    );
    render() {
        return (
            <div>
                <h2 className="section-title"><span><i className="icon-layers-alt"/>WORK PROCESS</span></h2>
                <div className="row">
                    {this.showProcess()}
                </div>
            </div>
        );
    }
}

export default WorkProcess;