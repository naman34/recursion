// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var string = '';

  (function stringify(obj){

  	if(obj instanceof Date){
  		string += '"' + obj.toJSON() + '"';
  		return;
  	}
  	if( typeof obj === 'function'){
  		return;
  	}
  	if( typeof obj === 'string'){
  		var tempString = obj;

  		tempString.replace(/\\/g, "\\");
  		tempString.replace(/\//g, "\\\/");
  		tempString.replace(/'/g,"\\'").replace(/"/g,'\\"');
  		string += '"' + obj + '"';
  		return;

  	}
  	if( typeof obj === 'number'){
  		string += obj;
  		return
  	}

  	if(!!Array.isArray(obj)) {
  		string += '[';
  		obj.forEach(function(el, index, array){
  			stringify(el);
  			if(index !== array.length - 1){
  				string += ', ';
  			}
  		});
  		string += ']';
  	} else if(typeof obj === 'object') {
  		string += '{';
  		var arr = [];
  		for(key in obj){
  			var ts = stringifyJSON(obj[key]);
  			if(!!ts){
  				arr.push('"' + key + '"' + ':' + ts));
  			}
  		}
  		string += arr.join(", ");
  		string += '}';
  	} else {
  		return;
  	}
  })(obj);

  return string;

};
