'use strict';
window.Alert = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return (
				<div className="views">
			      {/* Header Plugin */}
			       <Header />
			       {/* Content Plugin */}
			       <div className="view">
			      	<div className="pages navbar-through toolbar-through">
			          <div data-page="index" className="page">
			            <div className="page-title">
				            <h3>Blank Page</h3>
				            <div className="page-breadcrumb">
				                <ol className="breadcrumb">
				                    <li><ReactRouterDOM.Link to="/home">Home</ReactRouterDOM.Link></li>
				                    <li><ReactRouterDOM.Link to="/home">Layouts</ReactRouterDOM.Link></li>
				                    <li className="active">Blank Page</li>
				                </ol>
				            </div>
				        </div>
				        <div className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
				        	<h2>{"UI Alert"}</h2>
				        	<div className="row"> {/*Alert*/}
		                        <div className="col-md-6">
		                            <div className="panel panel-white">
		                                <div className="panel-heading clearfix">
		                                    <h3 className="panel-title">Default alerts</h3>
		                                </div>
		                                <div className="panel-body">
		                                    <div className="alert alert-success" role="alert">
		                                        Well done! You successfully read this important alert message.
		                                    </div>
		                                    <div className="alert alert-info" role="alert">
		                                        Heads up! This alert needs your attention, but it's not super important.
		                                    </div>
		                                    <div className="alert alert-warning" role="alert">
		                                        Warning! Better check yourself, you're not looking too good.
		                                    </div>
		                                    <div className="alert alert-danger" role="alert">
		                                        Oh snap! Change a few things up and try submitting again.
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="panel panel-white">
		                                <div className="panel-heading clearfix">
		                                    <h3 className="panel-title">Links in alerts</h3>
		                                </div>
		                                <div className="panel-body">
		                                    <div className="alert alert-success" role="alert">
		                                        <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
		                                    </div>
		                                    <div className="alert alert-info" role="alert">
		                                        <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
		                                    </div>
		                                    <div className="alert alert-warning" role="alert">
		                                        <strong>Warning!</strong> Better check yourself, you're <a href="#" className="alert-link">not looking too good</a>.
		                                    </div>
		                                    <div className="alert alert-danger" role="alert">
		                                        <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-md-6">
		                            <div className="panel panel-white">
		                                <div className="panel-heading clearfix">
		                                    <h3 className="panel-title">Dismissible alerts</h3>
		                                </div>
		                                <div className="panel-body">
		                                    <div className="alert alert-success alert-dismissible" role="alert">
		                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                        Well done! You successfully read this important alert message.
		                                    </div>
		                                    <div className="alert alert-info alert-dismissible" role="alert">
		                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                        Heads up! This alert needs your attention, but it's not super important.
		                                    </div>
		                                    <div className="alert alert-warning alert-dismissible" role="alert">
		                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                        Warning! Better check yourself, you're not looking too good.
		                                    </div>
		                                    <div className="alert alert-danger alert-dismissible" role="alert">
		                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                        Oh snap! Change a few things up and try submitting again.
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="panel panel-white" id="js-alerts">
		                                <div className="panel-heading clearfix">
		                                    <h3 className="panel-title">Alert messages <small>alert.js</small></h3>
		                                </div>
		                                <div className="panel-body">
		                                    <div className="alert alert-warning alert-dismissible fade in" role="alert">
		                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
		                                        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
		                                    </div>
		                                    <div className="alert alert-danger alert-dismissible fade in" role="alert">
		                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
		                                        <h4>Oh snap! You got an error!</h4>
		                                        <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
		                                        <p>
		                                            <button type="button" className="btn btn-danger">Take this action</button>
		                                            <button type="button" className="btn btn-default">Or do this</button>
		                                        </p>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div> {/*Alert*/}
				        </div>
			          </div>
			          {/* Footer Plugin */}
			         <Footer />
			        </div>
			      </div>
			    </div>
		);
	}
});
