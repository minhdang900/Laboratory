window.Router = React.createClass({
	 propTypes: {
	    initialValue: React.PropTypes.string
	 },
	  defaultProps: {
	    initialValue: ''
	  },
	  // Set up initial state
	  getInitialState: function() {
	    return {
	      
	    };
	  },
	  componentWillUpdate: function(){
		  
	  },
	  componentDidMount: function(){
		 console.log("This is router");
	  },
	render: function(){
		if(common.isLogin){
			return(
				<ReactRouter.Redirect to="/dashboard"/>
			);
		} else {
			return(<ReactRouter.Redirect to="login"/>)
		}
	}
})