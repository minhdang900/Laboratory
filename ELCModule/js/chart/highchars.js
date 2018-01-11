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
		  Highcharts.chart(this.props.id, {
			    chart: {
			        type: 'bar'
			    },
			    title: {
			        text: 'Historic World Population by Region'
			    },
			    subtitle: {
			        text: 'Source:'
			    },
			    xAxis: {
			        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
			        title: {
			            text: null
			        }
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: 'Population (millions)',
			            align: 'high'
			        },
			        labels: {
			            overflow: 'justify'
			        }
			    },
			    tooltip: {
			        valueSuffix: ' millions'
			    },
			    plotOptions: {
			        bar: {
			            dataLabels: {
			                enabled: true
			            }
			        }
			    },
			    legend: {
			        layout: 'vertical',
			        align: 'right',
			        verticalAlign: 'top',
			        x: -40,
			        y: 80,
			        floating: true,
			        borderWidth: 1,
			        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			        shadow: true
			    },
			    credits: {
			        enabled: false
			    },
			    series: this.props.data
			});
	  },
	  componentWillMount: function(){
		  
	  }
	  render: function(){
		   return (
				 <div id={this.props.id}></div>
		   )
	  }
});