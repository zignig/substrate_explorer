var handlebars = require('handlebars');
var templates = handlebars.templates;
var utils = require('lib/utils');
var _ = require('underscore')._;

exports.items= function(head,req) { 
   start({'headers' : {'Content-Type' : 'text/html'}});
	var row;
	var items = [];
	var desc = req.path[req.path.length-1]+' : '+req['query']['key'];
	while((row = getRow())){
		items.push({
			id : row.id,
			name : row.value.name,
			thumb : row.value.thumb
		})
	}
	var data;
	data = templates['item.html']({baseURL: utils.getBaseURL(req),items:items});
	send(templates['base.html']({desc:desc,baseURL: utils.getBaseURL(req),'main_content':data}));
};

exports.author= function(head,req) { 
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
	data = templates['item.html']({baseURL: utils.getBaseURL(req),items:items});
	send(templates['base.html']({baseURL: utils.getBaseURL(req),'main_content':data}));
};

exports.authors = function(head,req) { 
   start({'headers' : {'Content-Type' : 'text/html'}});
	var row;
	var items = [];
	while((row = getRow())){
		items.push(row.key)
	}
	var data;
	data = templates['alpha_select.html']({baseURL: utils.getBaseURL(req),items:items});
	send(templates['base.html']({baseURL: utils.getBaseURL(req),'main_content':data}));
};

exports.show_authors = function(head,req) { 
   start({'headers' : {'Content-Type' : 'text/html'}});
	var row;
	var items = [];
	while((row = getRow())){
		items.push(row.key[1])
	}
	var data;
	data = templates['alpha_show.html']({baseURL: utils.getBaseURL(req),items:items});
	//data = JSON.stringify(req);
	send(templates['base.html']({baseURL: utils.getBaseURL(req),'main_content':data}));
};
