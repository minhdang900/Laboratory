/**
 * Report overview, time waiting (Up or Down time allow), request by date
 * Report rating: Rating by table, date time, branch/store
 * 
 */
'use strict';
window.Report = React.createClass({
	  propTypes: {
	    initialValue: React.PropTypes.string
	  },
	  defaultProps: {
	    initialValue: ''
	  },
	  // Set up initial state
	  getInitialState: function() {
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
		    },
		    store: [{id: 0, text: 'All Store'}, {id: 1, text: 'Store 1'},  {id: 2, text: 'Store 2'}],
		    table: [{id: 0, text: 'All Table'}, {id: 1, text: 'Table 1'},  {id: 2, text: 'Table 2'}]
	    }
	  },
	  handleStore: function(){
		  
	  },
	  handleTable: function(){
		  
	  },
	  render: function(){
		   return (
				   <div className="views">
				       <Header />
				       <div className="view">
					       <div className="pages navbar-through toolbar-through">
							     <div className="page-title" style={{"height": "70px", "margin-bottom":"5px"}}>
							     	<div className="row">
							     		<div className="col-md-2">
							     			<Select name="select-store" multiple={false} onChange={this.handleStore} options={this.state.store}/>
							     		</div>
							     		<div className="col-md-2">
							     			<Select name="select-table" multiple={false} onChange={this.handleTable} options={this.state.table}/>
							     		</div>
							     		<div className="col-md-2">
							     			<MultiSelect multiple={true} id={"boot-multiselect-demo"} options={this.state.store}/>
							     		</div>
							     		<div className="col-md-3">
							     			<DateRangePicker id={"report_daterangepicker"}/>
							     		</div>
							     	</div>
				                </div>
					          <div data-page="index" className="page">
						        <div className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
						           <div className="">
								        <div className="row">
							                <div className="col-lg-6 col-md-6">
							                	<ChartJS title="Waiting Time" id={"report_chart_01"} height={"150"} type={"column"} data={this.state.data}/>
							                </div>
							                <div className="col-lg-6 col-md-6">
							                	<MorrisJS title={"Like/Dislike"} id={"report_chart_02"} type={"column"}/>
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
		   )
	  }
});
