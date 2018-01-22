'use strict';
window.Login = React.createClass({
	componentDidMount: function(){
		
	},
	componentWillUnmount: function(){
		
	},
	sendLogin: function(){
		var input = {
				username: $(this.refs.username).val(),
				password: $(this.refs.password).val()
		}
		common.request({url: common.api.login(), type: 'POST', data: input}, (response)=>{
			if(response.status_code == 200){
				common.isLogin = true;
				let user = {role_name: "ADMIN", user_id: response.user_id, role_id: response.role_id, user_name: input.username};
				common.setSession(user); 
				this.props.history.replace("/dashboard");
			} else if(response.status_code == 500){
				$('.login-box p:first').html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'+response.message+'</div>');
				return false;
			} else {
				$('.login-box p:first').html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>Username or Password be wrong</div>');
				return false;
			}
			
		});
	},
	render: function(){
		return(
			<main className="views">
	            <div className="view">
	                <div id="main-wrapper" style={{"margin": "50px"}}>
	                    <div className="row">
	                        <div className="col-md-3 center">
	                            <div className="login-box">
	                                <a href="index.html" className="logo-name text-lg text-center">ESMILE</a>
	                                <p className="text-center m-t-md">Please login into your account.</p>
	                                <form className="m-t-md">
	                                    <div className="form-group">
	                                        <input ref="username" type="text" className="form-control" placeholder="Username" required />
	                                    </div>
	                                    <div className="form-group">
	                                        <input ref="password" type="password" className="form-control" placeholder="Password" required onKeyPress={event => {
	                                            if (event.key === 'Enter') {
	                                                this.sendLogin()
	                                              }
	                                            }} />
	                                    </div>
	                                    <button type="button" className="btn btn-success btn-block" onClick={this.sendLogin}>LOGIN</button>
	                                </form>
	                                <p className="text-center m-t-xs text-sm">2018 &copy; by ELCOM</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </main>
		);
	}
});