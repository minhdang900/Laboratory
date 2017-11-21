'use strict';
window.Home = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		console.log(this);	
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
				                    <li><ReactRouterDOM.Link to="/home">Layouts</a></li>
				                    <li className="active">Blank Page</li>
				                </ol>
				            </div>
				        </div>
				        <div className="page-content">
				            <div className="row">
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
