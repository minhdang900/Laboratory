window.Service = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		$('#i-service').DataTable();
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return (
            <div className="panel panel-white">
            	<div className="panel-heading">
	            	<h3 className="panel-title">Panel heading</h3>
					<div className="panel-control">
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		            </div>
            	</div>
	            <div className="panel-body">
	               <div className="table-responsive">
	                <table id="i-service" className="display table" style={{"width": "100%", "cellspacing": "0"}}>
	                    <thead>
	                        <tr>
	                            <th>Table Number</th>
	                            <th>Service Name</th>
	                            <th>Called</th>
	                            <th>Call Time</th>
	                            <th>Wait Time</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        <tr>
	                            <td>001</td>
	                            <td>Bill</td>
	                            <td>3</td>
	                            <td>17:55</td>
	                            <td>04:17</td>
	                        </tr>
	                        <tr>
	                            <td>001</td>
	                            <td>Bill</td>
	                            <td>3</td>
	                            <td>17:55</td>
	                            <td>04:17</td>
	                        </tr>
	                        <tr>
	                            <td>001</td>
	                            <td>Bill</td>
	                            <td>3</td>
	                            <td>17:55</td>
	                            <td>04:17</td>
	                        </tr>
	                    </tbody>
	                   </table>  
	                </div>
	            </div>
	        </div>
		);
	}
});