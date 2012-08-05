var templates = require('duality/templates'),
    events = require('duality/events'),
    utils = require('duality/utils');


exports.home = {
        map : function(doc) {
			if(doc.thumb){
				emit(doc.name,{name:doc.name,author:doc.author,thumb:doc.thumb});
			}
        }
};

exports.author= {
        map : function(doc) {
			if(doc.author){
				emit(doc.author,{name:doc.name,author:doc.author,thumb:doc.thumb});
			}
        }
};

exports.tag = {
        map : function(doc) {
			if (!doc.tags){return;}
	    for (var i = 0; i < doc.tags.length; ++i) {
				emit(doc.tags[i],{name:doc.name,author:doc.author,thumb:doc.thumb});
			}
        }
};

exports.seen = {
		map : function(doc) { 
			if (doc.seen === void 0) {
				emit(doc.name,{name:doc.name,author:doc.author,thumb:doc.thumb});
			}
	}
};

