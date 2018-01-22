window.QuickStats = React.createClass({
	getInitialState: function(){
		return {
		}
	},
	componentWillMount: function(){
	},
	componentDidMount: function(){
	},
	componentWillUpdate: function(){
	},
	componentWillUnmount: function(){
	},
	render: function(){
		return (
				<div className="c-quickstats">
					<div className="row">
		                <div className="col-lg-2 col-md-2 col-sm-4">
		                    <div className="panel info-box panel-white">
		                        <div className="panel-body">
		                            <div className="info-box-stats">
		                                <p className="counter">{this.props.data.waiting}</p>
		                                <span className="info-box-title">Waiting</span>
		                            </div>
		                            <div className="info-box-icon">
		                            	<i className={this.props.data.waiting > 0? "fa fa-bell faa-ring animated":"fa fa-bell"} aria-hidden="true"></i>
		                            </div>
		                            <div className="info-box-progress">
		                                <div className="progress progress-xs progress-squared bs-n">
		                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{"width": "40%"}}>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-lg-2 col-md-2 col-sm-4">
		                    <div className="panel info-box panel-white">
		                        <div className="panel-body">
		                            <div className="info-box-stats">
		                                <p className="counter">{this.props.data.service_bill}</p>
		                                <span className="info-box-title">Call Bill</span>
		                            </div>
		                            <div className="info-box-icon">
		                            	<i className="fa fa-file-text-o" aria-hidden="true"></i>
		                            </div>
		                            <div className="info-box-progress">
		                                <div className="progress progress-xs progress-squared bs-n">
		                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-lg-2 col-md-2 col-sm-4">
		                    <div className="panel info-box panel-white">
		                        <div className="panel-body">
		                            <div className="info-box-stats">
		                                <p className="counter">{this.props.data.service_order}</p>
		                                <span className="info-box-title">Call Order</span>
		                            </div>
		                            <div className="info-box-icon">
		                            	<i className="fa fa-cutlery" aria-hidden="true"></i>
		                            </div>
		                            <div className="info-box-progress">
		                                <div className="progress progress-xs progress-squared bs-n">
		                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
	                	<div className="col-lg-2 col-md-2 col-sm-4">
		                    <div className="panel info-box panel-white">
		                        <div className="panel-body">
		                            <div className="info-box-stats">
		                                <p className="counter">{this.props.data.wait_time}</p>
		                                <span className="info-box-title">Wait Time</span>
		                            </div>
		                            <div className="info-box-icon">
		                            	<i className="fa fa-clock-o" aria-hidden="true"></i>
		                            </div>
		                            <div className="info-box-progress">
		                                <div className="progress progress-xs progress-squared bs-n">
		                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-lg-2 col-md-2 col-sm-4">
		                    <div className="panel info-box panel-white">
		                        <div className="panel-body">
		                            <div className="info-box-stats">
		                                <p><span className="counter">{this.props.data.like}</span></p>
		                                <span className="info-box-title">Like</span>
		                            </div>
		                            <div className="info-box-icon">
		                            	<i className="fa fa-thumbs-up" aria-hidden="true"></i>
		                            </div>
		                            <div className="info-box-progress">
		                                <div className="progress progress-xs progress-squared bs-n">
		                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-lg-2 col-md-2 col-sm-4">
		                    <div className="panel info-box panel-white">
		                        <div className="panel-body">
		                            <div className="info-box-stats">
		                                <p className="counter">{this.props.data.dislike}</p>
		                                <span className="info-box-title">Dislike</span>
		                            </div>
		                            <div className="info-box-icon">
		                            	<i className="fa fa-thumbs-down" aria-hidden="true"></i>
		                            </div>
		                            <div className="info-box-progress">
		                                <div className="progress progress-xs progress-squared bs-n">
		                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"width": "50%"}}>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		          </div>
				</div>
				
		);
	}
});