window.QuickStats = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return (
				<div className="row c-quickstats">
	                <div className="col-lg-3 col-md-6">
	                    <div className="panel info-box panel-white">
	                        <div className="panel-body">
	                            <div className="info-box-stats">
	                                <p className="counter">2</p>
	                                <span className="info-box-title">Waiting</span>
	                            </div>
	                            <div className="info-box-icon">
	                                <i className="icon-users"></i>
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
	                <div className="col-lg-3 col-md-6">
	                    <div className="panel info-box panel-white">
	                        <div className="panel-body">
	                            <div className="info-box-stats">
	                                <p className="counter">4</p>
	                                <span className="info-box-title">Call Bill</span>
	                            </div>
	                            <div className="info-box-icon">
	                                <i className="icon-eye"></i>
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
	                <div className="col-lg-3 col-md-6">
	                    <div className="panel info-box panel-white">
	                        <div className="panel-body">
	                            <div className="info-box-stats">
	                                <p>$<span className="counter">5</span></p>
	                                <span className="info-box-title">Like</span>
	                            </div>
	                            <div className="info-box-icon">
	                                <i className="icon-basket"></i>
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
	                <div className="col-lg-3 col-md-6">
	                    <div className="panel info-box panel-white">
	                        <div className="panel-body">
	                            <div className="info-box-stats">
	                                <p className="counter">3</p>
	                                <span className="info-box-title">Dislike</span>
	                            </div>
	                            <div className="info-box-icon">
	                                <i className="icon-envelope"></i>
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
		);
	}
});