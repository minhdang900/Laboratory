/**
 * 
 * @author by DangTM
 * @plugin: plugin.multiselect.js, multiselect.css
 * @Use: <Select name="select-field-name" multiple={false} onChange={this.handleChange} options={[{id: 0, text: 'Selection'}]}/>
 * 
 */
'use strict';
window.MultiSelect = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		var _ = this; 
		  $('#' + this.props.id).multiselect({
            nonSelectedText: 'Select expertise!',
            buttonWidth: '100%',
            includeSelectAllOption: true,
            enableFiltering: true
        });
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return(
			<select id={this.props.id} multiple={this.props.multiple?"multiple":""}>
	            {this.props.options.map(function(item){
	            	return(
	            		<option key={"option_" + item.id} value={item.text}>{item.text}</option>
	            	);
	            })}
	         </select>
		);
	}
});