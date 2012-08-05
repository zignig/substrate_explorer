var handlebars = require('handlebars');
var templates = handlebars.templates;
var utils = require('lib/utils');
var _ = require('underscore')._;

exports.authors= function(head,req) { 
   start({'headers' : {'Content-Type' : 'text/html'}});
	var row;
	var items = [];
	while((row = getRow())){
		items.push({
			id : row.id,
			name : row.value.name,
			thumb : row.value.thumb
		})
	}
	var data;
	data = templates['item.html']({'items':items});
	send(templates['base.html']({'main_content':data}));
};
