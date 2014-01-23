// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var string = '';

  (function stringify(obj){
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
  			arr.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
  		}
  		string += arr.join(", ");
  		string += '}';
  	} else {
  		if(typeof obj === 'number'){
  			string += obj;
  		} else {
  			string += '"' + obj + '"';
  		}
  	}
  })(obj);

  return string;

};
