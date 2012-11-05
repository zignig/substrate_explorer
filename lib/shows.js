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
		var show_bits ={};
		show_bits.att =[];
		show_bits.name  = doc.name;
		show_bits.author  = doc.author;
		for(name in doc._attachments){
			stub = doc._attachments[name]
			show_bits.att.push({
				name: name,
				id: doc._id,
				base: utils.getBaseURL(req),
				type: stub.content_type,
				length:stub.length
			}
			); 
		}
		show_bits.tags = doc.tags;
		show_bits._id = doc._id;
		if(doc.thumb){
			show_bits.thumb = doc.thumb;
		};
		if(doc.url){
			show_bits.url = doc.url;
		};
		main_content = templates.render('display.html',req,show_bits);
		return {
					code: 200,
					body: templates.render('base.html',req,{
						title: 'Subversion Browser',
						main_content : main_content,
						baseURL: utils.getBaseURL(req),
						items: JSON.stringify(show_bits)
					})
			};
};
