'use strict';
window.Tab = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		
	},
	componentWillUnmount: function(){
		
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
	                            <div className="col-md-6">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Default tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab1" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab4" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                            
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active" id="tab1">
	                                                    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane" id="tab2">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane" id="tab3">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane" id="tab4">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Left tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="tabs-left" role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab9" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab10" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab11" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab12" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab9">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab10">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab11">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab12">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Below tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="tabs-below" role="tabpanel">
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab17">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab18">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab19">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab20">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab17" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab18" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab19" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab20" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                        </div>
	                                    </div>
	                                </div>  
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Pills</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-pills" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab25" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab26" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab27" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab28" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab25">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab26">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab27">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab28">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>  
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Accordion</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
	                                            <div className="panel panel-default">
	                                                <div className="panel-heading" role="tab" id="headingOne">
	                                                    <h4 className="panel-title">
	                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
	                                                            Collapsible Group Item #1
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-default">
	                                                <div className="panel-heading" role="tab" id="headingTwo">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	                                                            Collapsible Group Item #2
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-default">
	                                                <div className="panel-heading" role="tab" id="headingThree">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
	                                                            Collapsible Group Item #3
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                            </div>
	                            <div className="col-md-6">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Fade effect</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab5" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab6" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab7" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab8" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab5">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab6">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab7">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab8">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Right tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="tabs-right" role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab13" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab14" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab15" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab16" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab13">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab14">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab15">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab16">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Justified tabs</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                            
	                                            <ul className="nav nav-tabs nav-justified" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab21" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab22" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab23" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation"><a href="#tab24" role="tab" data-toggle="tab">Tab 4</a></li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab21">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab22">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab23">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab24">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>   
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Using dropdowns</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div role="tabpanel">
	                                          
	                                            <ul className="nav nav-tabs" role="tablist">
	                                                <li role="presentation" className="active"><a href="#tab29" role="tab" data-toggle="tab">Tab 1</a></li>
	                                                <li role="presentation"><a href="#tab30" role="tab" data-toggle="tab">Tab 2</a></li>
	                                                <li role="presentation"><a href="#tab31" role="tab" data-toggle="tab">Tab 3</a></li>
	                                                <li role="presentation" className="dropdown">
	                                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
	                                                        Dropdown <span className="caret"></span>
	                                                    </a>
	                                                    <ul className="dropdown-menu" role="menu">
	                                                        <li><a href="#tab32" role="tab" data-toggle="tab">Tab 4</a></li>
	                                                        <li><a href="#tab33" role="tab" data-toggle="tab">Tab 5</a></li>
	                                                    </ul>
	                                                </li>
	                                            </ul>
	                                           
	                                            <div className="tab-content">
	                                                <div role="tabpanel" className="tab-pane active fade in" id="tab29">
	                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
	                                                       
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab30">
	                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab31">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab32">
	                                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
	                                                </div>
	                                                <div role="tabpanel" className="tab-pane fade" id="tab33">
	                                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div> 
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h3 className="panel-title">Color Options</h3>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
	                                            <div className="panel panel-primary">
	                                                <div className="panel-heading" role="tab" id="headingOne1">
	                                                    <h4 className="panel-title">
	                                                        <a data-toggle="collapse" data-parent="#accordion2" href="#1" aria-expanded="true" aria-controls="collapseOne">
	                                                            Collapsible Group Item #1
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne1">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-success">
	                                                <div className="panel-heading" role="tab" id="headingTwo2">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#2" aria-expanded="false" aria-controls="collapseTwo">
	                                                            Collapsible Group Item #2
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo2">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div className="panel panel-danger">
	                                                <div className="panel-heading" role="tab" id="headingThree3">
	                                                    <h4 className="panel-title">
	                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#3" aria-expanded="false" aria-controls="collapseThree">
	                                                            Collapsible Group Item #3
	                                                        </a>
	                                                    </h4>
	                                                </div>
	                                                <div id="3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree3">
	                                                    <div className="panel-body">
	                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>   
	                            </div>
	                        </div>{/*UI Tab*/}
		    				
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
