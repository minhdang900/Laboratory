'use strict';
window.Home = React.createClass({
	getInitialState: function(){
		return {
			dataset: [ // state data of datatable real-time
				       ["01", "BILL", "0", "00:00", "00:00", ""]
			],
			quickstats:{
				waiting: 0,
				wait_time: "00:00",
				service_bill: 0,
				service_order: 0,
				like: 0,
				dislike: 0
			},
			dataRealTime: [],
			store: [],
		    table: [],
		    store_element: 'h-store-id',
		    table_element: 'h-table-id',
			dataTime: {
				categories: ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'],
		    	data: [{
					        name: 'Table 1',
					        data: [107, 31, 635, 203, 2]
					    }, {
					        name: 'Table 2',
					        data: [133, 156, 947, 408, 6]
					    }, {
					        name: 'Table 2',
					        data: [1052, 954, 4250, 740, 38]
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
		    }
		}
	},
	componentWillMount: function(){
		common.socket = io();
		common.socket.emit('user', common.getSession().user_name);
		common.socket.on('service', this.realSerevice);
		common.socket.on('quickstats', this.realQuickStats); 
		this.getStore(this.getTable);
	},
	componentDidMount: function(){
	  var _=this;
	  common.blockUI();
	  setTimeout(function(){
		  _.getQuickStats();
		  _.getRealTime();
		  _.getWaitTime();
		  _.getRanking();
		  common.unblockUI();
	  },1000);
	  setInterval(function(){
		  var stores = [];
		    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
		    	stores.push($(this).val());
		    });
		  common.socket.emit('service', {"user_name": common.getSession().user_name, "store_id": stores.toString()});
		  var start = moment().subtract(6, 'days'); //Last 7 Days
		  var end = moment();
		  let data = {"user_name": common.getSession().user_name, "user_id": common.getSession().user_id, "store_id":stores.toString(), "from": start.format("DD/MM/YYYY"), "to": end.format("DD/MM/YYYY")};
		  common.socket.emit('quickstats', data);
	  }, 5000);
	},
	componentWillUpdate: function(nextProps, nextState){
	},
	componentWillUnmount: function(){
	},
	realService: function(data){
		console.log(data);
	},
	realQuickStats: function(data){
		console.log(data);
	},
	getStore: function(callback){
		var _=this;
		common.request({url: common.api.store(), data:{"user_id": common.getSession().user_id}}, (response)=>{
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
	getRealTime: function(){
		var _=this;
		var stores = [];
	    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
	    	stores.push($(this).val());
	    });
		common.request({url: common.api.service(), data: {"store_id": stores.toString()}}, (response)=>{
			if(response.status_code == 200){
				var length = response.data.length;
				let data = response.data;
				var dataset = [];
				for(var i =0; i < length; i++){
					let tmp = [];
					tmp.push(data[i].table_name);
					tmp.push(data[i].service_name);
					tmp.push(data[i].call_num);
					tmp.push(data[i].call_time);
					tmp.push(data[i].wait_time);
					tmp.push('<div data-status="1" data-table="'+data[i].table_id+'" data-service="'+data[i].service_name+'" data-store="'+stores.toString()+'"><button type="button" class="btn btn-default"><i class="fa fa-spinner faa-spin animated"></i> Processing</button></div>');
					dataset.push(tmp);
				}
				_.setState({
					dataset: dataset,
					dataRealTime: response.data
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
	    if(tables.length == 0 || stores.length == 0){
	    	alert('Please select store and table');
	    	return;
	    }
	  	let data = {"store_id": stores.toString(), "table_id": tables.toString(), "from": start.format('DD/MM/YYYY'), "to": end.format('DD/MM/YYYY')}
		common.request({url: common.api.waittime(), data: data}, (response)=>{
			if(response.status_code == 200){
				let data = response.data;
				let length = data.length;
				let labels = [];
				let datasets = [];
				for(let i = 0; i < length; i++){
					labels.push(data[i].date_time);
					datasets.push(data[i].wait_time);
				}
				_.setState({
					dataTime:{
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
					likes.push(data[i].like);
					dislikes.push(data[i].dislike);
				}
				_.setState({
					dataRanking:{
						categories: categories,
						data: [{name:"Like", data:likes}, {name:"Dislike", data:dislikes}]
					}
				});
			}
		});  
   },
   getQuickStats: function(){
	   var _=this;
	   var stores = [];
	   var start = moment().subtract(6, 'days'); //Last 7 Days
	    var end = moment();
	    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
	    	stores.push($(this).val());
	    });
	    let data = {"user_id": common.getSession().user_id, "store_id":stores.toString(), "from": start.format("DD/MM/YYYY"), "to": end.format("DD/MM/YYYY")};
		common.request({url: common.api.quickstats(), data: data}, (response)=>{
			if(response.status_code == 200){
				this.setState({
					quickstats:{
						waiting: response.waiting,
						wait_time: response.wait_time,
						service_bill: response.service_bill,
						service_order: response.service_order,
						like: response.like,
						dislike: response.dislike
					}
				});
			}
		});  
   },
	storeChange: function(element, checked){
		  // get table
		  this.getTable();
	},
	storeSelectedAll: function(){
		console.log('store select all');
	},
	tableChange: function(element, checked){
		 // get data
		 var _=this;
		 _.getWaitTime();
		 _.getRanking();
		 _.getInfoTable();
	 },
	 tableSelectedAll: function(){
		console.log('table select all');
	 },
	 dateChange: function(start, end){
		console.log(start.format('DD/MM/YYYY'));
		console.log(end.format('DD/MM/YYYY'));
	},
	render: function(){
		return (
				<div className="views">
			       <Header index={1}/>
			       <div className="view">
				       <div className="pages navbar-through toolbar-through">
					       <FilterBar storeChange={this.storeChange} display={false} isExport={true} element={"iservice"}
			       	  			storeSelectedAll={this.storeSelectedAll} 
			       	  			tableChange={this.tableChange}
			       	  			tableSelectedAll={this.tableSelectedAll}
			       	  			store_element={this.state.store_element} 
			       	  			table_element={this.state.table_element} 
			       	  			store={this.state.store} 
			       	  			table={this.state.table}
			       	  			dateChange={this.dateChange}/>
				          <div data-page="index" className="page">
					        <div id="home-page-content" className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
					           <QuickStats data={this.state.quickstats}/>
					           <div className="">
							        <div className="row">
						        		<div className="col-lg-8 col-md-6 c-service">
						        			<Service dataset={this.state.dataset}/>
						                </div>
						        		<div className="col-lg-4 col-md-6">
						        			<Activity dataset={this.state.dataRealTime}/>
						                </div>
						                <div className="col-lg-6 col-md-6">
						                	<HighCharts 
						                	    type={"line"}
						                		title={"Wait Time"} 
						                		id={"chart_01"} 
						                		yAxis = {"Time (minus)"}
						                	    valueSuffix = {" minus"}
						                		data={this.state.dataTime.data} 
						                		categories={this.state.dataTime.categories}/>
						                </div>
						                <div className="col-lg-6 col-md-6">
						                	<HighCharts 
						                	    type={"column"}
						                		title={"Like/Dislike"} 
						                		id={"chart_02"} 
						                		yAxis = {"Number of Evaluation"}
						                	    valueSuffix = {" rating"}
						                		data={this.state.dataRanking.data} 
						                		categories={this.state.dataRanking.categories}/>
						                </div>
						        	</div>
					        	</div>
					        </div>
					      </div>
					   {/* End of page */}
					   </div> 
			       	  <Footer />
			       </div> {/* End of view */}
			     {/* End of views */}
			    </div>
		);
	}
});
