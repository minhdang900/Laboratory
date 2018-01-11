'use strict';
window.Home = React.createClass({
	getInitialState: function(){
		return {
			data: {
		        labels: ["January", "February", "March", "April", "May", "June", "July"],
		        datasets: [
		            {
		                label: "A",
		                fillColor: "rgba(34,186,160,0.2)",
		                strokeColor: "rgba(34,186,160,1)",
		                pointColor: "rgba(34,186,160,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(18,175,203,1)",
		                data: [28, 48, 40, 19, 86, 27, 90]
		            }
		        ]
		    }
		}
	},
	componentWillMount: function(){
	},
	componentDidMount: function(){
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return (
				<div className="views">
			       <Header />
			       <div className="view">
				       <div className="pages navbar-through toolbar-through">
				          <div data-page="index" className="page">
					        <div className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
					           <QuickStats />
					           <div className="">
							        <div className="row">
						        		<div className="col-lg-8 col-md-6 c-service">
						        			<Service />
						                </div>
						        		<div className="col-lg-4 col-md-6">
						        			<Activity />
						                </div>
						                <div className="col-lg-6 col-md-6">
						                	<ChartJS title="Waiting Time" id={"chart_01"} height={"150"} type={"column"} data={this.state.data}/>
						                </div>
						                <div className="col-lg-6 col-md-6">
						                	<MorrisJS title={"Like/Dislike"} id={"chart_02"} type={"column"}/>
						                </div>
						        	</div>
					        	</div>
					        </div>
					      </div>
					   {/*End of page*/}
					   </div> 
			       	  <Footer />
			       </div> {/* End of view */}
			     {/* End of views */}
			    </div>
			
		);
	}
});
