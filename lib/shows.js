// shows 
	var jsonp = require('jsonp'),
    utils = require('./utils'),
    _ = require('underscore')._;
var utils = require('lib/utils');
var _ = require('underscore')._;
var templates = require('duality/templates')
var db = require('db').use('incoming');
 
exports.frontpage = function(doc,req){
		return {
					code: 200,
					body: templates.render('base.html',req,{
						title: 'Subversion Browser',
						main_content : utils.getFuton(req),
						items : JSON.stringify(req),
						baseURL: utils.getBaseURL(req)
					})
			};
};
	

exports.authors = function(doc,req){
		var main_content;
		main_content = 'authors' ;
		return {
					code: 200,
					body: templates.render('base.html',req,{
						title: 'Subversion Browser',
						main_content : main_content,
						baseURL: utils.getBaseURL(req)
					})
			};
};
	
exports.display = function(doc,req){
		var main_content;
		main_content = templates.render('display.html',req,doc);
		return {
					code: 200,
					body: templates.render('base.html',req,{
						title: 'Subversion Browser',
						main_content : main_content,
						baseURL: utils.getBaseURL(req),
						items : JSON.stringify(doc)
					})
			};
};
