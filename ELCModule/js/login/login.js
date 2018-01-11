'use strict';
window.Login = React.createClass({
	componentDidMount: function(){
		
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return(
			<div className="page-content">
	            <div className="page-inner">
	                <div id="main-wrapper">
	                    <div className="row">
	                        <div className="col-md-3 center">
	                            <div className="login-box">
	                                <a href="index.html" className="logo-name text-lg text-center">Modern</a>
	                                <p className="text-center m-t-md">Please login into your account.</p>
	                                <form className="m-t-md" action="index.html">
	                                    <div className="form-group">
	                                        <input type="email" className="form-control" placeholder="Email" required />
	                                    </div>
	                                    <div className="form-group">
	                                        <input type="password" className="form-control" placeholder="Password" required />
	                                    </div>
	                                    <button type="submit" className="btn btn-success btn-block">Login</button>
	                                    <a href="forgot.html" className="display-block text-center m-t-md text-sm">Forgot Password?</a>
	                                    <p className="text-center m-t-xs text-sm">Do not have an account?</p>
	                                    <a href="register.html" className="btn btn-default btn-block m-t-md">Create an account</a>
	                                </form>
	                                <p className="text-center m-t-xs text-sm">2017 &copy;ELCOM</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
});