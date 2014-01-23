// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (classString) {
  
	var arr = [];
	var document = window.document;

	var root = document.body;


	(function checkSelfAndChildren(node){

		var className = node.className + "";
		var classArray = className.split(" ");
		
		if(classArray.indexOf(classString) >= 0){
			arr.push(node);
		}

		for(var i = 0; i < node.childNodes.length; i++){
			checkSelfAndChildren(node.childNodes[i]);
		}

	})(root);

	return arr;

};
