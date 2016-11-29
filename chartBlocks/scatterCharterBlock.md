 			Reuters.Graphics.scattergraphic = new Reuters.Graphics.ScatterPlot({
				el: "#reuters-scatterchart",
				dataURL:"data/jetliner.csv",
				xvalue:"capacity",
				yvalue:"range",	
				colorvalue:"name",
				colors: [red6, blue4, "#666", purple4, yellow4, green3],
//				colorDomain:["Boeing","Airbus","Bombardier","Comac","Embraer","Mitsubishi"],  //can define colors explicitly
				rvalue:"orders",				
				radiusModifier:1.5, // a multiplier for sized radius's
//				hardRadius:15, 
				yticks:5,
				xticks:5,
				height:.6, //if a number smaller then 10, that will be it's aspect to width, if over 10 will be hard height.  if undefined will be same as width
//				margin:{left:50, right:50, top:50, bottom:50},			
//				xscaleorientation:"bottom",
//				yscaleorientation:"left",
//				legendTemplate:Reuters.Template.scatterlegend,
//				tooltipTemplate: Reuters.Template.scattertooltip,
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
//				multiDataColumns:["gpd","unemployment"],
//				multiDataLabels:["VALUE","PERCENT"],
//				multiDataSlider:true,
//				idField:"uniqueid",
//				scatterSetupTemplate: Reuters.Template.scatterSetupTemplate,
//				tooltipTemplate: Reuters.Template.scattertooltip,

			});  		

