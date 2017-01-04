 			Reuters.Graphics.scattergraphic = new Reuters.Graphics.ScatterPlot({
				el: "#reutersGraphic-chart1",
				dataURL:"data/jetliner.csv",
//              dataURL: '//d3sl9l9bcxfb5q.cloudfront.net/json/mw-disney-earns',
				xvalue:"capacity",
				yvalue:"category",	
				colorvalue:"category",
				colors: [red6, blue4, "#666", purple4, yellow4, green3],
				colorDomain:["Boeing","Airbus","Bombardier","Comac","Embraer","Mitsubishi"],  //can define colors explicitly
				rvalue:"orders",				
				radiusModifier:1.5, // a multiplier for sized radius's
//				hardRadius:15, 
				yticks:5,
				xticks:5,
				height:.6, //if a number smaller then 10, that will be it's aspect to width, if over 10 will be hard height.  if undefined will be same as width
//				margin:{left:50, right:50, top:50, bottom:50},			
//				xscaleorientation:"bottom",
//				yscaleorientation:"left",
//				dateParseFormat:"%m/%d/%y",
//				xmin:"0",
//				ymin:"0",
//				xmax:100,
//				ymax:50,
//				xvalues:[0,25,50,75,100],
//				yvalues:[0,100],
//				xLabelText:"This is the x label",
//				yLabelText:"This is the y label",
//				dateFormat:d3.time.format("%b %Y"),
				multiDataColumns:["1990","2010"],
				multiDataLabels:["VALUE","PERCENT"],
				multiDataSlider:true,
//				idField:"category",
                dropdown:"name", //enter a column name 
//				scatterSetupTemplate: Reuters.Graphics.Template.scatterSetupTemplate,
//				tooltipTemplate: Reuters.Graphics.Template.scattertooltip,

			});  		


Reuters.Graphics.scattergraphic.on("renderChart:start", function(evt){
    var self = this;
    
})		
Reuters.Graphics.scattergraphic.on("renderChart:end", function(evt){
    var self = this;
    
})		
Reuters.Graphics.scattergraphic.on("update:start", function(evt){
    var self = this;
    
})		
Reuters.Graphics.scattergraphic.on("update:end", function(evt){
    var self = this;
    
})	