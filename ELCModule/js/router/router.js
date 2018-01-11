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
		 
	 },
	render: function(){
		if(true){
			return(
				<ReactRouter.Redirect to="/dashboard"/>
			);
		} else {
			return(<ReactRouter.Redirect to="/login"/>)
		}
	}
})