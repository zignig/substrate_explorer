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


