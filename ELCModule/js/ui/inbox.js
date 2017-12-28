'use strict';
window.Inbox = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		var hiddenMailOptions = function() {
	        if($('.checkbox-mail:checked').length) {
	            $('.mail-hidden-options').css('display', 'inline-block');
	        } else {
	            $('.mail-hidden-options').css('display', 'none');
	        };
	    };
	    
	    hiddenMailOptions();
	    
	    $('.check-mail-all').click(function () {
	        $('.checkbox-mail').click();
	    });
	    
	    $('.checkbox-mail').each(function() {
	        $(this).click(function() {
	            if($(this).closest('tr').hasClass("checked")){
	                $(this).closest('tr').removeClass('checked');
	                hiddenMailOptions();
	            } else {
	                $(this).closest('tr').addClass('checked');
	                hiddenMailOptions();
	            }
	        });
	    });
	    
	    $('.mailbox-content table tr td').not(":first-child").on('click', function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        alert('Hello');
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
							<div className="row m-t-md">
		                        <div className="col-md-12">
		                            <div className="row mailbox-header">
		                                <div className="col-md-2">
		                                    <a href="compose.html" className="btn btn-success btn-block">Compose</a>
		                                </div>
		                                <div className="col-md-6">
		                                    <h2>Inbox</h2>
		                                </div>
		                                <div className="col-md-4">
		                                    <form action="#" method="GET">
		                                        <div className="input-group">
		                                            <input type="text" name="search" className="form-control input-search" placeholder="Search..." />
		                                            <span className="input-group-btn">
		                                                <button className="btn btn-success" type="button"><i className="fa fa-search"></i></button>
		                                            </span>
		                                        </div>
		                                    </form>
		                               </div>
		                            </div>
		                        </div>
		                        <div className="col-md-2">
		                            <ul className="list-unstyled mailbox-nav">
		                                <li className="active"><ReactRouterDOM.Link to="/inbox"><i className="fa fa-inbox"></i>Inbox <span className="badge badge-success pull-right">4</span></ReactRouterDOM.Link></li>
		                                <li><ReactRouterDOM.Link to="/inbox"><i className="fa fa-sign-out"></i>Sent</ReactRouterDOM.Link></li>
		                                <li><ReactRouterDOM.Link to="/inbox"><i className="fa fa-file-text-o"></i>Draft</ReactRouterDOM.Link></li>
		                                <li><ReactRouterDOM.Link to="/inbox"><i className="fa fa-exclamation-circle"></i>Spam</ReactRouterDOM.Link></li>
		                                <li><ReactRouterDOM.Link to="/inbox"><i className="fa fa-trash"></i>Trash</ReactRouterDOM.Link></li>
		                            </ul>
		                        </div>
		                        <div className="col-md-10">
		                            <div className="mailbox-content">
		                            <table className="table">
		                                <thead>
		                                    <tr>
		                                        <th colspan="1" className="hidden-xs">
		                                            <span><input type="checkbox" className="check-mail-all" /></span>
		                                        </th>
		                                        <th className="text-right" colSpan={5}>
		                                            <span className="text-muted m-r-sm">Showing 20 of 346 </span>
		                                            <a className="btn btn-default m-r-sm" data-toggle="tooltip" data-placement="top" title="Refresh"><i className="fa fa-refresh"></i></a>
		                                            <div className="btn-group m-r-sm mail-hidden-options">
		                                                <a className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
		                                                <a className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Report Spam"><i className="fa fa-exclamation-circle"></i></a>
		                                                <a className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Mark as Important"><i className="fa fa-star"></i></a>
		                                                <a className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Mark as Read"><i className="fa fa-pencil"></i></a>
		                                            </div>
		                                            <div className="btn-group m-r-sm mail-hidden-options">
		                                                <div className="btn-group">
		                                                    <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-folder"></i> <span className="caret"></span></a>
		                                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
		                                                        <li><a href="#">Social</a></li>
		                                                        <li><a href="#">Forums</a></li>
		                                                        <li><a href="#">Updates</a></li>
		                                                        <li className="divider"></li>
		                                                        <li><a href="#">Spam</a></li>
		                                                        <li><a href="#">Trash</a></li>
		                                                        <li className="divider"></li>
		                                                        <li><a href="#">New</a></li>
		                                                    </ul>
		                                                </div>
		                                                <div className="btn-group">
		                                                    <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tags"></i> <span className="caret"></span></a>
		                                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
		                                                        <li><a href="#">Work</a></li>
		                                                        <li><a href="#">Family</a></li>
		                                                        <li><a href="#">Social</a></li>
		                                                        <li className="divider"></li>
		                                                        <li><a href="#">Primary</a></li>
		                                                        <li><a href="#">Promotions</a></li>
		                                                        <li><a href="#">Forums</a></li>
		                                                    </ul>
		                                                </div>
		                                            </div>
		                                            <div className="btn-group">
		                                                <a className="btn btn-default"><i className="fa fa-angle-left"></i></a>
		                                                <a className="btn btn-default"><i className="fa fa-angle-right"></i></a>
		                                            </div>
		                                        </th>
		                                    </tr>
		                                </thead>
		                                <tbody>
		                                    <tr className="unread">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail" /></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Google
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            21 march
		                                        </td>
		                                    </tr>
		                                    <tr className="unread">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Themeforest
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            20 march
		                                        </td>
		                                    </tr>
		                                    <tr className="unread">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail" /></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Adobe
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                            <i className="fa fa-paperclip"></i>
		                                        </td>
		                                        <td>
		                                            18 march
		                                        </td>
		                                    </tr>
		                                    <tr className="unread">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail" /></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Apple
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                            <i className="fa fa-paperclip"></i>
		                                        </td>
		                                        <td>
		                                            14 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail" /></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Microsoft
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                            <i className="fa fa-paperclip"></i>
		                                        </td>
		                                        <td>
		                                            11 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Microsoft
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            11 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Microsoft
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Microsoft
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Microsoft
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Themeforest
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Themeforest
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Themeforest
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Dropbox
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Dropbox
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Twitter
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Twitter
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star icon-state-warning"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Twitter
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                            <i className="fa fa-paperclip"></i>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="unread">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Twitter
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="unread">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Themeforest
		                                        </td>
		                                        <td>
		                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                    <tr className="read">
		                                        <td className="hidden-xs">
		                                            <span><input type="checkbox" className="checkbox-mail"/></span>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            <i className="fa fa-star"></i>
		                                        </td>
		                                        <td className="hidden-xs">
		                                            Themeforest
		                                        </td>
		                                        <td>
		                                            Nullam quis risus eget urna mollis ornare vel eu leo
		                                        </td>
		                                        <td>
		                                        </td>
		                                        <td>
		                                            6 march
		                                        </td>
		                                    </tr>
		                                </tbody>
		                            </table>
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
