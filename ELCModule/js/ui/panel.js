'use strict';
window.Panel = React.createClass({
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
