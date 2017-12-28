'use strict';
window.Toast = React.createClass({
	componentWillMount: function(){
		
	},
	componentDidMount: function(){
		console.log("componentDidMount");
		var i = -1;
	    var toastCount = 0;
	    var $toastlast;

	    var getMessage = function () {
	        var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
	            '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
	            'Are you the six fingered man?',
	            'Inconceivable!',
	            'I do not think that means what you think it means.',
	            'Have fun storming the castle!'
	        ];
	        i++;
	        if (i === msgs.length) {
	            i = 0;
	        }

	        return msgs[i];
	    };

	    var getMessageWithClearButton = function (msg) {
	        msg = msg ? msg : 'Clear itself?';
	        msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
	        return msg;
	    };

	    $('#showtoast').click(function () {
	        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
	        var msg = $('#message').val();
	        var title = $('#title').val() || '';
	        var $showDuration = $('#showDuration');
	        var $hideDuration = $('#hideDuration');
	        var $timeOut = $('#timeOut');
	        var $extendedTimeOut = $('#extendedTimeOut');
	        var $showEasing = $('#showEasing');
	        var $hideEasing = $('#hideEasing');
	        var $showMethod = $('#showMethod');
	        var $hideMethod = $('#hideMethod');
	        var toastIndex = toastCount++;
	        var addClear = $('#addClear').prop('checked');

	        toastr.options = {
	            closeButton: $('#closeButton').prop('checked'),
	            debug: $('#debugInfo').prop('checked'),
	            newestOnTop: $('#newestOnTop').prop('checked'),
	            progressBar: $('#progressBar').prop('checked'),
	            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
	            preventDuplicates: $('#preventDuplicates').prop('checked'),
	            onclick: null
	        };

	        if ($('#addBehaviorOnToastClick').prop('checked')) {
	            toastr.options.onclick = function () {
	                alert('You can perform some custom action after a toast goes away');
	            };
	        }

	        if ($showDuration.val().length) {
	            toastr.options.showDuration = $showDuration.val();
	        }

	        if ($hideDuration.val().length) {
	            toastr.options.hideDuration = $hideDuration.val();
	        }

	        if ($timeOut.val().length) {
	            toastr.options.timeOut = addClear ? 0 : $timeOut.val();
	        }

	        if ($extendedTimeOut.val().length) {
	            toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();
	        }

	        if ($showEasing.val().length) {
	            toastr.options.showEasing = $showEasing.val();
	        }

	        if ($hideEasing.val().length) {
	            toastr.options.hideEasing = $hideEasing.val();
	        }

	        if ($showMethod.val().length) {
	            toastr.options.showMethod = $showMethod.val();
	        }

	        if ($hideMethod.val().length) {
	            toastr.options.hideMethod = $hideMethod.val();
	        }

	        if (addClear) {
	            msg = getMessageWithClearButton(msg);
	            toastr.options.tapToDismiss = false;
	        }
	        if (!msg) {
	            msg = getMessage();
	        }

	        $('#toastrOptions').text('Command: toastr["'
	                + shortCutFunction
	                + '"]("'
	                + msg
	                + (title ? '", "' + title : '')
	                + '")\n\ntoastr.options = '
	                + JSON.stringify(toastr.options, null, 2)
	        );

	        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
	        $toastlast = $toast;

	        if(typeof $toast === 'undefined'){
	            return;
	        }

	        if ($toast.find('#okBtn').length) {
	            $toast.delegate('#okBtn', 'click', function () {
	                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
	                $toast.remove();
	            });
	        }
	        if ($toast.find('#surpriseBtn').length) {
	            $toast.delegate('#surpriseBtn', 'click', function () {
	                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
	            });
	        }
	        if ($toast.find('.clear').length) {
	            $toast.delegate('.clear', 'click', function () {
	                toastr.clear($toast, { force: true });
	            });
	        }
	    });

	    function getLastToast(){
	        return $toastlast;
	    }
	    $('#clearlasttoast').click(function () {
	        toastr.clear(getLastToast());
	    });
	    $('#cleartoasts').click(function () {
	        toastr.clear();
	    });
	},
	componentWillUnmount: function(){
		console.log("componentWillUnmount");
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
							<div className="row"> {/*Toast*/}
	                            <div className="col-md-12">
	                                <div className="panel panel-white">
	                                    <div className="panel-heading clearfix">
	                                        <h4 className="panel-title">Gritter Notifications</h4>
	                                    </div>
	                                    <div className="panel-body">
	                                        <div className="row">
	                                            <div className="col-md-4">
	                                                <div className="control-group">
	                                                    <div className="controls">
	                                                        <label className="control-label">Title</label>
	                                                        <input id="title" type="text" className="input-large form-control" placeholder="Enter a title ..." />
	                                                        <label className="control-label">Message</label>
	                                                        <textarea className="input-large form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea>
	                                                    </div>
	                                                </div>
	                                                <div className="control-group m-t-lg">
	                                                    <div className="controls">
	                                                        <label for="closeButton">
	                                                            <input id="closeButton" type="checkbox" value="checked" className="input-mini" /> Close Button
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="addBehaviorOnToastClick">
	                                                            <input id="addBehaviorOnToastClick" type="checkbox" value="checked" className="input-mini" /> Add behavior on toast click
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="debugInfo">
	                                                            <input id="debugInfo" type="checkbox" value="checked" className="input-mini" /> Debug
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="progressBar">
	                                                            <input id="progressBar" type="checkbox" value="checked" className="input-mini" /> Progress Bar
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="preventDuplicates">
	                                                            <input id="preventDuplicates" type="checkbox" value="checked" className="input-mini" /> Prevent Duplicates
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="addClear">
	                                                            <input id="addClear" type="checkbox" value="checked" className="input-mini" /> Add button to force clearing a toast, ignoring focus
	                                                        </label>
	                                                    </div>
	                                                    <div className="controls">
	                                                        <label for="newestOnTop">
	                                                            <input id="newestOnTop" type="checkbox" value="checked" className="input-mini" /> Newest on top
	                                                        </label>
	                                                    </div>
	                                                </div>
	                                            </div>
	
	                                            <div className="col-md-2">
	                                                <div className="control-group" id="toastTypeGroup">
	                                                    <div className="controls">
	                                                        <label>Toast Type</label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="success" checked /> Success
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="info" /> Info
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="warning" /> Warning
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="toasts" value="error" /> Error
	                                                        </label>
	                                                    </div>
	                                                </div>
	                                                <div className="control-group" id="positionGroup">
	                                                    <div className="controls">
	                                                        <label>Position</label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-right" checked /> Top Right
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-right" /> Bottom Right
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-left" /> Bottom Left
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-left" /> Top Left
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-full-width" /> Top Full Width
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-full-width" /> Bottom Full Width
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-top-center" /> Top Center
	                                                        </label>
	                                                        <label>
	                                                            <input type="radio" name="positions" value="toast-bottom-center" /> Bottom Center
	                                                        </label>
	                                                    </div>
	                                                </div>
	                                            </div>
	
	                                            <div className="col-md-2">
	                                                <div className="control-group">
	                                                    <div className="controls">
	                                                        <label for="showEasing">Show Easing</label>
	                                                        <input id="showEasing" type="text" placeholder="swing, linear" className="input-mini form-control" value="swing" />
	
	                                                        <label for="hideEasing">Hide Easing</label>
	                                                        <input id="hideEasing" type="text" placeholder="swing, linear" className="input-mini form-control" value="linear" />
	
	                                                        <label for="showMethod">Show Method</label>
	                                                        <input id="showMethod" type="text" placeholder="show, fadeIn, slideDown" className="input-mini form-control" value="fadeIn" />
	                            
	                                                        <label for="hideMethod">Hide Method</label>
	                                                        <input id="hideMethod" type="text" placeholder="hide, fadeOut, slideUp" className="input-mini form-control" value="fadeOut" />
	                                                    </div>
	                                                </div>
	                                            </div>
	
	                                            <div className="col-md-3">
	                                                <div className="control-group">
	                                                    <div className="controls">
	                                                        <label for="showDuration">Show Duration</label>
	                                                        <input id="showDuration" type="text" placeholder="ms" className="input-mini form-control" value="300" />
	
	                                                        <label for="hideDuration">Hide Duration</label>
	                                                        <input id="hideDuration" type="text" placeholder="ms" className="input-mini form-control" value="1000" />
	
	                                                        <label for="timeOut">Time out</label>
	                                                        <input id="timeOut" type="text" placeholder="ms" className="input-mini form-control" value="5000" />
	
	                                                        <label for="extendedTimeOut">Extended time out</label>
	                                                        <input id="extendedTimeOut" type="text" placeholder="ms" className="input-mini form-control" value="1000" />
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	
	                                        <div className="row m-t-lg">
	                                            <div className="col-md-12">
	                                                <button type="button" className="btn btn-primary" id="showtoast">Show Toast</button>
	                                                <button type="button" className="btn btn-danger" id="cleartoasts">Clear Toasts</button>
	                                                <button type="button" className="btn btn-danger" id="clearlasttoast">Clear Last Toast</button>
	                                            </div>
	                                        </div>
	
	                                        <div className="row m-t-lg">
	                                            <div className="col-md-12">
	                                                <pre id='toastrOptions'></pre>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div> {/*Toast*/}
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
