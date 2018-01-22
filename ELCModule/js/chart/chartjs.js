window.ChartJS = React.createClass({
	getInitialState: function(){
		return {
			chart: null
		}
	},
	componentWillMount: function(){
	},
	componentDidMount: function(){
		// data sample
//		data: {
//	        labels: ["A","B"],
//	        datasets: [
//	            {
//	                label: "C",
//	                fillColor: "rgba(34,186,160,0.2)",
//	                strokeColor: "rgba(34,186,160,1)",
//	                pointColor: "rgba(34,186,160,1)",
//	                pointStrokeColor: "#fff",
//	                pointHighlightFill: "#fff",
//	                pointHighlightStroke: "rgba(18,175,203,1)",
//	                data: [28, 48]
//	            }
//	        ]
//	    }
		var ctx = document.getElementById(this.props.id).getContext("2d");
	    var data = this.props.data;
	    var chart = new Chart(ctx).Line(data, {
	        scaleShowGridLines : true,
	        scaleGridLineColor : "rgba(0,0,0,.05)",
	        scaleGridLineWidth : 1,
	        scaleShowHorizontalLines: true,
	        scaleShowVerticalLines: true,
	        bezierCurve : true,
	        bezierCurveTension : 0.4,
	        pointDot : true,
	        pointDotRadius : 4,
	        pointDotStrokeWidth : 1,
	        pointHitDetectionRadius : 20,
	        datasetStroke : true,
	        datasetStrokeWidth : 2,
	        datasetFill : true,
	        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	        responsive: true
	    });
	    this.setState({chart: chart});
	},
	componentWillUpdate: function(nextProps, nextState){
		let chart = this.state.chart;
		if(chart != null){
			console.log(nextProps.labels);
			chart.labels = nextProps.labels;
			chart.datasets = nextProps.datasets;
			chart.update({duration: 0});
		}
	},
	componentWillUnmount: function(){
	},
	render: function(){
		return(
			<div className="panel panel-white">
		        <div className="panel-heading">
	            	<h3 className="panel-title">{this.props.title}</h3>
					<div className="panel-control">
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		            </div>
            	</div>
                <div className="panel-body">
                	<div>
                		<canvas id={this.props.id} height={this.props.height}></canvas>
                	</div>
                </div>
            </div>
		);
	}
})