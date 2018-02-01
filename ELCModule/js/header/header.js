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
		                              <ReactRouterDOM.Link to="/dashboard" className="waves-effect waves-button waves-classic sidebar-toggle"><i className="fa fa-bars"></i></ReactRouterDOM.Link>
		                          </li>
		                         
		                          <li>
		                           <ReactRouterDOM.Link to="/dashboard" className="waves-effect waves-button waves-classic" 
		                          		style={this.props.index==1?{"padding": "10px 18px", "text-align": "center", "background": "#337ab7", "color": "#fff"}:{"padding": "10px 18px", "text-align": "center"}}>
		                          		<span className="menu-icon glyphicon glyphicon-home"></span>
		                          		<p style={{"margin-bottom": "0px"}}>Dashboard</p>
		                          	</ReactRouterDOM.Link>
		                          </li>
		                          <li>
		                           <ReactRouterDOM.Link to="/report" className="waves-effect waves-button waves-classic" 
		                        	   style={this.props.index==2?{"padding": "10px 18px", "text-align": "center", "background": "#337ab7", "color": "#fff"}:{"padding": "10px 18px", "text-align": "center"}}>
		                          		<span className="menu-icon"><i className="fa fa-line-chart" aria-hidden="true"></i></span>
		                          		<p style={{"margin-bottom": "0px"}}>Report</p>
		                          	</ReactRouterDOM.Link>
		                          </li>
		                          <li>
		                           <ReactRouterDOM.Link to="/history" className="waves-effect waves-button waves-classic" 
		                        	   style={this.props.index==3?{"padding": "10px 18px", "text-align": "center", "background": "#337ab7", "color": "#fff"}:{"padding": "10px 18px", "text-align": "center"}}>
		                          		<span className="menu-icon"><i className="fa fa-history" aria-hidden="true"></i></span>
		                          		<p style={{"margin-bottom": "0px"}}>History</p>
		                          	</ReactRouterDOM.Link>
		                          </li>
		                          
		                      </ul>
		                      <ul className="nav navbar-nav navbar-right">
		                          <li className="dropdown hidden">
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
		                          <li className="dropdown hidden">
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
		                              <ul className="dropdown-menu dropdown-list hidden" role="menu">
		                                  <li role="presentation"><ReactRouterDOM.Link to="profile.html"><i className="fa fa-user"></i>Profile</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="calendar.html"><i className="fa fa-calendar"></i>Calendar</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="inbox.html"><i className="fa fa-envelope"></i>Inbox<span className="badge badge-success pull-right">4</span></ReactRouterDOM.Link></li>
		                                  <li role="presentation" className="divider"></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="lock-screen.html"><i className="fa fa-lock"></i>Lock screen</ReactRouterDOM.Link></li>
		                                  <li role="presentation"><ReactRouterDOM.Link to="login"><i className="fa fa-sign-out m-r-xs"></i>Log out</ReactRouterDOM.Link></li>
		                              </ul>
		                          </li>
		                          <li>
		                              <ReactRouterDOM.Link to="/login" className="log-out waves-effect waves-button waves-classic">
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