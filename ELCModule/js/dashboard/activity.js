'use strict';
window.Activity = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
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
	},
	componentWillUpdate: function(nextProps, nextState){
		
	},
	componentWillUnmount: function(){
	},
	render: function(){
		return (
            <div className="panel panel-white">
	            <div className="panel-heading">
	                <h4 className="panel-title">Activity</h4>
	                <div className="panel-control">
	                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
	                </div>
	            </div>
	            <div className="panel-body">
	                <div className="inbox-widget slimscroll">
	                	 {this.props.dataset.map((item)=>{
	                		 return(
	                			<div className="inbox-item">
	 			                    <div className="inbox-item-img"><img src="ELCModule/images/icon.png" /></div>
	 			                    <p className="inbox-item-author">{item.service_name}</p>
	 			                    <p className="inbox-item-text">{item.table_num}</p>
	 			                    <p className="inbox-item-date">{item.call_time}</p>
	 			                </div>
	                		)
	                		 
	                	 })}
			             
	                </div>
	            </div>
	        </div>
		);
	}
});