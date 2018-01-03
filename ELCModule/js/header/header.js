window.Header = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		console.log(this);	
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return(
			<div className="navbar">
		          <div className="navbar-inner">
		              <div className="sidebar-pusher">
		                  <ReactRouterDOM.Link to="javascript:void(0);" className="waves-effect waves-button waves-classic push-sidebar">
		                      <i className="fa fa-bars"></i>
		                  </ReactRouterDOM.Link>
		              </div>
		              <div className="logo-box">
		                  <ReactRouterDOM.Link to="index.html" className="logo-text"><span>ELCOM</span></ReactRouterDOM.Link>
		              </div>{/* Logo Box */}
		             
		              <div className="topmenu-outer">
		                  <div className="top-menu">
		                      <ul className="nav navbar-nav navbar-left">
		                          <li>		
		                              <ReactRouterDOM.Link to="javascript:void(0);" className="waves-effect waves-button waves-classic sidebar-toggle"><i className="fa fa-bars"></i></ReactRouterDOM.Link>
		                          </li>
		                          <li>		
		                              <ReactRouterDOM.Link to="javascript:void(0);" className="waves-effect waves-button waves-classic toggle-fullscreen"><i className="fa fa-expand"></i></ReactRouterDOM.Link>
		                          </li>
		                          <li className="dropdown">
		                              <ReactRouterDOM.Link to="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown">
		                                  <i className="fa fa-cogs"></i>
		                              </ReactRouterDOM.Link>
		                              <ul className="dropdown-menu dropdown-md dropdown-list theme-settings" role="menu">
		                                  <li className="li-group">
		                                      <ul className="list-unstyled">
		                                          <li className="no-link" role="presentation">
		                                              Fixed Header 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right fixed-header-check"/>
		                                              </div>
		                                          </li>
		                                      </ul>
		                                  </li>
		                                  <li className="li-group">
		                                      <ul className="list-unstyled">
		                                          <li className="no-link" role="presentation">
		                                              Fixed Sidebar 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right fixed-sidebar-check" />
		                                              </div>
		                                          </li>
		                                          <li className="no-link" role="presentation">
		                                              Horizontal bar 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right horizontal-bar-check" />
		                                              </div>
		                                          </li>
		                                          <li className="no-link" role="presentation">
		                                              Toggle Sidebar 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right toggle-sidebar-check" />
		                                              </div>
		                                          </li>
		                                          <li className="no-link" role="presentation">
		                                              Compact Menu 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right compact-menu-check" />
		                                              </div>
		                                          </li>
		                                          <li className="no-link" role="presentation">
		                                              Hover Menu 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right hover-menu-check" />
		                                              </div>
		                                          </li>
		                                      </ul>
		                                  </li>
		                                  <li className="li-group">
		                                      <ul className="list-unstyled">
		                                          <li className="no-link" role="presentation">
		                                              Boxed Layout 
		                                              <div className="ios-switch pull-right switch-md">
		                                                  <input type="checkbox" className="js-switch pull-right boxed-layout-check" />
		                                              </div>
		                                          </li>
		                                      </ul>
		                                  </li>
		                                  <li className="li-group">
		                                      <ul className="list-unstyled">
		                                          <li className="no-link" role="presentation">
		                                              Choose Theme Color
		                                              <div className="color-switcher">
		                                                  <ReactRouterDOM.Link className="colorbox color-blue" to="?theme=blue" title="Blue Theme" data-css="blue"></ReactRouterDOM.Link>
		                                                  <ReactRouterDOM.Link className="colorbox color-green" to="?theme=green" title="Green Theme" data-css="green"></ReactRouterDOM.Link>
		                                                  <ReactRouterDOM.Link className="colorbox color-red" to="?theme=red" title="Red Theme" data-css="red"></ReactRouterDOM.Link>
		                                                  <ReactRouterDOM.Link className="colorbox color-white" to="?theme=white" title="White Theme" data-css="white"></ReactRouterDOM.Link>
		                                                  <ReactRouterDOM.Link className="colorbox color-purple" to="?theme=purple" title="purple Theme" data-css="purple"></ReactRouterDOM.Link>
		                                                  <ReactRouterDOM.Link className="colorbox color-dark" to="?theme=dark" title="Dark Theme" data-css="dark"></ReactRouterDOM.Link>
		                                              </div>
		                                          </li>
		                                      </ul>
		                                  </li>
		                                  <li className="no-link"><button className="btn btn-default reset-options">Reset Options</button></li>
		                              </ul>
		                          </li>
		                          <li>
		                           <ReactRouterDOM.Link to="/home" className="waves-effect waves-button waves-classic" 
		                          		style={{"padding": "10px 18px", "text-align": "center" }}>
		                          		<span className="menu-icon glyphicon glyphicon-home"></span>
		                          		<p style={{"margin-bottom": "0px"}}>Dashboard</p>
		                          	</ReactRouterDOM.Link>
		                          </li>
		                          <li className="dropdown">
		                              <ReactRouterDOM.Link to="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown" 
		                              	style={{"padding": "10px 18px", "text-align": "center" }}>
		                          		<span className="menu-icon glyphicon glyphicon-briefcase"></span>
		                          		<p style={{"margin-bottom": "0px"}}>UI Kits</p>
		                              </ReactRouterDOM.Link>
		                              <ul className="dropdown-menu dropdown-list" role="menu">
		                                  <li role="presentation"><ReactRouterDOM.Link to="/alert"><i className="fa fa-building" aria-hidden="true"></i>Alert</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/panel"><i className="fa fa-building" aria-hidden="true"></i>Panel</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/button"><i className="fa fa-building" aria-hidden="true"></i>Button</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/tab"><i className="fa fa-building" aria-hidden="true"></i>Tab Accordions</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/toast"><i className="fa fa-building" aria-hidden="true"></i> Toast</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/inbox"><i className="fa fa-building" aria-hidden="true"></i> Inbox</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/form"><i className="fa fa-building" aria-hidden="true"></i> Form</ReactRouterDOM.Link></li>
										  <li role="presentation"><ReactRouterDOM.Link to="/form-element"><i className="fa fa-building" aria-hidden="true"></i> Form Element</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="/cropper"><i className="fa fa-building" aria-hidden="true"></i> Cropper</ReactRouterDOM.Link></li>
		                              </ul>
		                          </li>
		                      </ul>
		                      <ul className="nav navbar-nav navbar-right">
		                          <li className="dropdown">
		                              <ReactRouterDOM.Link to="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success pull-right">4</span></ReactRouterDOM.Link>
		                              <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
		                                  <li><p className="drop-title">You have 4 new  messages !</p></li>
		                                  <li className="dropdown-menu-list slimscroll messages">
		                                      <ul className="list-unstyled">
		                                          <li>
		                                              <ReactRouterDOM.Link to="#">
		                                                  <div className="msg-img"><div className="online off"></div><img className="img-circle" src="ELCommon/images/logo.png" alt="" /></div>
		                                                  <p className="msg-name">Amily Lee</p>
		                                                  <p className="msg-text">Hi David !</p>
		                                                  <p className="msg-time">9 hours ago</p>
		                                              </ReactRouterDOM.Link>
		                                          </li>
		                                      </ul>
		                                  </li>
		                                  <li className="drop-all"><ReactRouterDOM.Link to="#" className="text-center">All Messages</ReactRouterDOM.Link></li>
		                              </ul>
		                          </li>
		                          <li className="dropdown">
		                              <ReactRouterDOM.Link to="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-success pull-right">3</span></ReactRouterDOM.Link>
		                              <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
		                                  <li><p className="drop-title">You have 3 pending tasks !</p></li>
		                                  <li className="dropdown-menu-list slimscroll tasks">
		                                      <ul className="list-unstyled">
		                                          <li>
		                                              <ReactRouterDOM.Link to="#">
		                                                  <div className="task-icon badge badge-info"><i className="icon-heart"></i></div>
		                                                  <span className="badge badge-roundless badge-default pull-right">1h ago</span>
		                                                  <p className="task-details">Reached 24k likes</p>
		                                              </ReactRouterDOM.Link>
		                                          </li>
		                                      </ul>
		                                  </li>
		                                  <li className="drop-all"><ReactRouterDOM.Link to="#" className="text-center">All Tasks</ReactRouterDOM.Link></li>
		                              </ul>
		                          </li>
		                          <li className="dropdown">
		                              <ReactRouterDOM.Link to="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown">
		                                  <span className="user-name">ELCOM<i className="fa fa-angle-down"></i></span>
		                                  <img className="img-circle avatar" src="ELCommon/images/logo.png" width="40" height="40" alt="" />
		                              </ReactRouterDOM.Link>
		                              <ul className="dropdown-menu dropdown-list" role="menu">
		                                  <li role="presentation"><ReactRouterDOM.Link to="profile.html"><i className="fa fa-user"></i>Profile</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="calendar.html"><i className="fa fa-calendar"></i>Calendar</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="inbox.html"><i className="fa fa-envelope"></i>Inbox<span className="badge badge-success pull-right">4</span></ReactRouterDOM.Link></li>
		                                  <li role="presentation" className="divider"></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="lock-screen.html"><i className="fa fa-lock"></i>Lock screen</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="login.html"><i className="fa fa-sign-out m-r-xs"></i>Log out</ReactRouterDOM.Link></li>
		                              </ul>
		                          </li>
		                          <li>
		                              <ReactRouterDOM.Link to="login.html" className="log-out waves-effect waves-button waves-classic">
		                                  <span><i className="fa fa-sign-out m-r-xs"></i>Log out</span>
		                              </ReactRouterDOM.Link>
		                          </li>
		                      </ul>{/* Nav */}
		                  </div>{/* Top Menu */}
		              </div>
		          </div>
		      </div>
		);
	}
})