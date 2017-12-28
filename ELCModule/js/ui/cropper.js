'use strict';
window.Cropper = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		var $image = $(".image-crop > img");

	    $image.cropper({
	        aspectRatio: 7 / 5,
	        preview: ".img-preview"
	    });
	    
	    $("#zoomIn").click(function() {
	        $image.cropper('zoom', 0.1);
	    });

	    $("#zoomOut").click(function() {
	        $image.cropper('zoom', -0.1);
	    });

	    $("#rotateLeft").click(function() {
	        $image.cropper('rotate', 45);
	    });

	    $("#rotateRight").click(function() {
	        $image.cropper('rotate', -45);
	    });
	    
	    $("#clear").click(function() {
	        $image.cropper('clear');
	    });
	    
	    var $replaceWith = $('#replaceWith');
	    $('#replace').click(function () {
	      $image.cropper('replace', $replaceWith.val());
	    });
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
							<div className="row">
		                        <div className="col-md-12">
		                            <div className="panel panel-white">
		                                <div className="panel-heading clearfix">
		                                    <h3 className="panel-title">Image Cropper</h3>
		                                </div>
		                                <div className="panel-body">
		                                    <div className="row">
		                                        <div className="col-md-6">
		                                            <div className="image-crop">
		                                                <img src="ELCModule/images/crop.jpg" style={{"width": "100%", "height": "100%"}} alt="" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-6">
		                                            <h4>Image Preview:</h4>
		                                            <div className="img-preview"></div>
		                                            <div className="m-t-md">
		                                                <button className="btn btn-primary" id="zoomIn">Zoom In</button>
		                                                <button className="btn btn-primary" id="zoomOut">Zoom Out</button>
		                                                <button className="btn btn-primary" id="rotateLeft">Rotate Left</button>
		                                                <button className="btn btn-primary" id="rotateRight">Rotate Right</button>
		                                                <button className="btn btn-primary" id="clear">Clear</button>
		                                                <p className="text-danger m-t-sm">Note: Be sure the browser supports canvas before call Rotate method.</p>
		                                                <div className="input-group m-t-sm">
		                                                    <span className="input-group-btn">
		                                                        <button className="btn btn-primary" id="replace" type="button">Replace</button>
		                                                    </span>
		                                                    <input className="form-control" id="replaceWith" type="text" value="ELCModule/images/crop.jpg" placeholder="Input image URL" />
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
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
