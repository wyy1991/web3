/* script.js */


var minusNum= function (a, b){
	return a - b;
}

var addNum= function (a, b){
	return a + b;
}

var runAction  = function (action, a, b){
	return action(a, b);
}

var numbers = [12, 3, 4, 7]
var results = numbers.map(function(item, item2){
	//console.log(item);
	//console.log(item2);
	return item * 2;
});


//numbers.push(34);
//var popNum = numbers.pop(); //stack的pop
//var shiftNum = numbers.shift(); //queue的从队首挤出来一个

function testClosure(number, numbers){
	var findNum;
	for (var i = 0; i<numbers.length; i++){
		if (numbers[i] == number){
			findNum = function(){
				alert("you find number " + number + " at index " + i);
			}
		}
	}
	return findNum;
}

testClosure(12, numbers);  //当他找到的时候number是没有问题的， i的话是i++加完了的所以就等于4


//所以怎么改呢， 找到的时候可以直接return
//当在一个函数里边执行另一个函数的时候， 需要immediately return, 特别是for loop 或者值有 change的情况下
function testClosure(number, numbers){
	for (var i = 0; i<numbers.length; i++){
		if (numbers[i] == number){
			return function(){
				alert("you find number " + number + " at index " + i);
			}
		}
	}
}


var myBox = {
	chang: 10,
	kuan: 20,
	gao: 15,
	daxiao: function(){
		return myBox.chang * myBox.kuan * myBox.gao; //可以用this
	},
	description: "wo ha ha ha",
	"ni shuo sha": "ca ca ca"  //如果命名的名字中间有space的时候必须要引号， 访问的时候不能用点
}

Object.prototype.color = "red";


function box(a,b,c){
	this.chang = a,
	this.kuan = b,
	this.gao = c,
	this.daxiao = function(){ return this.chang * this.kuan}
}

var boxone = new box(10,20,30);












