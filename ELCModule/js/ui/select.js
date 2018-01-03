/**
@author by DangTM
Use:
<Select
	name="select-field-name"
	multiple={false}
	onChange={this.handleChange}
	options={[{id: 0, text: 'enhancement'}]}/>
**/
'use strict';
window.Select = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		var _ = this; 
		console.log(_.props.multiple);
		$("." + _.props.name).select2({
			data: _.props.options
		}).on('change', function() {
			_.props.onChange();
		});
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return(
			<select className={this.props.name + " js-states form-control"} multiple={this.props.multiple?"multiple":""} tabIndex="-1" style={{"display": "none", "width": "100%"}}>
			</select>
		);
	}
});