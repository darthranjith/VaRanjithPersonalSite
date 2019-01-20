import React, { Component } from 'react';

class WorkProcess extends Component {
    render() {
        return (
            <div>
                <h2 class="section-title"><span><i class="icon-layers-alt"></i>WORK PROCESS</span></h2>
                <div class="row">
                    <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="process">
                            <div class="process-box">
                                <i class="icon-lamp"></i>
                                <h4>IDEA</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="process">
                            <div class="process-box">
                                <i class="fa fa-puzzle-piece"></i>
                                <h4>CONCEPT</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="process">
                            <div class="process-box">
                                <i class="icon-brush"></i>
                                <h4>DESIGN</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="process">
                            <div class="process-box">
                                <i class="fa fa-cube"></i>
                                <h4>DEVELOP</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="process">
                            <div class="process-box">
                                <i class="fa fa-bug"></i>
                                <h4>TEST</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="process">
                            <div class="process-box">
                                <i class="fa fa-rocket"></i>
                                <h4>LAUNCH</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkProcess;