'use strict';
window.Form = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		/*$('select').select2().on('change', function() {
			alert('OK');
		});*/
		    
		    $(".js-example-basic-multiple-limit").select2({
		        maximumSelectionLength: 2
		    });
		    
		    $(".js-example-tokenizer").select2({
		        tags: true,
		        tokenSeparators: [',', ' ']
		    });
		    
		    var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
		 
		    $(".js-example-data-array").select2({
		        data: data
		    });
			
	},
	componentWillUnmount: function(){
		
	},
	handleChange : function(){
		alert("OK");
	},
	render: function(){
		return (
				<div className="views">
			      {/* Header Plugin */}
			       <Header />
			       {/* Content Plugin */}
			       <div className="view">
			      	<div className="pages navbar-through toolbar-through">
			          <div data-page="index" className="page">
			            <div className="page-title">
				            <h3>Blank Page</h3>
				            <div className="page-breadcrumb">
				                <ol className="breadcrumb">
				                    <li><ReactRouterDOM.Link to="/home">Home</ReactRouterDOM.Link></li>
				                    <li><ReactRouterDOM.Link to="/home">Layouts</ReactRouterDOM.Link></li>
				                    <li className="active">Blank Page</li>
				                </ol>
				            </div>
				        </div>
				        <div className="page-content" style={{"background": "transparent", "box-shadow": "none"}}>
					        <div className="row">
		                        <div className="col-md-12">
		                            <div className="panel panel-white">
		                                <div className="panel-body">
		                                    <h4 className="no-m m-b-sm">Library</h4>
											<Select
												name="select-field-name"
												multiple={false}
												onChange={this.handleChange}
												options={[{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }]}/>
											<h4 className="no-m m-b-sm">Library Multiple</h4>
											<Select
												name="select-multiple-name"
												multiple={true}
												onChange={this.handleChange}
												options={[{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }]}/>
											<h4 className="no-m m-b-sm">Basic</h4>
		                                    <select className="js-states form-control" tabindex="-1" style={{"display": "none", "width": "100%"}}>
		                                        <optgroup label="Alaskan/Hawaiian Time Zone">
		                                            <option value="AK">Alaska</option>
		                                            <option value="HI">Hawaii</option>
		                                        </optgroup>
		                                        <optgroup label="Pacific Time Zone">
		                                            <option value="CA">California</option>
		                                            <option value="NV">Nevada</option>
		                                            <option value="OR">Oregon</option>
		                                            <option value="WA">Washington</option>
		                                        </optgroup>
		                                        <optgroup label="Mountain Time Zone">
		                                            <option value="AZ">Arizona</option>
		                                            <option value="CO">Colorado</option>
		                                            <option value="ID">Idaho</option>
		                                            <option value="MT">Montana</option>
		                                            <option value="NE">Nebraska</option>
		                                            <option value="NM">New Mexico</option>
		                                            <option value="ND">North Dakota</option>
		                                            <option value="UT">Utah</option>
		                                            <option value="WY">Wyoming</option>
		                                        </optgroup>
		                                        <optgroup label="Central Time Zone">
		                                            <option value="AL">Alabama</option>
		                                            <option value="AR">Arkansas</option>
		                                            <option value="IL">Illinois</option>
		                                            <option value="IA">Iowa</option>
		                                            <option value="KS">Kansas</option>
		                                            <option value="KY">Kentucky</option>
		                                            <option value="LA">Louisiana</option>
		                                            <option value="MN">Minnesota</option>
		                                            <option value="MS">Mississippi</option>
		                                            <option value="MO">Missouri</option>
		                                            <option value="OK">Oklahoma</option>
		                                            <option value="SD">South Dakota</option>
		                                            <option value="TX">Texas</option>
		                                            <option value="TN">Tennessee</option>
		                                            <option value="WI">Wisconsin</option>
		                                        </optgroup>
		                                        <optgroup label="Eastern Time Zone">
		                                            <option value="CT">Connecticut</option>
		                                            <option value="DE">Delaware</option>
		                                            <option value="FL">Florida</option>
		                                            <option value="GA">Georgia</option>
		                                            <option value="IN">Indiana</option>
		                                            <option value="ME">Maine</option>
		                                            <option value="MD">Maryland</option>
		                                            <option value="MA">Massachusetts</option>
		                                            <option value="MI">Michigan</option>
		                                            <option value="NH">New Hampshire</option>
		                                            <option value="NJ">New Jersey</option>
		                                            <option value="NY">New York</option>
		                                            <option value="NC">North Carolina</option>
		                                            <option value="OH">Ohio</option>
		                                            <option value="PA">Pennsylvania</option>
		                                            <option value="RI">Rhode Island</option>
		                                            <option value="SC">South Carolina</option>
		                                            <option value="VT">Vermont</option>
		                                            <option value="VA">Virginia</option>
		                                            <option value="WV">West Virginia</option>
		                                        </optgroup>
		                                    </select>
		                                    <h4 className="no-m m-b-sm m-t-lg">Multiple Selection</h4>
		                                    <select className="js-states form-control" multiple="multiple" tabindex="-1" style={{"display": "none", "width": "100%"}}>
		                                        <optgroup label="Alaskan/Hawaiian Time Zone">
		                                            <option value="AK">Alaska</option>
		                                            <option value="HI">Hawaii</option>
		                                        </optgroup>
		                                        <optgroup label="Pacific Time Zone">
		                                            <option value="CA">California</option>
		                                            <option value="NV">Nevada</option>
		                                            <option value="OR">Oregon</option>
		                                            <option value="WA">Washington</option>
		                                        </optgroup>
		                                        <optgroup label="Mountain Time Zone">
		                                            <option value="AZ">Arizona</option>
		                                            <option value="CO">Colorado</option>
		                                            <option value="ID">Idaho</option>
		                                            <option value="MT">Montana</option>
		                                            <option value="NE">Nebraska</option>
		                                            <option value="NM">New Mexico</option>
		                                            <option value="ND">North Dakota</option>
		                                            <option value="UT">Utah</option>
		                                            <option value="WY">Wyoming</option>
		                                        </optgroup>
		                                        <optgroup label="Central Time Zone">
		                                            <option value="AL">Alabama</option>
		                                            <option value="AR">Arkansas</option>
		                                            <option value="IL">Illinois</option>
		                                            <option value="IA">Iowa</option>
		                                            <option value="KS">Kansas</option>
		                                            <option value="KY">Kentucky</option>
		                                            <option value="LA">Louisiana</option>
		                                            <option value="MN">Minnesota</option>
		                                            <option value="MS">Mississippi</option>
		                                            <option value="MO">Missouri</option>
		                                            <option value="OK">Oklahoma</option>
		                                            <option value="SD">South Dakota</option>
		                                            <option value="TX">Texas</option>
		                                            <option value="TN">Tennessee</option>
		                                            <option value="WI">Wisconsin</option>
		                                        </optgroup>
		                                        <optgroup label="Eastern Time Zone">
		                                            <option value="CT">Connecticut</option>
		                                            <option value="DE">Delaware</option>
		                                            <option value="FL">Florida</option>
		                                            <option value="GA">Georgia</option>
		                                            <option value="IN">Indiana</option>
		                                            <option value="ME">Maine</option>
		                                            <option value="MD">Maryland</option>
		                                            <option value="MA">Massachusetts</option>
		                                            <option value="MI">Michigan</option>
		                                            <option value="NH">New Hampshire</option>
		                                            <option value="NJ">New Jersey</option>
		                                            <option value="NY">New York</option>
		                                            <option value="NC">North Carolina</option>
		                                            <option value="OH">Ohio</option>
		                                            <option value="PA">Pennsylvania</option>
		                                            <option value="RI">Rhode Island</option>
		                                            <option value="SC">South Carolina</option>
		                                            <option value="VT">Vermont</option>
		                                            <option value="VA">Virginia</option>
		                                            <option value="WV">West Virginia</option>
		                                        </optgroup>
		                                    </select>
		                                    <h4 className="no-m m-b-sm m-t-lg">Limiting the number of selections</h4>
		                                    <select className="js-example-basic-multiple-limit js-states form-control" multiple="multiple" tabindex="-1" style={{"display": "none", "width": "100%"}}>
		                                        <optgroup label="Alaskan/Hawaiian Time Zone">
		                                            <option value="AK">Alaska</option>
		                                            <option value="HI">Hawaii</option>
		                                        </optgroup>
		                                        <optgroup label="Pacific Time Zone">
		                                            <option value="CA">California</option>
		                                            <option value="NV">Nevada</option>
		                                            <option value="OR">Oregon</option>
		                                            <option value="WA">Washington</option>
		                                        </optgroup>
		                                        <optgroup label="Mountain Time Zone">
		                                            <option value="AZ">Arizona</option>
		                                            <option value="CO">Colorado</option>
		                                            <option value="ID">Idaho</option>
		                                            <option value="MT">Montana</option>
		                                            <option value="NE">Nebraska</option>
		                                            <option value="NM">New Mexico</option>
		                                            <option value="ND">North Dakota</option>
		                                            <option value="UT">Utah</option>
		                                            <option value="WY">Wyoming</option>
		                                        </optgroup>
		                                        <optgroup label="Central Time Zone">
		                                            <option value="AL">Alabama</option>
		                                            <option value="AR">Arkansas</option>
		                                            <option value="IL">Illinois</option>
		                                            <option value="IA">Iowa</option>
		                                            <option value="KS">Kansas</option>
		                                            <option value="KY">Kentucky</option>
		                                            <option value="LA">Louisiana</option>
		                                            <option value="MN">Minnesota</option>
		                                            <option value="MS">Mississippi</option>
		                                            <option value="MO">Missouri</option>
		                                            <option value="OK">Oklahoma</option>
		                                            <option value="SD">South Dakota</option>
		                                            <option value="TX">Texas</option>
		                                            <option value="TN">Tennessee</option>
		                                            <option value="WI">Wisconsin</option>
		                                        </optgroup>
		                                        <optgroup label="Eastern Time Zone">
		                                            <option value="CT">Connecticut</option>
		                                            <option value="DE">Delaware</option>
		                                            <option value="FL">Florida</option>
		                                            <option value="GA">Georgia</option>
		                                            <option value="IN">Indiana</option>
		                                            <option value="ME">Maine</option>
		                                            <option value="MD">Maryland</option>
		                                            <option value="MA">Massachusetts</option>
		                                            <option value="MI">Michigan</option>
		                                            <option value="NH">New Hampshire</option>
		                                            <option value="NJ">New Jersey</option>
		                                            <option value="NY">New York</option>
		                                            <option value="NC">North Carolina</option>
		                                            <option value="OH">Ohio</option>
		                                            <option value="PA">Pennsylvania</option>
		                                            <option value="RI">Rhode Island</option>
		                                            <option value="SC">South Carolina</option>
		                                            <option value="VT">Vermont</option>
		                                            <option value="VA">Virginia</option>
		                                            <option value="WV">West Virginia</option>
		                                        </optgroup>
		                                    </select>
		                                    <h4 className="no-m m-b-sm m-t-lg">Automatic tokenization</h4>
		                                    <select className="js-example-tokenizer js-states form-control" multiple="multiple" tabindex="-1" style={{"display": "none", "width": "100%"}}>
		                                        <optgroup label="Alaskan/Hawaiian Time Zone">
		                                            <option value="AK">Alaska</option>
		                                            <option value="HI">Hawaii</option>
		                                        </optgroup>
		                                        <optgroup label="Pacific Time Zone">
		                                            <option value="CA">California</option>
		                                            <option value="NV">Nevada</option>
		                                            <option value="OR">Oregon</option>
		                                            <option value="WA">Washington</option>
		                                        </optgroup>
		                                        <optgroup label="Mountain Time Zone">
		                                            <option value="AZ">Arizona</option>
		                                            <option value="CO">Colorado</option>
		                                            <option value="ID">Idaho</option>
		                                            <option value="MT">Montana</option>
		                                            <option value="NE">Nebraska</option>
		                                            <option value="NM">New Mexico</option>
		                                            <option value="ND">North Dakota</option>
		                                            <option value="UT">Utah</option>
		                                            <option value="WY">Wyoming</option>
		                                        </optgroup>
		                                        <optgroup label="Central Time Zone">
		                                            <option value="AL">Alabama</option>
		                                            <option value="AR">Arkansas</option>
		                                            <option value="IL">Illinois</option>
		                                            <option value="IA">Iowa</option>
		                                            <option value="KS">Kansas</option>
		                                            <option value="KY">Kentucky</option>
		                                            <option value="LA">Louisiana</option>
		                                            <option value="MN">Minnesota</option>
		                                            <option value="MS">Mississippi</option>
		                                            <option value="MO">Missouri</option>
		                                            <option value="OK">Oklahoma</option>
		                                            <option value="SD">South Dakota</option>
		                                            <option value="TX">Texas</option>
		                                            <option value="TN">Tennessee</option>
		                                            <option value="WI">Wisconsin</option>
		                                        </optgroup>
		                                        <optgroup label="Eastern Time Zone">
		                                            <option value="CT">Connecticut</option>
		                                            <option value="DE">Delaware</option>
		                                            <option value="FL">Florida</option>
		                                            <option value="GA">Georgia</option>
		                                            <option value="IN">Indiana</option>
		                                            <option value="ME">Maine</option>
		                                            <option value="MD">Maryland</option>
		                                            <option value="MA">Massachusetts</option>
		                                            <option value="MI">Michigan</option>
		                                            <option value="NH">New Hampshire</option>
		                                            <option value="NJ">New Jersey</option>
		                                            <option value="NY">New York</option>
		                                            <option value="NC">North Carolina</option>
		                                            <option value="OH">Ohio</option>
		                                            <option value="PA">Pennsylvania</option>
		                                            <option value="RI">Rhode Island</option>
		                                            <option value="SC">South Carolina</option>
		                                            <option value="VT">Vermont</option>
		                                            <option value="VA">Virginia</option>
		                                            <option value="WV">West Virginia</option>
		                                        </optgroup>
		                                    </select>
		                                    <h4 className="no-m m-b-sm m-t-lg">Loading array data</h4>
		                                    <select className="js-example-data-array js-states form-control" tabindex="-1" style={{"display": "none", "width": "100%"}}></select>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
				        </div>
			          </div>
			          {/* Footer Plugin */}
			         <Footer />
			        </div>
			      </div>
			    </div>
		);
	}
});
