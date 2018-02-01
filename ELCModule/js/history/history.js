/**
 * Report overview, time waiting (Up or Down time allow), request by date
 * Report rating: Rating by table, date time, branch/store
 * 
 */
'use strict';
window.History = React.createClass({
	  propTypes: {
	    initialValue: React.PropTypes.string
	  },
	  defaultProps: {
	    initialValue: ''
	  },
	  // Set up initial state
	  getInitialState: function() {
	    return {
	    	datatable: null,
	    	dataset: [ // state data of datatable real-time
				    
			],
			columns: [
			    { title: "Date Time" },
	            { title: "Table Name" },
	            { title: "Service Name" }
	        ],
	        start_date: moment().subtract(6, 'days'),
	        end_date: moment(),
		    store: [],
		    table: [],
		    store_element: 'history-store-id',
		    table_element: 'history-table-id'
	    }
	  },
	  componentWillMount: function(){
		  this.getStore(this.getTable);
	  },
	  componentDidMount: function(){
	    var _=this;
		// Panel Control
		$('.panel-collapse').click(function(){
		    $(this).closest(".panel").children('.panel-body').slideToggle('fast');
		});
		$('.panel-reload').click(function() { 
		    var el = $(this).closest(".panel").children('.panel-body');
		    common.blockUI(el);
		    window.setTimeout(function () {
		        common.unblockUI(el);
		    }, 1000);
		}); 
		$('.panel-remove').click(function(){
		    $(this).closest(".panel").hide();
		});
		let datatable = $('#ihistory').DataTable({
			data: _.state.dataset,
			columns: _.state.columns
		});
		_.setState({
			datatable: datatable
		});
		setTimeout(function(){
			_.getHistory();
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
		  _.getHistory();
	  },
	  tableSelectedAll: function(){
		  console.log('table select all');
	  },
	  dateChange: function(start, end){
		  this.setState({
			  start_date: start,
			  end_date: end
		  });
		  this.getHistory();
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
	  getHistory: function(){
		  	var _=this;
		  	var start = _.state.start_date;
		    var end = _.state.end_date;
		    var tables = [];
		    var stores = [];
		    $('#' + _.state.store_element).multiselect('getSelected').each(function(){
		    	stores.push($(this).val());
		    });
		    $('#' + _.state.table_element).multiselect('getSelected').each(function(){
		    	tables.push($(this).val());
		    });

		  	let data = {"store_id": stores.toString(),"table_id": tables.toString(), "from": start.format('DD/MM/YYYY HH:MM'), "to": end.format('DD/MM/YYYY HH:MM')}
			common.request({url: common.api.history(), data: data, type:"POST"}, (response)=>{
				if(response.status_code == 200){
					let length = response.data.length;
					let data = response.data;
					let dataset = [];
					for(var i =0; i < length; i++){
						let tmp = [];
						tmp.push(data[i].date_time);
						tmp.push(data[i].table_name);
						tmp.push(data[i].service_name);
						dataset.push(tmp);
					}
					_.setState({
						dataset: dataset
					});
					if(_.state.datatable != null){
						_.state.datatable.clear().rows.add(_.state.dataset).draw();
					}
				}
			});  
	  },
	  
	  render: function(){
		   return (
				   <div className="views">
				       <Header index={3}/>
				       <div className="view">
					       <div className="pages navbar-through toolbar-through">
					       	  <FilterBar storeChange={this.storeChange} display={true} 
					       	  			isExport={true} 
					       	  			element={"history-page-content"}
					       	  			data = {this.state.dataset}
					       	  			columns = {this.state.columns}
					       	  			storeSelectedAll={this.storeSelectedAll} 
					       	  			tableChange={this.tableChange}
					       	  			tableSelectedAll={this.tableSelectedAll}
					       	  			store_element={this.state.store_element} 
					       	  			table_element={this.state.table_element} 
					       	  			store={this.state.store} 
					       	  			table={this.state.table}
					       	  			dateChange={this.dateChange}
					       	  			format = {"DD/MM/YYYY h:mm A"} timePicker={true}/>
					          <div data-page="index" className="page">
						        <div id="history-page-content" className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
						        	<div className="panel panel-white">
						            	<div className="panel-heading">
							            	<h3 className="panel-title"></h3>
											<div className="panel-control">
								                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
								                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
								            </div>
						            	</div>
							            <div className="panel-body">
							               <div className="table-responsive">
							                	<table id="ihistory" classname="display table" style={{"width": "100%", "cellspacing": "0"}}></table>
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
