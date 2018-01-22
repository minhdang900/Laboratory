window.Service = React.createClass({
	getInitialState: function(){
		return{
			datatable: null,
			columns: [
	            { title: "Table Name" },
	            { title: "Service Name" },
	            { title: "Called" },
	            { title: "Call Time" },
	            { title: "Wait Time" },
	            { title: "Status" }
	        ]
		}
	},
	componentWillMount: function(){
	},
	componentDidMount: function(){
		var _=this;
		let datatable = $('#iservice').DataTable({
			data: _.props.dataset,
			columns: _.state.columns
		});
		this.setState({
			datatable: datatable
		});
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
		$('#iservice tbody').on('click', 'button', function () {
	        var data = datatable.row( $(this).parents('tr') ).data();
//	        alert( data[0] +" "+ data[ 2 ] );
	        let store_id = $(data[5]).data('store');
	        let table_id = $(data[5]).data('table');
	        let service_name = $(data[5]).data('service');
	        let status = $(data[5]).data('status');
	        _.sendDone(this, store_id, table_id, service_name, status);
	        
	    });
	},
	sendDone: function($this, store_id, table_id, service_name, status){
		var _=this;
		var data = {"store_id":store_id,"table_id": table_id, "status": status, "service_name":service_name};
		common.request({url: common.api.done(), type:"post", data:data}, (response)=>{
			if(response.status_code == 200){
				 toastr.options = {
		            closeButton: true,
		            progressBar: true,
		            showMethod: 'fadeIn',
		            hideMethod: 'fadeOut',
		            timeOut: 2000
		        };
		        toastr.success('Data updated success', 'Done');
				$($this).html('<i class="fa fa-check-circle" aria-hidden="true"></i> Done');
			}
		});
	},
	componentWillUpdate: function(nextProps, nextState){
		if(this.state.datatable != null){
			this.state.datatable.clear().rows.add(nextProps.dataset).draw();
		}
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return (
            <div className="panel panel-white">
            	<div className="panel-heading">
	            	<h3 className="panel-title"></h3>
					<div className="panel-control">
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		            </div>
            	</div>
	            <div className="panel-body">
	               <div className="table-responsive">
	                	<table id="iservice" classname="display table" style={{"width": "100%", "cellspacing": "0"}}></table>
	               </div>
	            </div>
	        </div>
		);
	}
});