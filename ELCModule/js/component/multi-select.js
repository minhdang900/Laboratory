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
	        nonSelectedText: this.props.nonSelectedText,
	        nSelectedText: this.props.nSelectedText,
	        allSelectedText: this.props.allSelectedText,
	        buttonWidth: '100%',
	        includeSelectAllOption: true,
	        enableFiltering: true,
	        onChange: function(element, checked){
	        	_.props.onChange(element, checked);
	        },
	        onSelectAll: function(){
	        	console.log($('#' + _.props.id).multiselect('getSelected'));
	        	_.props.onSelectAll();
	        },
	        onDeselectAll: function(){
	        	
	        }
	    });
        $('#' + this.props.id).multiselect('dataprovider', this.props.options);
        var checkBox = $("input[type=checkbox]:not(.switchery), input[type=radio]:not(.no-uniform)");
		if (checkBox.size() > 0) {
		    checkBox.each(function() {
		        $(this).uniform();
		    });
		};
	},
	componentWillUpdate: function(nextProps, nextState){
		$('#' + this.props.id).multiselect('dataprovider', nextProps.options);
        var checkBox = $("input[type=checkbox]:not(.switchery), input[type=radio]:not(.no-uniform)");
		if (checkBox.size() > 0) {
		    checkBox.each(function() {
		        $(this).uniform();
		    });
		};
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return(
			<select id={this.props.id} multiple={this.props.multiple?"multiple":""}></select>
		);
	}
});