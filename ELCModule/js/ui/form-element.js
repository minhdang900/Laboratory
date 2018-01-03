'use strict';
window.FormElement = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		/*$('select').select2().on('change', function() {
			alert('OK');
		});*/
		    
		   $('.summernote').summernote({
			  height: 350
			});
			
			$('.date-picker').datepicker({
				orientation: "top auto",
				autoclose: true
			});
			
			$('#cp1').colorpicker({
				format: 'hex'
			});
			$('#cp2').colorpicker();
			
	},
	componentWillUnmount: function(){
		
	},
	handleChange : function(){
		alert("OK");
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
					        <div className="row">
								<div className="col-md-6">
									<div className="panel panel-white">
										<div className="panel-heading clearfix">
											<h4 className="panel-title">Basic Form</h4>
										</div>
										<div className="panel-body">
											<form>
												<div className="form-group">
													<label for="exampleInputEmail1">Email address</label>
													<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
												</div>
												<div className="form-group">
													<label for="exampleInputPassword1">Password</label>
													<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
												</div>
												<div className="checkbox">
													<label>
														<input type="checkbox" /> Check me out
													</label>
												</div>
												<button type="submit" className="btn btn-primary">Submit</button>
											</form>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="panel panel-white">
										<div className="panel-heading clearfix">
											<h4 className="panel-title">Horizontal Form</h4>
										</div>
										<div className="panel-body">
											<form className="form-horizontal">
												<div className="form-group">
													<label for="inputEmail3" className="col-sm-2 control-label">Email</label>
													<div className="col-sm-10">
														<input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
														<p className="help-block">Example block-level help text here.</p>
													</div>
												</div>
												<div className="form-group">
													<label for="inputPassword3" className="col-sm-2 control-label">Password</label>
													<div className="col-sm-10">
														<input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
													</div>
												</div>
												<div className="form-group">
													<div className="col-sm-offset-2 col-sm-10">
														<div className="checkbox">
															<label>
																<input type="checkbox" /> Remember me
															</label>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="col-sm-offset-2 col-sm-10">
														<button type="submit" className="btn btn-success">Sign in</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="panel panel-white">
										<div className="panel-heading clearfix">
											<h4 className="panel-title">Inline Form</h4>
										</div>
										<div className="panel-body">
											<form className="form-inline">
												<div className="form-group">
													<label className="sr-only" for="exampleInputEmail2">Email address</label>
													<input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
												</div>
												<div className="form-group">
													<label className="sr-only" for="exampleInputPassword2">Password</label>
													<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
												</div>
												<div className="checkbox">
													<label>
														<input type="checkbox" /> Remember me
													</label>
												</div>
												<button type="submit" className="btn btn-info">Sign in</button>
											</form>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="panel panel-white">
										<div className="panel-heading clearfix">
											<h4 className="panel-title">Form Elements</h4>
										</div>
										<div className="panel-body">
											<form className="form-horizontal">
												<div className="form-group">
													<label for="input-Default" className="col-sm-2 control-label">Default</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-Default" />
													</div>
												</div>
												<div className="form-group">
													<label for="input-help-block" className="col-sm-2 control-label">Help Block</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-help-block" />
														<p className="help-block">Example block-level help text here.</p>
													</div>
												</div>
												<div className="form-group">
													<label for="input-placeholder" className="col-sm-2 control-label">Placeholder</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-placeholder" placeholder="placeholder" />
													</div>
												</div> 
												<div className="form-group">
													<label for="input-rounded" className="col-sm-2 control-label">Rounded Input</label>
													<div className="col-sm-10">
														<input type="text" className="form-control input-rounded" id="input-rounded" />
													</div>
												</div>
												<div className="form-group">
													<label for="input-disabled" className="col-sm-2 control-label">Disabled Input</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-disabled" placeholder="You can't type here..." disabled />
													</div>
												</div>
												<div className="form-group">
													<label for="input-readonly" className="col-sm-2 control-label">ReadOnly Input</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-readonly" placeholder="This is readonly input..." readonly />
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Static Control</label>
													<div className="col-sm-10">
														<p className="form-control-static">email@example.com</p>
													</div>
												</div>
												<div className="form-group">
													<label for="input-password" className="col-sm-2 control-label">Password</label>
													<div className="col-sm-10">
														<input type="password" className="form-control" id="input-password" placeholder="Password"/>
													</div>
												</div>
												<div className="form-group has-success">
													<label for="input-success" className="col-sm-2 control-label">Input with success</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-success"/>
													</div>
												</div>
												<div className="form-group has-warning">
													<label for="input-warning" className="col-sm-2 control-label">Input with warning</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-warning"/>
													</div>
												</div>
												<div className="form-group has-error">
													<label for="input-error" className="col-sm-2 control-label">Input with error</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="input-error"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Checkboxes</label>
													<div className="col-sm-10">
														<div className="checkbox">
															<label>
																<input type="checkbox"/>Unchecked
															</label>
														</div>
														<div className="checkbox">
															<label>
																<input type="checkbox" checked/>Checked
															</label>
														</div>
														<div className="checkbox">
															<label>
																<input type="checkbox" checked disabled/>Checked &amp; Disabled
															</label>
														</div>
														<div className="checkbox">
															<label>
																<input type="checkbox" disabled/>Disabled
															</label>
														</div>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Select</label>
													<div className="col-sm-10">
														<select className="form-control m-b-sm">
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
														<select multiple className="form-control">
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Control sizing</label>
													<div className="col-sm-10">
														<input className="form-control input-lg m-b-sm" type="text" placeholder=".input-lg"/>
														<input className="form-control m-b-sm" type="text" placeholder="Default input"/>
														<input className="form-control input-sm" type="text" placeholder=".input-sm"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Column sizing</label>
													<div className="col-sm-10">
														<div className="row">
															<div className="col-md-2">
																<input type="text" className="form-control" placeholder=".col-md-2"/>
															</div>
															<div className="col-md-3">
																<input type="text" className="form-control" placeholder=".col-md-3"/>
															</div>
															<div className="col-md-4">
																<input type="text" className="form-control" placeholder=".col-md-4"/>
															</div>
														</div>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Input groups</label>
													<div className="col-sm-10">
														<div className="input-group m-b-sm">
															<span className="input-group-addon" id="basic-addon1">@</span>
															<input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
														</div>
														<div className="input-group m-b-sm">
															<input type="text" className="form-control" aria-describedby="basic-addon2"/>
															<span className="input-group-addon" id="basic-addon2">.00</span>
														</div>
														<div className="input-group m-b-sm">
															<span className="input-group-addon">$</span>
															<input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
															<span className="input-group-addon">.00</span>
														</div>
														<div className="input-group m-b-sm">
															<span className="input-group-addon">
																<input type="checkbox" aria-label="..."/>
															</span>
															<input type="text" className="form-control" aria-label="..."/>
														</div>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Button addons</label>
													<div className="col-sm-10">
														<div className="input-group m-b-sm">
															<span className="input-group-btn">
																<button className="btn btn-default" type="button">Go!</button>
															</span>
															<input type="text" className="form-control"/>
														</div>
														<div className="input-group m-b-sm">
															<input type="text" className="form-control"/>
															<span className="input-group-btn">
																<button className="btn btn-default" type="button">Go!</button>
															</span>
														</div>
														<div className="input-group m-b-sm">
															<div className="input-group-btn">
																<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action <span className="caret"></span></button>
																<ul className="dropdown-menu" role="menu">
																	<li><a href="#">Action</a></li>
																	<li><a href="#">Another action</a></li>
																	<li><a href="#">Something else here</a></li>
																	<li className="divider"></li>
																	<li><a href="#">Separated link</a></li>
																</ul>
															</div>
															<input type="text" className="form-control" aria-label="..."/>
														</div>
														<div className="input-group">
															<input type="text" className="form-control" aria-label="..."/>
															<div className="input-group-btn">
																<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action <span className="caret"></span></button>
																<ul className="dropdown-menu dropdown-menu-right" role="menu">
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
												<div className="form-group">
													<label className="col-sm-2 control-label">Date Picker</label>
													<div className="col-sm-10">
														<input type="text" className="form-control date-picker"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Color Picker</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="cp1" value="#d43e3e"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">RGBA</label>
													<div className="col-sm-10">
														<input type="text" className="form-control" id="cp2" value="rgba(68,89,204,1)" data-color-format="rgba"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-sm-2 control-label">Wysiwyg</label>
													<div className="col-sm-10">
														<div className="summernote"></div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
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
