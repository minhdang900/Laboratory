'use strict';
window.Toolkit = React.createClass({
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
		                    <h2>{"UI Button"}</h2>
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
		                    
	                        <h2>{"UI Toast"}</h2>
							<div className="row"> {/*Toast*/}
	                            <div className="col-md-12">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Gritter Notifications</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="row">
	                                            <div className="col-md-4">
	                                                <div className="control-group">
	                                                    <div className="controls">
	                                                        <label className="control-label">Title</label>
	                                                        <input id="title" type="text" className="input-large form-control" placeholder="Enter a title ..." />
	                                                        <label className="control-label">Message</label>
	                                                        <textarea className="input-large form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea>
	                                                    </div>
	                                                </div>
	                                                <div className="control-group m-t-lg">
	                                                    <div className="controls">
	                                                        <label for="closeButton">
	                                                            <input id="closeButton" type="checkbox" value="checked" className="input-mini" /> Close Button
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="addBehaviorOnToastClick">
	                                                            <input id="addBehaviorOnToastClick" type="checkbox" value="checked" className="input-mini" /> Add behavior on toast click
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="debugInfo">
	                                                            <input id="debugInfo" type="checkbox" value="checked" className="input-mini" /> Debug
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="progressBar">
	                                                            <input id="progressBar" type="checkbox" value="checked" className="input-mini" /> Progress Bar
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="preventDuplicates">
	                                                            <input id="preventDuplicates" type="checkbox" value="checked" className="input-mini" /> Prevent Duplicates
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="addClear">
	                                                            <input id="addClear" type="checkbox" value="checked" className="input-mini" /> Add button to force clearing a toast, ignoring focus
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="newestOnTop">
	                                                            <input id="newestOnTop" type="checkbox" value="checked" className="input-mini" /> Newest on top
	                                                        </label>
	                                                    </div>
	                                                </div>
	                                            </div>
	
	                                            <div className="col-md-2">
	                                                <div className="control-group" id="toastTypeGroup">
	                                                    <div className="controls">
	                                                        <label>Toast Type</label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="success" checked /> Success
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="info" /> Info
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="warning" /> Warning
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="error" /> Error
	                                                        </label>
	                                                    </div>
	                                                </div>
	                                                <div className="control-group" id="positionGroup">
	                                                    <div className="controls">
	                                                        <label>Position</label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-right" checked /> Top Right
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-right" /> Bottom Right
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-left" /> Bottom Left
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-left" /> Top Left
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-full-width" /> Top Full Width
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-full-width" /> Bottom Full Width
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-center" /> Top Center
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-center" /> Bottom Center
	                                                        </label>
	                                                    </div>
	                                                </div>
	                                            </div>
	
	                                            <div className="col-md-2">
	                                                <div className="control-group">
	                                                    <div className="controls">
	                                                        <label for="showEasing">Show Easing</label>
	                                                        <input id="showEasing" type="text" placeholder="swing, linear" className="input-mini form-control" value="swing" />
	
	                                                        <label for="hideEasing">Hide Easing</label>
	                                                        <input id="hideEasing" type="text" placeholder="swing, linear" className="input-mini form-control" value="linear" />
	
	                                                        <label for="showMethod">Show Method</label>
	                                                        <input id="showMethod" type="text" placeholder="show, fadeIn, slideDown" className="input-mini form-control" value="fadeIn" />
	                            
	                                                        <label for="hideMethod">Hide Method</label>
	                                                        <input id="hideMethod" type="text" placeholder="hide, fadeOut, slideUp" className="input-mini form-control" value="fadeOut" />
	                                                    </div>
	                                                </div>
	                                            </div>
	
	                                            <div className="col-md-3">
	                                                <div className="control-group">
	                                                    <div className="controls">
	                                                        <label for="showDuration">Show Duration</label>
	                                                        <input id="showDuration" type="text" placeholder="ms" className="input-mini form-control" value="300" />
	
	                                                        <label for="hideDuration">Hide Duration</label>
	                                                        <input id="hideDuration" type="text" placeholder="ms" className="input-mini form-control" value="1000" />
	
	                                                        <label for="timeOut">Time out</label>
	                                                        <input id="timeOut" type="text" placeholder="ms" className="input-mini form-control" value="5000" />
	
	                                                        <label for="extendedTimeOut">Extended time out</label>
	                                                        <input id="extendedTimeOut" type="text" placeholder="ms" className="input-mini form-control" value="1000" />
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	
	                                        <div className="row m-t-lg">
	                                            <div className="col-md-12">
	                                                <button type="button" className="btn btn-primary" id="showtoast">Show Toast</button>
	                                                <button type="button" className="btn btn-danger" id="cleartoasts">Clear Toasts</button>
	                                                <button type="button" className="btn btn-danger" id="clearlasttoast">Clear Last Toast</button>
	                                            </div>
	                                        </div>
	
	                                        <div className="row m-t-lg">
	                                            <div className="col-md-12">
	                                                <pre id='toastrOptions'></pre>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div> {/*Toast*/}
	                        <h2>{"UI Pannel"}</h2>
	                        <div> {/*Panel*/}
		    					<h3 className="m-b-sm">Basic example</h3>
		                        <p className="m-b-md">By default, all the <code>.panel</code> does is apply some basic border and padding to contain some content</p>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel">
		                                    <div className="panel-body">
		                                        Basic panel example
		                                    </div>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">Panel with heading</h3>
		                        <p className="m-b-md">Easily add a heading container to your panel with <code>.panel-heading</code>. You may also include any <code>&lt;h1&gt;-&lt;h6&gt;</code> with a <code>.panel-title</code> class to add a pre-styled heading. <br/>For proper link coloring, be sure to place links in headings within <code>.panel-title</code>.</p>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel panel-default">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        Panel content
		                                    </div>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">Panel with footer</h3>
		                        <p className="m-b-md">Wrap buttons or secondary text in <code>.panel-footer</code>. Note that panel footers <strong>do not</strong> inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel panel-default">
		                                    <div className="panel-body">
		                                        Panel content
		                                    </div>
		                                    <div className="panel-footer">Panel footer</div>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">Contextual alternatives</h3>
		                        <p className="m-b-md">Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.</p>
		                        <div className="row">
		                            <div className="col-md-6">
		                                <div className="panel panel-default">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-default</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-primary">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-primary</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-success">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-success</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-info">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-info</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-warning">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-warning</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-danger">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-danger</code>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">Panel Controls</h3>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel panel-white">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel with controls</h3>
		                                        <div className="panel-control">
		                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		                                        </div>
		                                    </div>
		                                    <div className="panel-body">
		                                        This panel comes with controls at top right corner !
		                                    </div>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">Colored Panels</h3>
		                        <p className="m-b-md">Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.</p>
		                        <div className="row">
		                            <div className="col-md-6">
		                                <div className="panel panel-white">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-white</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-purple">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-purple</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-green">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-green</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-blue">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-blue</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-yellow">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-yellow</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="panel panel-red">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel title</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-red</code>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-md-12">
		                                <div className="panel panel-transparent">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Transparent Panel</h3>
		                                        <div className="panel-control">
		                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		                                        </div>
		                                    </div>
		                                    <div className="panel-body">
		                                        <code>.panel-transparent</code>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">With tables</h3>
		                        <p className="m-b-md">Add any non-bordered <code>.table</code> within a panel for a seamless design. If there is a <code>.panel-body</code>, we add an extra border to the top of the table for separation.</p>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel panel-default">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel heading</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		                                    </div>
		                                    <table className="table">
		                                        <thead>
		                                            <tr>
		                                                <th>#</th>
		                                                <th>First Name</th>
		                                                <th>Last Name</th>
		                                                <th>Username</th>
		                                            </tr>
		                                        </thead>
		                                        <tbody>
		                                            <tr>
		                                                <th scope="row">1</th>
		                                                <td>Mark</td>
		                                                <td>Otto</td>
		                                                <td>@mdo</td>
		                                            </tr>
		                                            <tr>
		                                                <th scope="row">2</th>
		                                                <td>Jacob</td>
		                                                <td>Thornton</td>
		                                                <td>@fat</td>
		                                            </tr>
		                                            <tr>
		                                                <th scope="row">3</th>
		                                                <td>Larry</td>
		                                                <td>the Bird</td>
		                                                <td>@twitter</td>
		                                            </tr>
		                                        </tbody>
		                                    </table>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <p>If there is no panel body, the component moves from panel header to table without interruption.</p>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel panel-default">
		                                    <div className="panel-heading">Panel heading</div>
		                                    <table className="table">
		                                        <thead>
		                                            <tr>
		                                                <th>#</th>
		                                                <th>First Name</th>
		                                                <th>Last Name</th>
		                                                <th>Username</th>
		                                            </tr>
		                                        </thead>
		                                        <tbody>
		                                            <tr>
		                                                <th scope="row">1</th>
		                                                <td>Mark</td>
		                                                <td>Otto</td>
		                                                <td>@mdo</td>
		                                            </tr>
		                                            <tr>
		                                                <th scope="row">2</th>
		                                                <td>Jacob</td>
		                                                <td>Thornton</td>
		                                                <td>@fat</td>
		                                            </tr>
		                                            <tr>
		                                                <th scope="row">3</th>
		                                                <td>Larry</td>
		                                                <td>the Bird</td>
		                                                <td>@twitter</td>
		                                            </tr>
		                                        </tbody>
		                                    </table>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">With list groups</h3>
		                        <p className="m-b-md">Easily include full-width list groups within any panel.</p>
		                        <div className="row">
		                            <div className="col-md-12">
		                                <div className="panel panel-default">
		                                    <div className="panel-heading">
		                                        <h3 className="panel-title">Panel heading</h3>
		                                    </div>
		                                    <div className="panel-body">
		                                        <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		                                    </div>
		                                    <ul className="list-group">
		                                        <li className="list-group-item">Cras justo odio</li>
		                                        <li className="list-group-item">Dapibus ac facilisis in</li>
		                                        <li className="list-group-item">Morbi leo risus</li>
		                                        <li className="list-group-item">Porta ac consectetur ac</li>
		                                        <li className="list-group-item">Vestibulum at eros</li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>{/*<!-- Row -->*/}
		                        <h3 className="m-b-sm">Draggable Panels</h3>
		                        <div className="sortable">
		                            <div className="row">
		                                <div className="col-md-6">
		                                    <div className="panel panel-white">
		                                        <div className="panel-heading">
		                                            <h3 className="panel-title">Panel heading</h3>
		                                            <div className="panel-control">
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		                                            </div>
		                                        </div>
		                                        <div className="panel-body">
		                                            <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		                                        </div>
		                                    </div>
		                                    <div className="panel panel-purple">
		                                        <div className="panel-heading">
		                                            <h3 className="panel-title">Panel heading</h3>
		                                            <div className="panel-control">
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		                                            </div>
		                                        </div>
		                                        <div className="panel-body">
		                                            <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="col-md-6">
		                                    <div className="panel panel-green">
		                                        <div className="panel-heading">
		                                            <h3 className="panel-title">Panel heading</h3>
		                                            <div className="panel-control">
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		                                            </div>
		                                        </div>
		                                        <div className="panel-body">
		                                            <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		                                        </div>
		                                    </div>
		                                    <div className="panel panel-red">
		                                        <div className="panel-heading">
		                                            <h3 className="panel-title">Panel heading</h3>
		                                            <div className="panel-control">
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		                                            </div>
		                                        </div>
		                                        <div className="panel-body">
		                                            <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>{/*<!-- Row -->*/}
		                        </div>{/*<!-- Sortable -->*/}
		    				</div> {/*Panel*/}
		    				<h2>{"UI Pannel"}</h2>
		    				<div className="row">
	                            <div className="col-md-6">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Default tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab1" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab4" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                            
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active" id="tab1">
	                                                    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane" id="tab2">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane" id="tab3">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane" id="tab4">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Left tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="tabs-left" role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab9" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab10" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab11" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab12" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab9">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab10">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab11">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab12">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Below tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="tabs-below" role="tabpanel">
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab17">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab18">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab19">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab20">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab17" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab18" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab19" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab20" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                        </div>
	                                    </div>
	                                </div>  
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Pills</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-pills" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab25" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab26" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab27" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab28" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab25">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab26">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab27">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab28">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>  
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Accordion</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
	                                            <div className="panel panel-default">
	                                                <div className="panel-heading" role="tab" id="headingOne">
	                                                    <h4 className="panel-title">
	                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
	                                                            Collapsible Group Item #1
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-default">
	                                                <div className="panel-heading" role="tab" id="headingTwo">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	                                                            Collapsible Group Item #2
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-default">
	                                                <div className="panel-heading" role="tab" id="headingThree">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
	                                                            Collapsible Group Item #3
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                            </div>
	                            <div className="col-md-6">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Fade effect</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab5" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab6" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab7" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab8" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab5">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab6">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab7">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab8">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Right tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="tabs-right" role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab13" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab14" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab15" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab16" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab13">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab14">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab15">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab16">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Justified tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs nav-justified" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab21" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab22" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab23" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab24" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab21">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab22">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab23">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab24">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>   
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Using dropdowns</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                          
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab29" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab30" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab31" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation" className="dropdown">
	                                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
	                                                        Dropdown <span className="caret"></span>
	                                                    </a>
	                                                    <ul className="dropdown-menu" role="menu">
	                                                        <li><a href="#tab32" role="tab" data-toggle="tab">Tab 4</a></li>
	                                                        <li><a href="#tab33" role="tab" data-toggle="tab">Tab 5</a></li>
	                                                    </ul>
	                                                </li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab29">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab30">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab31">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab32">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab33">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Color Options</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
	                                            <div className="panel panel-primary">
	                                                <div className="panel-heading" role="tab" id="headingOne1">
	                                                    <h4 className="panel-title">
	                                                        <a data-toggle="collapse" data-parent="#accordion2" href="#1" aria-expanded="true" aria-controls="collapseOne">
	                                                            Collapsible Group Item #1
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne1">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-success">
	                                                <div className="panel-heading" role="tab" id="headingTwo2">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#2" aria-expanded="false" aria-controls="collapseTwo">
	                                                            Collapsible Group Item #2
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo2">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-danger">
	                                                <div className="panel-heading" role="tab" id="headingThree3">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#3" aria-expanded="false" aria-controls="collapseThree">
	                                                            Collapsible Group Item #3
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree3">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>   
	                            </div>
	                        </div>{/*UI Tab*/}
		    				
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
