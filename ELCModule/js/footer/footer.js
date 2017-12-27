window.Footer = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		console.log(this);	
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return(
				 <div className="page-footer">
		            <p className="no-s">2017 &copy; ELCOM HCM.</p>
		          </div>
		);
	}
});