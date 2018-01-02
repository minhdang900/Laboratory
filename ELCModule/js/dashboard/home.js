'use strict';
window.Home = React.createClass({
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
			           
				        <div className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
				        	<QuickStats />
				        	<div className="row">
				        		<Service />
				        	</div>
				        </div>
			          </div>
			          
			        </div>
			        {/* Footer Plugin */}
			        <Footer />
			      </div>
			    </div>
		);
	}
});
