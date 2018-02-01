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
	    	dataSumTime: {
		    },
		    dataSumRanking: {
		    },
		    dataTableWaitTime: {
		    	categories: ['Time 1', 'Time 2'],
		    	data: [{
					        name: 'Table 1',
					        data: [107, 31]
					    }, {
					        name: 'Table 2',
					        data: [133, 156]
					    }, {
					        name: 'Table 3',
					        data: [1052, 954]
				}]	
		    },
		    dataRanking: {
		    	categories: ['Table 1', 'Table 2'],
		    	data: [{
				        name: 'Like',
				        data: [107, 31]
				    }, {
				        name: 'Dislike',
				        data: [133, 156]
				    }]
		    },
		    store: [],
		    table: [],
		    store_element: 'store-id',
		    table_element: 'table-id'
	    }
	  },
	  componentWillMount: function(){
		  this.getStore(this.getTable);
	  },
	  componentDidMount: function(){
		  var _=this;
		  setTimeout(function(){
			  _.getWaitTime();
			  _.getRanking();
			  _.getInfoTable();
		  },1000);
	  },
	  componentWillUpdate: function(nextProps, nextState){
		  
	  },
	  componentDidUpdate: function(prevProps, prevState){
		    
	  },
	  storeChange: function(element, checked){
		  let count = $('#' + this.state.store_element + ' option:selected').length;
		  if(count == 0){
			  checked = true;
		  }
		  let store = this.state.store;
		  for(let i = 0; i < store.length; i++){
			  if($(element).val() == store[i].value){
				  store[i].selected = checked;
			  }
		  }
		  this.setState({
			  store: store
		  })
		  // get table
		  this.getTable();
	  },
	  storeSelectedAll: function(){
		 console.log('store select all');
	  },
	  tableChange: function(element, checked){
		  console.log('Table Change');
		  let count = $('#' + this.state.table_element + ' option:selected').length;
		  if(count == 0){
			  checked = true;
		  }
		  // get data
		  var _= this;
		  let table = this.state.table;
		  for(let i = 0; i < table.length; i++){
			  if($(element).val() == table[i].value){
				  table[i].selected = checked;
			  }
		  }
		  this.setState({
			  table: table
		  })
		  _.getWaitTime();
		  _.getRanking();
		  _.getInfoTable();
	  },
	  tableSelectedAll: function(){
		  console.log('table select all');
	  },
	  dateChange: function(start, end){
		  // Check have data
		  if(this.state.store.length > 0 && this.state.table.length > 0){
			    this.getWaitTime();
			    this.getRanking();
			    this.getInfoTable();
		  }
	  },
	  getStore: function(callback){
			var _=this;
			common.request({url: common.api.store(), data:{"user_id": "1"}}, (response)=>{
				if(response.status_code == 200){
					let data = response.data;
					let length = data.length;
					let store = [];
					for(let i = 0; i < length; i++){
						store.push({"value": data[i].store_id, "label": data[i].store_name, "title": data[i].store_name, "selected": true});
					}
					_.setState({
						store: store
					});
					if(length > 0){
						callback();
					}
				}
			});
		},
		getTable: function(){
			var _=this;
			var stores = [];
		    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
		    	stores.push($(this).val());
		    });
			common.request({url: common.api.table(), data:{"store_id": stores.toString()}}, (response)=>{
				if(response.status_code == 200){
					let data = response.data;
					let length = data.length;
					let table = [];
					for(let i = 0; i < length; i++){
						table.push({"value": data[i].table_id, "label": data[i].table_name,"title": data[i].table_name, "position": data[i].position, "selected": true});
					}
					_.setState({
						table: table
					});
					
				}
			});
	  },
	  getWaitTime: function(){
		  	var _=this;
		  	var start = moment().subtract(6, 'days'); //Last 7 Days
		    var end = moment();
		    var tables = [];
		    var stores = [];
		    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
		    	stores.push($(this).val());
		    });
		    $('#' + _.state.table_element).multiselect('getSelected').each(function(){
		    	tables.push($(this).val());
		    });
//		    if(tables.length == 0 || stores.length == 0){
//		    	alert('Please select store and table');
//		    	return;
//		    }
		  	let data = {"store_id": stores.toString(), "table_id": tables.toString(), "from": start.format('DD/MM/YYYY'), "to": end.format('DD/MM/YYYY')}
			common.request({url: common.api.waittime(), data: data}, (response)=>{
				if(response.status_code == 200){
					let data = response.data;
					let length = data.length;
					let labels = [];
					let datasets = [];
					for(let i = 0; i < length; i++){
						labels.push(data[i].date_time);
						datasets.push(Number(data[i].wait_time));
					}
					_.setState({
						dataSumTime:{
							categories: labels,
							data: [{name:"Wait Time", data:datasets}]
						}
					});
				}
			});  
	  },
	  getRanking: function(){
		  	var _=this;
		  	var start = moment().subtract(6, 'days'); //Last 7 Days
		    var end = moment();
		    var tables = [];
		    var stores = [];
		    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
		    	stores.push($(this).val());
		    });
		    $('#' + _.state.table_element).multiselect('getSelected').each(function(){
		    	tables.push($(this).val());
		    });
		  	let data = {"store_id": stores.toString(), "table_id": tables.toString(), "from": start.format("DD/MM/YYYY"), "to": end.format("DD/MM/YYYY")}
			common.request({url: common.api.ranking(), data: data}, (response)=>{
				if(response.status_code == 200){
					let data = response.data;
					let length = data.length;
					let categories = [];
					let likes = [];
					let dislikes = [];
					for(let i = 0; i < length; i++){
						categories.push(data[i].date_time);
						likes.push(Number(data[i].like));
						dislikes.push(Number(data[i].dislike));
					}
					_.setState({
						dataSumRanking:{
							categories: categories,
							data: [{name:"Like", data:likes}, {name:"Dislike", data:dislikes}]
						}
					});
				}
			});  
	  },
	  getInfoTable: function(){
		    var _=this;
		  	var start = moment().subtract(6, 'days'); //Last 7 Days
		    var end = moment();
		    var tables = [];
		    $('#' + _.state.table_element).multiselect('getSelected').each(function(){
		    	tables.push($(this).val());
		    });
		  	let data = {"table_id": tables.toString(), "from": start.format('DD/MM/YYYY'), "to": end.format('DD/MM/YYYY')};
			common.request({url: common.api.tableinfo(), data: data}, (response)=>{
				if(response.status_code == 200){
					let data = response.data;
					let length = data.length;
					let rankingLike = [];
					let rankingDislike = [];
					let rankingLabels = [];
					let waittime = [];
					let ranking = [];
					let timeLabels = [];					
					for(let i =0; i < length; i++){
						let tables = data[i].tables;
						let tableNum = tables.length; // number of table
						timeLabels.push(data[i].date_time); // dd/mm/yyyy
						for(let j=0; j< tableNum; j++){ // foreach by number of table
							let dataTmp = [];
							if(i == 0) { 
								rankingLabels.push(tables[j].table_name); // [table 1,.,n]
								dataTmp.push(common.timeToMinute(tables[j].wait_time));
								waittime.push({name: tables[j].table_name, data: dataTmp});
								rankingLike.push(Number(tables[j].like));
								rankingDislike.push(Number(tables[j].dislike));
							} else {
								waittime[j].data.push(common.timeToMinute(tables[j].wait_time));
								rankingLike[j] = rankingLike[j] + Number(tables[j].like);
								rankingDislike[j] = rankingLike[j] + Number(tables[j].dislike);
							}
						}
					}
					ranking.push({name: "Like", data: rankingLike});
					ranking.push({name: "Dislike", data: rankingDislike});
					_.setState({
						dataTableWaitTime: {
					    	categories: timeLabels,
					    	data: waittime
					    },
					    dataRanking: {
					    	categories: rankingLabels,
					    	data: ranking
					    },
					});
				}
			});  
	  },
	  render: function(){
		   return (
				   <div className="views">
				       <Header index={2}/>
				       <div className="view">
					       <div className="pages navbar-through toolbar-through">
					       	  <FilterBar storeChange={this.storeChange} display={true} isExport={true} element={"page-content"}
					       	  			storeSelectedAll={this.storeSelectedAll} 
					       	  			tableChange={this.tableChange}
					       	  			tableSelectedAll={this.tableSelectedAll}
					       	  			store_element={this.state.store_element} 
					       	  			table_element={this.state.table_element} 
					       	  			store={this.state.store} 
					       	  			table={this.state.table}
					       	  			dateChange={this.dateChange} format = {"DD/MM/YYYY"}/>
					          <div data-page="index" className="page">
						        <div id="page-content" className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
						           <div className="">
								        <div className="row" style={{"margin": "5px"}}>
							                <div className="col-lg-6 col-md-6">
							                	<HighCharts 
							                	    type={"area"}
							                		title={"Wait Time"} 
							                		id={"report_chart_01"} 
							                		yAxis = {"Time (minus)"}
							                	    valueSuffix = {" minus"}
							                		data={this.state.dataSumTime.data} 
							                		categories={this.state.dataSumTime.categories}/>
							                </div>
							                <div className="col-lg-6 col-md-6">
							                	<HighCharts 
							                	    type={"column"}
							                		title={"Like/Dislike"} 
							                		id={"report_chart_02"} 
							                		yAxis = {"Number of Evaluation"}
							                	    valueSuffix = {" rating"}
							                		data={this.state.dataSumRanking.data} 
							                		categories={this.state.dataSumRanking.categories}/>
							                </div>
							        	</div>
							        	<div className="row">
							                <div className="col-lg-6 col-md-6">
							                	<HighCharts 
							                	    type={"line"}
							                		title={"Waiting Time"} 
							                		id={"report_hchart_01"} 
							                		yAxis = {"Time (minus)"}
							                	    valueSuffix = {" minus"}
							                		data={this.state.dataTableWaitTime.data} 
							                		categories={this.state.dataTableWaitTime.categories}/>
							                </div>
							                <div className="col-lg-6 col-md-6">
							                	<HighCharts 
							                		type={"bar"}
							                		title={"Like/Dislike"} 
							                		id={"report_hchart_02"} 
							                		valueSuffix = {" rating"}
							                		yAxis = {"Number of Evaluation"}
							                		data={this.state.dataRanking.data} 
							                		categories={this.state.dataRanking.categories}/>
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
