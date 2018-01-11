'use strict';
window.Activity = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
	},
	componentWillUnmount: function(){
	},
	render: function(){
		return (
            <div className="panel panel-white">
	            <div className="panel-heading">
	                <h4 className="panel-title">Activity</h4>
	                <div className="panel-control">
	                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
	                </div>
	            </div>
	            <div className="panel-body">
	                <div className="inbox-widget slimscroll">
	                    <a href="#">
	                        <div className="inbox-item">
	                            <div className="inbox-item-img"><img src="assets/images/avatar2.png" className="img-circle" alt=""/></div>
	                            <p className="inbox-item-author">Sandra Smith</p>
	                            <p className="inbox-item-text">Hey! I'm working on your...</p>
	                            <p className="inbox-item-date">13:40 PM</p>
	                        </div>
	                    </a>
	                    <a href="#">
	                        <div className="inbox-item">
	                            <div className="inbox-item-img"><img src="assets/images/avatar3.png" className="img-circle" alt=""/></div>
	                            <p className="inbox-item-author">Christopher</p>
	                            <p className="inbox-item-text">I've finished it! See you so...</p>
	                            <p className="inbox-item-date">13:34 PM</p>
	                        </div>
	                    </a>
	                    <a href="#">
	                        <div className="inbox-item">
	                            <div className="inbox-item-img"><img src="assets/images/avatar4.png" className="img-circle" alt=""/></div>
	                            <p className="inbox-item-author">Amily Lee</p>
	                            <p className="inbox-item-text">This theme is awesome!</p>
	                            <p className="inbox-item-date">13:17 PM</p>
	                        </div>
	                    </a>
	                    <a href="#">
	                        <div className="inbox-item">
	                            <div className="inbox-item-img"><img src="assets/images/avatar5.png" className="img-circle" alt=""/></div>
	                            <p className="inbox-item-author">Nick Doe</p>
	                            <p className="inbox-item-text">Nice to meet you</p>
	                            <p className="inbox-item-date">12:20 PM</p>
	                        </div>
	                    </a>
	                    <a href="#">
	                        <div className="inbox-item">
	                            <div className="inbox-item-img"><img src="assets/images/avatar2.png" className="img-circle" alt=""/></div>
	                            <p className="inbox-item-author">Sandra Smith</p>
	                            <p className="inbox-item-text">Hey! I'm working on your...</p>
	                            <p className="inbox-item-date">10:15 AM</p>
	                        </div>
	                    </a>
	                    <a href="#">
	                        <div className="inbox-item">
	                            <div className="inbox-item-img"><img src="assets/images/avatar4.png" className="img-circle" alt=""/></div>
	                            <p className="inbox-item-author">Amily Lee</p>
	                            <p className="inbox-item-text">This theme is awesome!</p>
	                            <p className="inbox-item-date">9:56 AM</p>
	                        </div>
	                    </a>
	                </div>
	            </div>
	        </div>
		);
	}
});