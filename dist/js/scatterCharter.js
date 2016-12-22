(function () {
  window["Reuters"] = window["Reuters"] || {};
  window["Reuters"]["Graphics"] = window["Reuters"]["Graphics"] || {};
  window["Reuters"]["Graphics"]["scatterCharter"] = window["Reuters"]["Graphics"]["scatterCharter"] || {};
  window["Reuters"]["Graphics"]["scatterCharter"]["Template"] = window["Reuters"]["Graphics"]["scatterCharter"]["Template"] || {};

  window["Reuters"]["Graphics"]["scatterCharter"]["Template"]["scatterSetupTemplate"] = function (t) {
    var __t,
        __p = '',
        __j = Array.prototype.join;
    function print() {
      __p += __j.call(arguments, '');
    }

    if (t.self.dataType) {
      ;
      __p += '\n	<div class="chart-nav">\n			';
      if (!t.self.multiDataSlider) {
        ;
        __p += '		\n            		<div class="navContainer">\n                        <div class="btn-group nav-options horizontal" data-toggle="buttons">\n                            ';
        t.self.multiDataLabels.forEach(function (d, i) {
          ;
          __p += '\n                                <label dataid="' + ((__t = d) == null ? '' : __t) + '" class="btn btn-primary ';
          if (i == t.self.multiDataLabels.length - 1) {
            ;
            __p += 'active';
          };
          __p += ' smaller">\n                                    <input type="radio" name="nav-options" autocomplete="off"> \n                                    ' + ((__t = d) == null ? '' : __t) + '\n                                </label>\n                            ';
        });
        __p += '\n                        </div>    		    		\n            		</div>    	\n			';
      } else {
        ;
        __p += '\n				<div class="slider-container">\n                    <div class="slider-holder">\n        				<div class="slider" data-slider="true"></div>\n                    </div>\n\n                    <div class="slider-controls">\n                        <div class="btn-group animation-control" data-toggle="buttons">\n                            <label class="btn btn-primary smaller animation-play">\n                                <input type="radio" name="animation-control-group" id="animation-play" autocomplete="off" > \n                                <i class="fa fa-play" aria-hidden="true"></i>\n                            </label>\n                            <label class="btn btn-primary smaller active animation-pause">\n                                <input type="radio" name="animation-control-group" id="animation-pause" autocomplete="off" checked>\n                                <i class="fa fa-pause" aria-hidden="true"></i>\n                            </label>\n                        </div>\n                    </div>\n				</div>\n			';
      };
      __p += '\n	</div>\n';
    };
    __p += '\n\n\n<div class="chart-holder">\n    ';
    if (t.self.colorDomain && t.self.colorDomain.length > 1) {
      ;
      __p += '\n    	<div class="scatter-nested-legend">\n            ';
      t.self.colorDomain.forEach(function (d, i) {
        ;
        __p += '\n                <div class ="scatter-legend-item" data-id="' + ((__t = d) == null ? '' : __t) + '">\n                	<div class = "scatter-legend-circle circle" style="background-color:' + ((__t = t.self.colors[i]) == null ? '' : __t) + ';"></div>\n                	<p class = "scatter-legend-text">' + ((__t = d) == null ? '' : __t) + '</p>\n                </div>\n            ';
      });
      __p += '\n        	';
      if (t.self.rvalue) {
        ;
        __p += '\n                <br>\n                <div class ="scatter-legend-size">\n                    <div class = "scatter-legend-circle scatter-size circle order-legend"></div>\n                    <p class = "scatter-legend-text">' + ((__t = 'Size indicates Orders') == null ? '' : __t) + '</p>\n                 </div>\n        	';
      };
      __p += ' \n            ';
      if (t.self.dropdown) {
        ;
        __p += '\n                <div class="mt-2 hidden-sm-down">\n                    <select class="custom-select scatter-select">\n                        <option selected>Show All ...   </option>\n                    </select>\n                    <small class="text-muted text-uppercase d-block">Choose to highlight</small>\n                </div>\n            ';
      };
      __p += '        	        \n    	</div>\n        <div class="scatter-nested-chart" id="' + ((__t = t.self.targetDiv) == null ? '' : __t) + '-chart"></div>\n    ';
    } else {
      ;
      __p += '\n        ';
      if (t.self.dropdown) {
        ;
        __p += '\n            <div class="mt-2 hidden-sm-down">\n                <select class="custom-select scatter-select">\n                    <option selected>Show All ...   </option>\n                </select>\n                <small class="text-muted text-uppercase d-block">Choose to highlight</small>\n            </div>\n        ';
      };
      __p += '         \n        <div class="" id="' + ((__t = t.self.targetDiv) == null ? '' : __t) + '-chart"></div>\n    ';
    };
    __p += '\n</div>\n\n\n\n\n';
    return __p;
  };
})();
(function () {
  window["Reuters"] = window["Reuters"] || {};
  window["Reuters"]["Graphics"] = window["Reuters"]["Graphics"] || {};
  window["Reuters"]["Graphics"]["scatterCharter"] = window["Reuters"]["Graphics"]["scatterCharter"] || {};
  window["Reuters"]["Graphics"]["scatterCharter"]["Template"] = window["Reuters"]["Graphics"]["scatterCharter"]["Template"] || {};

  window["Reuters"]["Graphics"]["scatterCharter"]["Template"]["scattertooltip"] = function (t) {
    var __t,
        __p = '';
    __p += '<p class="tooltip-title"> ' + ((__t = t.data.name + " " + t.data.category) == null ? '' : __t) + '</p>\n<p class="tooltip-text"><strong> ' + ((__t = 'Passengers') == null ? '' : __t) + ':</strong> ' + ((__t = t.self.noDecimal(t.data[t.self.yvalue])) == null ? '' : __t) + ' </p>\n<p class="tooltip-text"><strong> ' + ((__t = 'Range') == null ? '' : __t) + ':</strong> ' + ((__t = t.self.noDecimal(t.data[t.self.xvalue])) == null ? '' : __t) + '  miles</p>\n<hr>\n\n<p class="tooltip-subhead">' + ((__t = 'On order') == null ? '' : __t) + '</p>\n<p class="tooltip-text">' + ((__t = 'Number unavailable') == null ? '' : __t) + '</p>';
    return __p;
  };
})();
Reuters = Reuters || {};
Reuters.Graphics = Reuters.Graphics || {};

Reuters.Graphics.ScatterPlot = Backbone.View.extend({
	data: undefined,
	dataURL: undefined,
	scatterSetupTemplate: Reuters.Graphics.scatterCharter.Template.scatterSetupTemplate,
	tooltipTemplate: Reuters.Graphics.scatterCharter.Template.scattertooltip,
	colorDomain: undefined,
	colors: [red3, blue1, lime1, orange1, green1, blue4],
	margin: { left: 50, right: 20, top: 20, bottom: 20 },
	xvalue: "xvalue",
	yvalue: "yvalue",
	rvalue: undefined,
	colorvalue: undefined,
	radiusModifier: 1.5,
	hardRadius: 5,
	xscaleorientation: "bottom",
	yscaleorientation: "left",
	yticks: 5,
	xticks: 5,
	xmin: undefined,
	ymin: undefined,
	xmax: undefined,
	ymax: undefined,
	xvalues: undefined,
	yvalues: undefined,
	height: undefined,
	dropdown: undefined,
	updateCount: 0,
	dateParseFormat: "%m/%d/%y",
	dateFormat: d3.time.format("%b %Y"),

	initialize: function initialize(opts) {
		var self = this;
		this.options = opts;

		// if we are passing in options, use them instead of the defualts.
		_.each(opts, function (item, key) {
			self[key] = item;
		});
		self.bottomMargin = self.margin.bottom;
		//fix, this is dumb
		if (!self.options.radiusModifier) {
			self.options.radiusModifier = self.radiusModifier;
		}

		//Test which way data is presented and load appropriate way
		if (this.dataURL.indexOf("csv") == -1 && !_.isObject(this.dataURL)) {
			d3.json(self.dataURL, function (data) {
				self.parseData(data);
			});
		}
		if (this.dataURL.indexOf("csv") > -1) {
			d3.csv(self.dataURL, function (data) {
				self.parseData(data);
			});
		}
		if (_.isObject(this.dataURL)) {
			setTimeout(function () {
				self.parseData(self.dataURL);
			}, 100);
		}

		//end of initialize		
	},
	parseData: function parseData(data) {
		var self = this;
		if ((self.xvalue == "date" || self.yvalue == "date") && !self.parseDate) {
			if (data[0].date.split('/')[2].length == 2) {
				self.dateParseFormat = "%m/%d/%y";
			}
			if (data[0].date.split('/')[2].length == 4) {
				self.dateParseFormat = "%m/%d/%Y";
			}
		}

		self.parseDate = d3.time.format(self.dateParseFormat).parse;

		self.targetDiv = $(self.el).attr("id");
		self.chartDiv = $(self.el).attr("id") + "-chart";

		self.oneDecimal = d3.format(",.1f");
		self.twoDecimal = d3.format(",.2f");
		self.noDecimal = d3.format(",.0f");

		if (!self.colorDomain) {
			self.colorDomain = _.uniq(_.pluck(data, self.colorvalue));
		}

		//figure out the color scale		
		if (_.isObject(self.colors) && !_.isArray(self.colors)) {
			self.colorDomain = _.keys(self.colors);
			self.colors = _.values(self.colors);
		}
		self.colorScale = d3.scale.ordinal().domain(self.colorDomain).range(self.colors);

		//handle multidata
		if (data[0].type) {
			if (!self.multiDataColumns) {
				self.multiDataColumns = _.uniq(_.pluck(data, 'type'));
			}
			if (!self.multiDataLabels) {
				self.multiDataLabels = self.multiDataColumns;
			}
			self.dataType = self.multiDataColumns[self.multiDataColumns.length - 1];
			if (!self.idField) {
				self.idField = "uniqueid";
				var groupData = _.groupBy(data, "type");
				_.each(groupData, function (value, key) {
					value.forEach(function (d, i) {
						d.uniqueid = i;
					});
				});
			}
		} else {
			if (!self.idField) {
				self.idField = "uniqueid";
				data.forEach(function (d, i) {
					d.uniqueid = i;
				});
			}
		}

		self.data = new Reuters.Graphics.ScatterCollection([], { parseDate: self.parseDate, xvalue: self.xvalue, yvalue: self.yvalue, rvalue: self.rvalue, dateFormat: self.dateFormat });
		self.data.reset(data, { parse: true });

		self.chartData = self.flattenData(self.data);

		self.baseRender();
	},

	flattenData: function flattenData(data) {
		var self = this;
		if (self.dataType) {
			var filtered = data.filter(function (d) {
				return d.get("type") == self.dataType;
			});
			var flattened = _.invoke(filtered, 'toJSON');
			return flattened;
		}
		return data.toJSON();
	},

	setWidthAndMargins: function setWidthAndMargins() {
		var self = this;

		//length of largest tick
		var maxWidth = -1;
		self.$(".y.axis").find("text").each(function () {
			maxWidth = maxWidth > $(this).width() ? maxWidth : $(this).width();
		});
		if (maxWidth === 0) {
			self.$(".y.axis").find("text").each(function () {
				maxWidth = maxWidth > $(this)[0].getBoundingClientRect().width ? maxWidth : $(this)[0].getBoundingClientRect().width;
			});
		}

		if (!self.options.margin) {
			self.margin[self.yscaleorientation] = 9 + maxWidth;
			if (self.yLabelText) {
				self.margin.left = self.margin.left + 40;
			}
			if (self.xLabelText) {
				self.margin.bottom = self.bottomMargin + 30;
			}
		}

		self.width = self.$("#" + self.chartDiv).width() - self.margin.left - self.margin.right;

		if (!self.options.height) {
			self.height = self.width;
		}
		if (self.options.height < 10) {
			self.height = self.width * self.options.height;
		}

		if (self.width < 400) {
			self.radiusModifier = self.options.radiusModifier * 2 / 3;
		} else {
			self.radiusModifier = self.options.radiusModifier;
		}
	},

	multiDataMaker: function multiDataMaker() {
		var self = this;

		if (!self.multiDataSlider) {
			self.$(".chart-nav .btn").on("click", function (evt) {
				var thisID = $(this).attr("dataid");
				self.dataType = thisID;
				self.chartData = self.flattenData(self.data);
				self.update();
			});
		} else {
			var onSlide = function onSlide() {
				var thisID = self.multiDataColumns[self.slider.noUiSlider.get()];
				self.dataType = thisID;
				self.chartData = self.flattenData(self.data);
				self.update();
			};

			self.slider = self.$('[data-slider]')[0];

			noUiSlider.create(self.slider, {
				start: [self.multiDataLabels.length - 1],
				range: {
					min: [0],
					max: [self.multiDataLabels.length - 1]
				},
				snap: false,
				step: 1,
				format: {
					to: function to(value) {
						return value;
					},
					from: function from(value) {
						return value;
					}
				},
				pips: {
					mode: "count",
					values: self.multiDataLabels.length,
					density: 3
				}
			});

			self.$('div.noUi-value-large').each(function (i) {
				$(this).html(self.multiDataLabels[i]);
			});
			//This probably doesn't belong here, but will fix the most common use-case.
			$(self.slider).find('div.noUi-marker-large:last').addClass('last');
			$(self.slider).find('div.noUi-marker-large:first').addClass('first');

			self.slider.noUiSlider.on('set', onSlide);
			//			stepSlider.noUiSlider.on('slide', onSlide);		

			self.$(".btn.btn-primary.animation-play").on("click", function () {
				self.playInterval = setInterval(function () {
					self.play();
				}, 1000);
			});

			self.$(".animation-pause").on("click", function () {
				clearInterval(self.playInterval);
			});

			self.play = function () {
				var currentIndex = self.slider.noUiSlider.get();
				if (currentIndex == self.multiDataLabels.length - 1) {
					currentIndex = 0;
				} else {
					currentIndex++;
				}
				self.slider.noUiSlider.set(currentIndex);
			};
		}

		if (self.dropdown) {
			self.selectArray = _.uniq(_.pluck(self.chartData, self.dropdown)).sort();
			d3.select("#" + self.targetDiv + " .custom-select").selectAll("options").data(self.selectArray).enter().append("option").attr("value", function (d) {
				return d;
			}).html(function (d) {
				return d;
			});

			self.$(".custom-select").on("change", function (evt) {
				var id = $(this).val();
				self.scatterPlot.classed("turned-off", function (d) {
					if (id == "Show All ...") {
						return false;
					}
					if (id == d[self.dropdown]) {
						return false;
					}
					return true;
				});
			});
		}
		if (self.colorDomain && self.colorDomain.length > 1) {
			self.$(".scatter-legend-item").on("click", function (d) {
				var id = $(this).attr("data-id");
				$(this).toggleClass("turned-off");
				self.scatterPlot.each(function (d) {
					if (id == d[self.colorvalue]) {
						$(this).toggleClass("turned-off");
					}
				});
			});
		}
	},

	baseRender: function baseRender() {
		var self = this;
		self.trigger("renderChart:start");

		$(self.el).html(function () {
			return self.scatterSetupTemplate({ data: self.chartData, self: self });
		});

		self.width = self.$("#" + self.chartDiv).width() - self.margin.left - self.margin.right;

		if (!self.options.height) {
			self.height = self.width;
		}
		if (self.options.height < 10) {
			self.height = self.width * self.options.height;
		}

		self.setScales();

		if (self.dataType) {
			self.multiDataMaker();
		}
		self.svg = d3.select("#" + self.chartDiv).append("svg").attr("width", self.width + self.margin.left + self.margin.right).attr("height", self.height + self.margin.top + self.margin.bottom).append("g").attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");

		self.xAxis = d3.svg.axis().scale(self.x).orient(self.xscaleorientation).tickSize(self.height).tickPadding(8);

		self.yAxis = d3.svg.axis().scale(self.y).orient(self.yscaleorientation).tickSize(0 - self.width).tickPadding(8);

		if (self.xvalues) {
			self.xAxis.tickValues(self.xvalues);
		}

		if (self.yvalues) {
			self.yAxis.tickValues(self.yvalues);
		}

		self.resizeAxis();

		self.svg.append("svg:g").attr("class", "scatterLegend");

		self.svg.append("svg:g").attr("class", "x axis");

		self.svg.select(".x.axis")
		//.attr("transform", "translate(0," + self.height + ")")
		.call(self.xAxis);

		self.svg.append("svg:g").attr("class", "y axis");

		if (self.yscaleorientation == "left") {
			self.svg.select(".y.axis").call(self.yAxis);
		} else {
			self.svg.select(".y.axis").attr("transform", "translate(" + self.width + ",0)").call(self.yAxis);
		}

		self.scatterPlot = self.svg.selectAll("circle").data(self.chartData).enter().append("circle").attr("r", function (d) {
			if (self.rvalue) {
				return Math.sqrt(d[self.rvalue]) / Math.PI * self.radiusModifier;
			} else {
				return self.hardRadius;
			}
		}).attr("cy", function (d) {
			return self.y(d[self.yvalue]);
		}).attr("cx", function (d) {
			return self.x(d[self.xvalue]);
		}).attr("class", "scatter-dot").style("fill", function (d) {
			return self.setFill(d);
		}).style("stroke", function (d) {
			return self.setStroke(d);
		}).attr("title", function (d) {
			return self.tooltipTemplate({ data: d, self: self });
		});

		//$('.scatter-dot').tipsy({opacity:1, gravity:'sw', html:true});
		self.$('.scatter-dot').tooltip({
			html: true,
			placement: function placement(tooltip, element) {
				var cx = $(element).attr("cx");
				var svgCenter = self.width / 2;
				if (cx < svgCenter) {
					return 'right';
				}
				return 'left';
			}
		});

		if (self.xLabelText) {
			self.xLabel = self.svg.append("text").attr("x", self.width / 2).attr("y", self.height + 40).text(self.xLabelText).attr("class", "axislabel");
		}

		if (self.yLabelText) {
			self.yLabel = self.svg.append("text").attr("x", self.height / 2).attr("y", self.margin.left - 20).attr("transform", "rotate (90)").text(self.yLabelText).attr("class", "axislabel");
		}

		$(window).on("resize", _.debounce(function (event) {
			self.newWidth = $("#" + self.chartDiv).width() - self.margin.left - self.margin.right;
			if (self.newWidth == self.width || self.newWidth <= 0) {
				return;
			}
			self.width = self.newWidth;

			self.update();
		}, 100));

		self.trigger("renderChart:end");
		self.update();
	},

	setFill: function setFill(d) {
		var self = this;
		if (self.colorvalue) {
			return self.colorScale(d[self.colorvalue]);
		}
		return;
	},

	setStroke: function setStroke(d) {
		var self = this;
		if (self.colorvalue) {
			return self.colorScale(d[self.colorvalue]);
		}
		return;
	},

	setScales: function setScales() {
		var self = this;

		if (self.xvalues) {
			self.xmin = self.xvalues[0];
			self.xmax = self.xvalues[self.xvalues.length - 1];
		}

		if (self.yvalues) {
			self.ymin = self.yvalues[0];
			self.ymax = self.yvalues[self.yvalues.length - 1];
		}

		self.getxmin = function () {
			if (self.xmin) {
				return self.xmin;
			}
			return d3.min(self.chartData, function (d) {
				return d[self.xvalue];
			});
		};

		self.getxmax = function () {
			if (self.xmax) {
				return self.xmax;
			}
			return d3.max(self.chartData, function (d) {
				return d[self.xvalue];
			});
		};

		self.getymin = function () {
			if (self.ymin) {
				return self.ymin;
			}
			return d3.min(self.chartData, function (d) {
				return d[self.yvalue];
			});
		};

		self.getymax = function () {
			if (self.ymax) {
				return self.ymax;
			}
			return d3.max(self.chartData, function (d) {
				return d[self.yvalue];
			});
		};

		self.x = d3.scale.linear().domain([self.getxmin(), self.getxmax()]).range([0, self.width]).nice(self.xticks);

		if (self.xvalue == "date") {
			self.x = d3.time.scale().domain([self.getxmin(), self.getxmax()]).range([0, self.width]);
		}

		if (self.xvalue == "category") {
			self.x = d3.scale.ordinal().domain(self.chartData.map(function (d) {
				return d.category;
			})).rangeRoundBands([0, self.width], 1);
		}

		self.y = d3.scale.linear().domain([self.getymin(), self.getymax()]).range([self.height, 0]).nice(self.yticks);

		if (self.yvalue == "date") {
			self.y = d3.time.scale().domain([self.getymin(), self.getymax()]).range([self.height, 0]);
		}

		if (self.yvalue == "category") {
			self.y = d3.scale.ordinal().domain(self.chartData.map(function (d) {
				return d.category;
			})).rangeRoundBands([self.height, 0], 1);
		}
	},
	resizeAxis: function resizeAxis() {
		var self = this;

		self.xAxis.tickSize(self.height);

		if (self.xscaleorientation == "top") {
			self.xAxis.tickSize(0 - self.height);
		}

		self.yAxis.tickSize(0 - self.width);

		if (self.xscaleorientation == "right") {
			self.xAxis.tickSize(self.width);
		}

		self.xAxis.ticks(self.xticks);
		if (self.xvalue != "category") {
			self.x.nice(self.xticks);
		}

		self.yAxis.ticks(self.yticks);
		if (self.yvalue != "category") {
			self.y.nice(self.yticks);
		}
	},

	adjustXTicks: function adjustXTicks() {
		var self = this;

		var ticksWidth = 0;
		self.$(".x.axis .tick").find("text").each(function (d, i) {
			ticksWidth += $(this).width();
		});

		if (ticksWidth > self.width) {
			self.xAxis.ticks(4);
			if (self.xvalue != "category") {
				self.x.nice(self.xticks);
			}
			self.yAxis.ticks(4);
			if (self.yvalue != "category") {
				self.y.nice(self.yticks);
			}
		}

		self.svg.select(".x.axis").transition().duration(500).call(self.xAxis);
	},

	update: function update() {
		var self = this;

		self.trigger("update:start");

		self.setWidthAndMargins();

		self.x.range([0, self.width]).domain([self.getxmin(), self.getxmax()]);

		self.y.domain([self.getymin(), self.getymax()]).range([self.height, 0]);

		if (self.xvalue == "category") {
			self.x.domain(self.chartData.map(function (d) {
				return d.category;
			})).rangeRoundBands([0, self.width], 1);
		}

		if (self.yvalue == "category") {
			self.y.domain(self.chartData.map(function (d) {
				return d.category;
			})).rangeRoundBands([self.height, 0], 1);
		}

		d3.select("#" + self.chartDiv).select("svg").transition().duration(500).attr("width", self.width + self.margin.left + self.margin.right).attr("height", self.height + self.margin.top + self.margin.bottom);

		self.svg.attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");

		self.resizeAxis();

		if (self.updateCount === 0) {
			self.updateCount++;
			setTimeout(function () {
				self.update();
			}, 520);
		} else {
			self.updateCount = 0;
		}

		self.svg.select(".x.axis").transition().duration(500).call(self.xAxis);

		if (self.yscaleorientation == "left") {
			self.svg.select(".y.axis").transition().duration(500).call(self.yAxis);
		} else {
			self.svg.select(".y.axis").transition().duration(500).attr("transform", "translate(" + self.width + ",0)").call(self.yAxis);
		}

		self.adjustXTicks();

		self.scatterPlot.data(self.chartData, function (d) {
			return d[self.idField];
		}).attr("title", function (d) {
			return self.tooltipTemplate({ data: d, self: self });
		}).transition().duration(500).attr("r", function (d) {
			if (self.rvalue) {
				return Math.sqrt(d[self.rvalue]) / Math.PI * self.radiusModifier;
			} else {
				return self.hardRadius;
			}
		}).attr("cy", function (d) {
			return self.y(d[self.yvalue]);
		}).attr("cx", function (d) {
			return self.x(d[self.xvalue]);
		}).style("fill", function (d) {
			return self.setFill(d);
		}).style("stroke", function (d) {
			return self.setStroke(d);
		});

		self.scatterPlot.data(self.chartData, function (d) {
			return d[self.idField];
		}).exit().transition().duration(500).attr("r", 0);

		if (self.xLabelText) {
			self.xLabel.transition().duration(500).attr("x", self.width / 2).attr("y", self.height + 40);
		}

		if (self.yLabelText) {
			self.yLabel.transition().duration(500).attr("x", self.height / 2).attr("y", self.margin.left - 20);
		}

		self.trigger("update:end");
	}

});

Reuters.Graphics.ScatterModel = Backbone.Model.extend({
	initialize: function initialize(attributes, options) {
		return;
	},

	parse: function parse(d, options) {
		var self = options.collection;
		if (d.date) {
			d.parsedDate = self.parseDate(d.date);
			d.displayDate = self.dateFormat(d.parsedDate);
		}

		if (self.xvalue == "date") {
			d[self.xvalue] = self.parseDate(d[self.xvalue]);
		} else if (self.xvalue != "category") {
			d[self.xvalue] = parseFloat(d[self.xvalue]);
		}

		if (self.yvalue == "date") {
			d[self.yvalue] = self.parseDate(d[self.yvalue]);
		} else if (self.yvalue != "category") {
			d[self.yvalue] = parseFloat(d[self.yvalue]);
		}

		if (self.rvalue) {
			d[self.rvalue] = parseFloat(d[self.rvalue]);
		}

		return d;
	}
});

//the collection of datapoint which will sort by date.
Reuters.Graphics.ScatterCollection = Backbone.Collection.extend({
	initialize: function initialize(models, options) {
		var self = this;
		_.each(options, function (item, key) {
			self[key] = item;
		});
	},

	comparator: function comparator(item) {
		var self = this;
	},

	model: Reuters.Graphics.ScatterModel,

	parse: function parse(data) {
		var self = this;
		return data;
	}
});
//# sourceMappingURL=scatter.js.map
