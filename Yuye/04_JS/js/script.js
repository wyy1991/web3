/* script.js */
console.log("test");

// test == and ===
var a = 1234;
var b = "1234";
if (a === b) {
	console.log("int === string");
} else if (a == b){
	console.log("int == string");
} else{
	console.log("not equal");
}

// test while loop
var i = 0;
while(i < 5){
	console.log(i);
	i++;
}

// for loop
for (var j = 5; j > 0; j--){
	console.log(j);
}

// 可以连等
var a = 1, b = 1, c = 1, d = 1;
if (a == b == c == d){
	console.log("equal equal equal");
	//alert("here !"); // alert will stop the javascript,
}

if (a && b && c && d){   // 因为从前向后运行，所以把最大的条件放前面,
	console.log("equal equal equal");
}


// 这是最基本的函数
function times(a,b){
	return a * b;
}

function generateNumber(){
	return 2;
}
var result = times(generateNumber(), 4); 
// stack 结构, 先把times push 进去， 然后把generateNumeber push进去。 然后pop, 所以是先执行generateNumber再执行times

var times2 = function(a, b){
	return a * b;
}

var alertText = function() {
	alert("haha 1");
	return function(){
		alert("haha 2");
	}

}

var dosomething = function(func){
	console.log("send in a function");
	func(); // 执行了函数
	func()(); // 执行了return 出来的那个函数
}

// dosomething(alertText)


var testClosure = function (){
	var x = 4;
	var closeX = function(){
		return x+1;
	}
	return x;
}





















