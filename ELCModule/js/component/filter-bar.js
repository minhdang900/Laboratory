'use strict';
window.FilterBar  = React.createClass({
	getInitialState: function(){
		return {
		}
	},
	exportPDF: function(ev){
		console.log((ev));
		if(typeof(this.props.data) != undefined){
			this.pdfMaker();
		} else {
			let fileName = '[ESMILE]_EXPORT_' + moment().format('DD/MM/YYYY');
			xepOnline.Formatter.Format(this.props.element, {render:'download', filename:fileName});
		}
	},
	pdfMaker: function(){
		let titles = [];
		let widths = [];
		let data = this.props.columns;
		let length = data.length;
		for(let i = 0; i < length; i++){
			widths.push('*');
			titles.push({text: data[i].title, bold: true});
		}
		
		console.log(widths);
		console.log(titles);
		this.props.data.unshift(titles);
		console.log(this.props.data);
		let docDefinition = {
			  content: [
			    {
			      layout: 'lightHorizontalLines', // optional
			      table: {
			        // headers are automatically repeated if the table spans over multiple pages
			        // you can declare how many rows should be treated as headers
			        headerRows: 1,
			        widths: widths,
			        body: this.props.data
			      }
			    }
			  ]};
		let fileName = '[ESMILE]_EXPORT_' + moment().format('DD/MM/YYYY');
		pdfMake.createPdf(docDefinition).download(fileName);
	},
	
	render: function(){
		return (
			<div className={this.props.display?"page-title":"hidden"} style={{"height": "70px", "margin-bottom":"15px"}}>
		     	<div className="row">
				    <div className="col-md-2">
		     			<MultiSelect multiple={true} id={this.props.store_element} 
		     				nonSelectedText={"None Store Selected"} 
		     				nSelectedText = {"Store Selected"}
		     				allSelectedText = {"All Store"}
		     			    onChange={this.props.storeChange}
		     				onSelectAll = {this.props.storeSelectedAll}
		     				options={this.props.store}/>
		     		</div>
		     		<div className="col-md-2">
		     			<MultiSelect multiple={true} id={this.props.table_element} 
			     			nonSelectedText={"None Table Selected"} 
		     				nSelectedText = {"Table Selected"}
		     				allSelectedText = {"All Table"}
		     				onChange={this.props.tableChange}
		     				onSelectAll = {this.props.tableSelectedAll}
		     				options={this.props.table}/>
		     		</div>
		     		<div className="col-md-4">
		     			<DateRangePicker onChange={this.props.dateChange} id={"report_daterangepicker"} format = {this.props.format} timePicker={this.props.timePicker}/>
		     		</div>
		     		<div className={this.props.isExport?"col-md-4 text-right":"hidden"}>
		     			<div className="btn-group">
			     			<button type="button" title="Export PDF" onClick={this.exportPDF} className="btn btn-default"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></button>
		     			</div>
		     		</div>
		     	</div>
            </div>
		);
	}
});