'use strict';
window.HighCharts = React.createClass({
	  propTypes: {
	    initialValue: React.PropTypes.string
	  },
	  defaultProps: {
	    initialValue: ''
	  },
	  // Set up initial state
	  getInitialState: function() {
	    return {
	    };
	  },
	  componentDidMount: function(){
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
	  componentWillMount: function(){
		  
	  },
	  componentWillUpdate: function(nextProps, nextState){
		  this.chart({type: nextProps.type, id: nextProps.id, valueSuffix: nextProps.valueSuffix, categories: nextProps.categories, series: nextProps.data, title: nextProps.title, yAxis: nextProps.yAxis});
//		  if(nextProps.type =="bar"){
//			  this.barChart({id: nextProps.id, valueSuffix: nextProps.valueSuffix, categories: nextProps.categories, series: nextProps.data, title: nextProps.title, yAxis: nextProps.yAxis});
//		  } else if(nextProps.type == "area"){
//			  this.areaChart({id: nextProps.id, valueSuffix: nextProps.valueSuffix, categories: nextProps.categories, series: nextProps.data, title: nextProps.title, yAxis: nextProps.yAxis});
//		  } else {
//			  this.chart({type: nextProps.type, id: nextProps.id, valueSuffix: nextProps.valueSuffix, categories: nextProps.categories, series: nextProps.data, title: nextProps.title, yAxis: nextProps.yAxis});
//		  }
	  },
	  chart: function(obj){
		  var chart = Highcharts.chart(obj.id, {
			    chart: {
			        type: obj.type
			    },
			    title: {
			        text: obj.title
			    },
			    subtitle: {
			        text: ''
			    },
			    xAxis: {
			        categories: obj.categories,
			        title: {
			            text: null
			        }
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: obj.yAxis,
			            align: 'high'
			        },
			        labels: {
			            overflow: 'justify'
			        }
			    },
			    tooltip: {
			        valueSuffix: obj.valueSuffix,
//			        pointFormat: '{series.name} wait <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			    },
			    plotOptions: {
			        bar: {
			            dataLabels: {
			                enabled: true
			            }
			        }
			    },
			    plotOptions: {
			        area: {
			            marker: {
			                enabled: false,
			                symbol: 'circle',
			                radius: 2,
			                states: {
			                    hover: {
			                        enabled: true
			                    }
			                }
			            }
			        }
			    },
			    credits: {
			        enabled: false
			    },
			    series: obj.series
			});  
	  },
	  barChart: function(obj){
		  var chart = Highcharts.chart(obj.id, {
			    chart: {
			        type: 'bar',
//			        height: 900
			    },
			    title: {
			        text: obj.title
			    },
			    subtitle: {
			        text: ''
			    },
			    xAxis: {
			        categories: obj.categories,
			        title: {
			            text: null
			        }
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: obj.yAxis,
			            align: 'high'
			        },
			        labels: {
			            overflow: 'justify'
			        }
			    },
			    tooltip: {
			        valueSuffix: obj.valueSuffix,
//			        pointFormat: '{series.name} wait <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			    },
			    plotOptions: {
			        area: {
			            marker: {
			                enabled: false,
			                symbol: 'circle',
			                radius: 2,
			                states: {
			                    hover: {
			                        enabled: true
			                    }
			                }
			            }
			        },
			        bar: {
			            dataLabels: {
			                enabled: true
			            }
			        },
//			        series: {
//			            pointWidth: 20
//			        }
			    },
			    credits: {
			        enabled: false
			    },
			    series: obj.series
			});  
	  },
	  areaChart: function(obj){
		  Highcharts.chart(obj.id, {
			    chart: {
			        type: 'area'
			    },
			    title: {
			        text: obj.title
			    },
			    subtitle: {
			        text: ''
			    },
			    xAxis: {
			        allowDecimals: false,
			        categories: obj.categories,
//			        labels: {
//			            formatter: function () {
//			                return this.value; // clean, unformatted number for year
//			            }
//			        }
			    },
			    yAxis: {
			    	min: 0,
			        title: {
			            text: obj.yAxis
			        },
			        labels: {
			            formatter: function () {
			                return this.value;
			            }
			        }
			    },
			    tooltip: {
			        pointFormat: '{series.name} <b>{point.y:,.0f} times</b>'
			    },
			    plotOptions: {
			        area: {
			            marker: {
			                enabled: false,
			                symbol: 'circle',
			                radius: 2,
			                states: {
			                    hover: {
			                        enabled: true
			                    }
			                }
			            }
			        }
			    },
			    series: obj.series
			});
	  },
	  render: function(){
		   return (
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
		               		<div id={this.props.id}></div>
		               </div>
		            </div>
		        </div>
				 
		   )
	  }
});