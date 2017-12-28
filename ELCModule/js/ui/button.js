'use strict';
window.Button = React.createClass({
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
							<div className="row"> {/*Button*/}
	                            <div className="col-md-8">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Button Colors</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <button type="button" className="btn btn-default">Default</button>
	                                        <button type="button" className="btn btn-primary">Primary</button>
	                                        <button type="button" className="btn btn-success">Success</button>
	                                        <button type="button" className="btn btn-info">Info</button>
	                                        <button type="button" className="btn btn-warning">Warning</button>
	                                        <button type="button" className="btn btn-danger">Danger</button>
	                                        <button type="button" className="btn btn-default disabled">Disabled</button>
	                                    </div>
	                                </div>
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Button Sizes</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <button type="button" className="btn btn-default btn-xs">Extra small button</button>
	                                        <button type="button" className="btn btn-default btn-sm">Small button</button>
	                                        <button type="button" className="btn btn-default">Default button</button>
	                                        <button type="button" className="btn btn-default btn-lg">Large button</button>
	                                    </div>
	                                </div>
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Rounded Buttons</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <button type="button" className="btn btn-default btn-rounded">Default</button>
	                                        <button type="button" className="btn btn-primary btn-rounded">Primary</button>
	                                        <button type="button" className="btn btn-success btn-rounded">Success</button>
	                                        <button type="button" className="btn btn-info btn-rounded">Info</button>
	                                        <button type="button" className="btn btn-warning btn-rounded">Warning</button>
	                                        <button type="button" className="btn btn-danger btn-rounded">Danger</button>
	                                    </div>
	                                </div>
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Button Addons</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <button type="button" className="btn btn-default btn-addon m-b-sm"><i className="fa fa-plus"></i> Default</button>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm"><i className="fa fa-plus"></i> Primary</button>
	                                        <button type="button" className="btn btn-success btn-addon m-b-sm"><i className="fa fa-plus"></i> Success</button>
	                                        <button type="button" className="btn btn-info btn-addon m-b-sm"><i className="fa fa-plus"></i> Info</button>
	                                        <button type="button" className="btn btn-warning btn-addon m-b-sm"><i className="fa fa-plus"></i> Warning</button>
	                                        <button type="button" className="btn btn-danger btn-addon m-b-sm"><i className="fa fa-plus"></i> Danger</button>
	                                        <div className="clearfix"></div>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-lg"><i className="fa fa-plus"></i> Primary</button>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-sm"><i className="fa fa-plus"></i> Primary</button>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-xs"><i className="fa fa-plus"></i> Primary</button>
	                                        <div className="clearfix"></div>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-rounded"><i className="fa fa-plus"></i> Primary</button>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-rounded btn-lg"><i className="fa fa-plus"></i> Primary</button>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-rounded btn-md"><i className="fa fa-plus"></i> Primary</button>
	                                        <button type="button" className="btn btn-primary btn-addon m-b-sm btn-rounded btn-sm"><i className="fa fa-plus"></i> Primary</button>
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="col-md-4">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Button Groups</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="btn-group">
	                                            <button type="button" className="btn btn-default">Left</button>
	                                            <button type="button" className="btn btn-default">Middle</button>
	                                            <button type="button" className="btn btn-default">Right</button>
	                                        </div>
	                                        <h4 className="m-t-md">Toolbar</h4>
	                                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
	                                            <div className="btn-group" role="group" aria-label="First group">
	                                                <button type="button" className="btn btn-default">1</button>
	                                                <button type="button" className="btn btn-default">2</button>
	                                                <button type="button" className="btn btn-default active">3</button>
	                                                <button type="button" className="btn btn-default">4</button>
	                                            </div>
	                                            <div className="btn-group" role="group" aria-label="Second group">
	                                                <button type="button" className="btn btn-default">5</button>
	                                                <button type="button" className="btn btn-default">6</button>
	                                                <button type="button" className="btn btn-default">7</button>
	                                            </div>
	                                            <div className="btn-group" role="group" aria-label="Third group">
	                                                <button type="button" className="btn btn-default">8</button>
	                                            </div>
	                                        </div>
	                                        <h4 className="m-t-md">Vertical</h4>
	                                        <div className="btn-group-vertical m-t-xs" role="group" aria-label="Vertical button group">
	                                            <button type="button" className="btn btn-default">Top</button>
	                                            <button type="button" className="btn btn-default">Middle</button>
	                                            <button type="button" className="btn btn-default">Bottom</button>
	                                        </div>
	                                        <h4 className="m-t-md">Justified</h4>
	                                        <div className="btn-group btn-group-justified" role="group" aria-label="Justified button group">
	                                            <a href="#" className="btn btn-info" role="button">Left</a>
	                                            <a href="#" className="btn btn-primary" role="button">Middle</a>
	                                            <a href="#" className="btn btn-warning" role="button">Right</a>
	                                        </div>
	                                        <h4 className="m-t-md">Nested</h4>
	                                        <div className="btn-group">
	                                            <button type="button" className="btn btn-default">1</button>
	                                            <button type="button" className="btn btn-default">2</button>
	                                            <div className="btn-group" role="group">
	                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                                                    Dropdown
	                                                    <span className="caret"></span>
	                                                </button>
	                                                <ul className="dropdown-menu" role="menu">
	                                                    <li><a href="#">Dropdown link</a></li>
	                                                    <li><a href="#">Dropdown link</a></li>
	                                                </ul>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Button Dropdowns</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="btn-group m-b-sm">
	                                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                                                Action <span className="caret"></span>
	                                            </button>
	                                            <ul className="dropdown-menu" role="menu">
	                                                <li><a href="#">Action</a></li>
	                                                <li><a href="#">Another action</a></li>
	                                                <li className="divider"></li>
	                                                <li><a href="#">Separated link</a></li>
	                                            </ul>
	                                        </div>
	                                        {/*<!-- Split button -->*/}
	                                        <div className="btn-group m-b-sm">
	                                            <button type="button" className="btn btn-danger">Action</button>
	                                            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                                                <span className="caret"></span>
	                                                <span className="sr-only">Toggle Dropdown</span>
	                                            </button>
	                                            <ul className="dropdown-menu" role="menu">
	                                                <li><a href="#">Action</a></li>
	                                                <li><a href="#">Another action</a></li>
	                                                <li className="divider"></li>
	                                                <li><a href="#">Separated link</a></li>
	                                            </ul>
	                                        </div>
	                                        <div className="clearfix"></div>
	                                        <div className="btn-group dropup">
	                                            <button type="button" className="btn btn-default">Dropup</button>
	                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                                                <span className="caret"></span>
	                                                <span className="sr-only">Toggle Dropdown</span>
	                                            </button>
	                                            <ul className="dropdown-menu" role="menu">
	                                                <li><a href="#">Action</a></li>
	                                                <li><a href="#">Another action</a></li>
	                                                <li><a href="#">Something else here</a></li>
	                                                <li className="divider"></li>
	                                                <li><a href="#">Separated link</a></li>
	                                            </ul>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div> {/*Button*/}
		                    
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
