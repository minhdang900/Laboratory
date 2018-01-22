var common = {
		api: new API(),
		socket: null,
		isLogin: false,
		setSession: function(session){
			if (typeof(Storage) !== "undefined") {
				sessionStorage.setItem("session", JSON.stringify(session));
			} else {
			    coonsole.log("Sorry, your browser does not support Web Storage...");
			}
		},
		getSession: function(){
			var key = sessionStorage.getItem("session");
			return key!=null?JSON.parse(key):(window.location.href="/");
		},
		timeToMinute: function(stringTime){ // 00:00:00 or 00:00
			if(stringTime != null && stringTime.length > 0){
				let array = stringTime.split(':');
				if(array.length == 3){
					return Number(array[0])*60 + Number(array[1]) + Math.round(Number(array[2])/60);
				} else if(array.length == 2){
					return Number(array[0]) + Math.round(Number(array[1])/60);
				}
			}
			return 0;
		},
		blockUI: function(item) {    
		    $(item).block({
		        message: '<img src="ELCommon/images/reload.gif" width="20px" alt="">',
		        css: {
		            border: 'none',
		            padding: '0px',
		            width: '20px',
		            height: '20px',
		            backgroundColor: 'transparent'
		        },
		        overlayCSS: {
		            backgroundColor: '#fff',
		            opacity: 0.9,
		            cursor: 'wait'
		        }
		    });
		},
		unblockUI: function(item) {
		    $(item).unblock();
		},
		request: function(obj, callback){
			console.log(obj.url);
			console.log(obj.data);
			$.ajax({
				url: obj.url,
				data : JSON.stringify(obj.data),
				type: obj.type || 'POST',
				async : true,
				contentType: "application/json",
				crossDomain: true,
				dataType: "json", 
				statusCode: {
			        404: function() {
			          alert( "Page Not Found" );
			        },
			        200: function(){
			           //console.log( "OK" );
			        }
				},
				success : function(response) {
					console.log(response);
					callback(response);
				},
				error: function(xhr, textStatus, errorThrown){
					console.log(errorThrown);
				}
			});
		}
}