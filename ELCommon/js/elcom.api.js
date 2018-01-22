function API(ip, port){
	this.ip = ip || 'http://172.16.9.188';
	this.port = port || '8123';
}
API.prototype = {
		login: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/login"); // this.ip.concat(":", this.port, "/admin/data/login.json");
		},
		quickstats: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/getquickstats"); // this.ip.concat(":", this.port, "/admin/data/quickstats.json")
		},
		store: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/getstore"); // this.ip.concat(":", this.port, "/admin/data/store.json");
		},
		table: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/gettable"); // this.ip.concat(":", this.port, "/admin/data/table.json");
		},
		history: function(){
			return this.ip.concat(":", this.port, "/admin/data/history.json"); // this.ip.concat(":", this.port, "/admin/data/history.json");
		},
		service: function(){
			return  this.ip.concat(":", this.port, "/esmile_iot/admin/getrealtime"); // this.ip.concat(":", this.port, "/admin/data/realtime.json");
		},
		done: function(){
			return  this.ip.concat(":", this.port, "/esmile_iot/admin/postdone");//this.ip.concat(":", this.port, "/admin/data/realtime.json");
		},
		waittime: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/sumwait"); // this.ip.concat(":", this.port, "/admin/data/waittime.json");
		},
		ranking: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/sumlike"); // this.ip.concat(":", this.port, "/admin/data/ranking.json");
		},
		tableinfo: function(){
			return this.ip.concat(":", this.port, "/esmile_iot/admin/getinfotable");//this.ip.concat(":", this.port, "/admin/data/tableinfo.json");
		}
}