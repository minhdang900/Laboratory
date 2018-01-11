/**
 * @author DangTM 
 * Use: <DateRangePicker id={"report_daterangepicker"}/>
 */
'use strict'
window.DateRangePicker = React.createClass({
	 propTypes: {
	    initialValue: React.PropTypes.string
	  },
	  defaultProps: {
	    initialValue: ''
	  },
	  // Set up initial state
	  getInitialState: function() {
	    return {
	    	
	    }
	  },
	  componentDidMount: function(){
			var start = moment().subtract(6, 'days'); //Last 7 Days
		    var end = moment();
		    var _=this;
		    function cb(start, end) {
		        $('#'+ _.props.id + ' span').html(start.format('DD/MM/YYYY h:mm A') + ' - ' + end.format('DD/MM/YYYY h:mm A'));
		        console.log("Callback");
		    }
		    $('#'+ this.props.id).daterangepicker({
		        startDate: start,
		        endDate: end,
		        ranges: {
		           'Today': [moment(), moment()],
		           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
		           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
		           'This Month': [moment().startOf('month'), moment().endOf('month')],
		           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		        },
		        timePicker: true,
		        timePickerIncrement: 30,
		        locale: {
		            format: 'DD/MM/YYYY h:mm A'
		        }
		    }, cb);
		    cb(start, end);
		    $('#'+ this.props.id).on('cancel.daterangepicker', function(ev, picker) {
		    	console.log(picker);
	    	});
		    $('#'+ this.props.id).on('apply.daterangepicker', function(ev, picker) {
		    	 console.log(picker);
	    	});
	  },
	  render: function(){
		  return(
				  <div id={this.props.id} className="pull-right" 
				  	style={{"background": "#fff", "cursor": "pointer", "padding": "7px 10px", "border": "1px solid #ccc", "width": "100%"}}>
				    <i className="fa fa-calendar"></i>&nbsp;
				    <span></span> <b className="caret"></b>
				  </div>
		  );
	  }
}); 