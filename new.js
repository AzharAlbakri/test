function square(x) {
  return x * x;
}




 function greeter(name){
 	return "Hello,"  + name + "!"
 }

function perimeterRect(l, w) { 
 return 2 * (l + w) 
 }
 function perimeterSquare(s) { 
 return 4 * s;
 }
 function perimeterParallelogram(l,w){
 	return 2*l + 2*w;
 }
 
 function perimeterTrapezoid(s1,s2,b1,b2){
 	return s1+s2+b1+b2;
 }
 function perimeterTriangle(s1,s2,b){
 	return s1+s2+b;
 }
 function perimeterCircle(d){
 	return 3.14159 * d;
 }



 // function areaRect(l, w) { 
 // return 2 * (l + w) 
 // }
 // function areaSquare(s) { 
 // return 4 * s;
 // }
 // function areaParallelogram(l,w){
 // 	return 2*l + 2*w;
 // }
 
 
 // function areaTrapezoid(s1,s2,b1,b2){
 // 	return s1+s2+b1+b2;
 // }
 // function areaTriangle(s1,s2,b){
 // 	return s1+s2+b;
 // }
 // function areaCircle(d){
 // 	return 3.14159 * d;
 // }
function oldEnoughToDrive(age){
if(age >=16){
	return true ;
};
return false;
}
function sameLength(a,b){
if(a.length === b.length){
return true;
}
return false;
}

function weather(day){
	if (day === "warm" || day === "cold"){
		return "we will go to resturent!"
	}
	return " we will not go "
}
function dogKind(k){
	if (k === "french bulldog" || k === "boston terrier"){
		return "happy choice"
	}
	return " I dont want this dog  "
}

function weather2(tempreture,rain){
	if (tempreture === "cold" && rain === "raining"){
		return true;
	}
	return false;
}


function catType(like,dislike){
	if(like==="hissing" && dislike==="growling"){
		return true;
	}
	return false;
}
function rentalCar(age,day){
	if ((age >= 18 && age <=21) && (day==="Monday" || day==="Tuesday")){
			  return "you are welcome to rent a car!";
		    }else if(age <18){
		    	return " rent is not allowed";
		    }else if(age>21){
		    	return "you are welcom "
		    }
}


function scoreToGrade(num){
  if(num >=0 && num <=100){
	if(num >= 98){
		return "A+";
	}else if(num >= 90 && num<=92){
		return "A-";
	}else if(num > 92 && num<98){
		return "A";	
	}else if(num >= 88 ){
		return "B+";
	}else if(num >= 80 && num<=82){
		return "B-";
	}else if(num > 82 && num<88){
		return "B";
	}else if(num >= 78 ){
		return "C+";
	}else if(num >= 70 && num<=72){
		return "C-";
	}else if(num > 72 && num<77){
		return "C";
	}else{
		return "failed";
	}
}
return 'INVALID SCORE';
}
function whatToDoOutside(temperature, condition ){
	if(temperature >=30 && condition === "sunny"){
		return 'The weather is ideal for: swimming, walk and hangout ';
	}else if(temperature < 0 && condition === "snowing"){
      return 'The weather is ideal for:snowboarding, skiing';
	}else{
		return "stay home";
	}
  
}

function guessMyNumber(n){
	if(n >=0 && n<=5){
		return "the guess is in of bounds";
	}else{
        return "the guess is out of bounds";
	}
}
//l= letter, s= Score
// function letterGrade(l, s){
// 	if(l=== "A" && s >92 && s<98 ){
// 		return "A";
// 	}else if(l === "A" && s >= 98){
// 		return "A+";
// 	}else if(l === "A" && s <= 92){
// 		return "A-";
// 	}
// 	if(l=== "" && s >92 && s<98 ){
// 		return "A";
// 	}else if(l === "A" && s >= 98){
// 		return "A+";
// 	}else if(l === "A" && s <= 92){
// 		return "A-";
// 	}
// }
function or(a,b){
	if(a!==b && a!==b){
		return true;
	}else{
		return false;
	}
}








function sum(n){
	if (n != 0){
		return n + sum(n - 1);
		}return n;
	}

function factorial(n){
	if (n > 1){
		return n * factorial(n-1);
	}return n;
}

function repeatString(str, count) { 
 // TODO: your code here 
 if(count === 0){
 	return ""
 }else if(count >0){
 	return str + repeatString(str,count-1);
 }
 } 
 // repeatString('dog', 0); // => '' 
 // repeatString('dog', 1); // => 'dog' 
 // repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
 // repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
function fib(n){
  if(n===0 || n===1){
  	return 1;
  }else if(n > 1){
  	return fib(n - 1) + fib(n - 2);
}return n;
}



function multiplyBy10(number, n){
	if (number > 0 && n > 0){
		return   10 * multiplyBy10(number , n -1);
	}
	return number;
}





function summ(start, end){
	if (start != 0 && start < end ){
		return start + summ(start + 1, end);
		}return start;
	}

function isEven(n){
  if (n/2 === Math.floor(n/2)) {
  	return true;

  }	else{
  return false;
}

}


function multiply(num1, num2){
	if(num1 > 0 && num1 <= num2){
		return num1 + multiply(num1, num2 -1)
	}
	return num1;
}




 function inc(x) { 
 return x + 1; 
 } 
 function dec(x) { 
 return x - 1; 
 }

function add(x, y){
	if(x>1){
		return add(dec(x),inc(y));	
	}return y;
		
	

}

function intRange(x, y){
	if(x<y){
		return intRange(inc(x),y);
	}return inc(x);

	
}

function stringLength(){
	
}


 var x = 1;

 function counter(){
 	
 	 return x++;
 }

	var upperBound =9;

 function guessMyNumber1(n) { 
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number!'  ; 
 } 
 return "Nope! That wasn't it!" + ' ' +"It was"+ randInt(upperBound) ; 
 } 


 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }


function sum5(n){
	var x = 0;
	var result =0;
	while (x <= n){
		result += x ;
		x++;
	}console.log(result);
}

 function factorial2(n) { 
 // TODO: your code here 
 var x = 1;
 var result = 1;
 while(x <= n){
 	result = result * x;
 	x++;
 }console.log(result);

 } 

function repeatString1(str, count) { 
 // TODO: your code here 
 var x = 0;
 result = ''
 while (x<count){
 	result = result + str;
 	x++;
 	
 }console.log(result);

 }


function counting(count) { 
 var x = 1;
 var result ='' ;
 while (x<=count){
 	result = result + ',' + x ;
 	x++;
 	
 }console.log(result);

 }

function meetGreet(number){
	var x = 0;
	while( x < number){

		if(x =1){
			console.log('Welcome', x);
		}else if {}
		x++;
		console.log('Welcome', x , '\n' , ','  );
	}
}

var tvShows = [ 'friends', 'sport', 'news' ];
var people = ['ahmad', 'aya'];
var sport = ['tinnes', 'football'];

function getFirstElements(array){
  return array[0];
}

function getLastElements(array){
  return array[array.length-1];
}

var animals = ['dog', 'cat', 'gerbil'];

function nth(array, index){
return array[index];
}

function rest(){

}

 function cons(x, array) { 
 // your code here 
 return array.unshift(x)
 }


function conj(x, array) { 
 // your code here 
 return array.push(x)
 }
 var myArray = [1,2,3,4,5]
function sum(array){
	var result = 0;
	for(var i =0; i < array.length; i++){
		result = result + array[i];
	}
	return result;
}

function max(array){
 var maximum = array[0];
   for(var i=0; i<array.length; i++){
   	if (array[i]>maximum){
   		maximum = array[i];
   	}
   }
   return maximum;
}

function longestWord(string){
	var array = string.split(" ");
	// console.log("first arr:", array);
	var longest = array[0];
	// console.log("first longest:", longest);
	for(var i=0; i<array.length; i++){
		if(array[i].length>=longest.length){
			longest = array[i];
		}
	} return longest;
}


//  var myArray1 = [1,2,3,4,3,5,3];
// function remove(array, element){
// 	var newArr = [];
// 	for (var i = 0; i < array.length; i++){
// 		if (element !== array[i]){
// 			console.log(array[i])
// 			newArr = newArr.push(array[i]);
// 		}
// 	} return newArr;
// }
var myArray2 = [1,2,3,4,3,5,3]
function evens(array){
	var evenNumArray=[];
	for (var i = 0; i< array.length; i++){
		if (array[i] % 2 === 0){
			evenNumArray.push(array[i]);
			

		}
	} return evenNumArray;
}





 var myArray3 = [1,2,3]
function average(array){
	var result = 0;
	for(var i =0; i < array.length; i++){
		result = result + array[i];
	}
	return result/array.length;
}

function min(array){
 var minimum = array[0];
   for(var i=0; i<array.length; i++){
   	if (array[i]<minimum){
   		minimum = array[i];
   	}
   }
   return minimum;
}

function shortestWord(string){
	var array = string.split(" ");
	// console.log("first arr:", array);
	var shortes = array[0];
	// console.log("first longest:", longest);
	for(var i=0; i<array.length; i++){
		if(array[i].length<shortes.length){
			shortes = array[i];
		}
	} return shortes;
}


function countChar(string, char){
	var stringArray = string.split("");
	var counter = 0;
	for (var i = 0; i<string.length; i++){
		if (stringArray[i].toLowerCase() === char.toLowerCase()){
			counter++;
		}

	} return counter
}


function evenLengthWords(string){
	var evenStrArray=[];
	var newStr = string.split(" ");
	for (var i = 0; i< newStr.length; i++){
		if (newStr[i].length % 2 === 0){
			evenStrArray.push(newStr[i]);
			

		}
	} return evenStrArray;
}


function reversed(string){
	var newReversed = [];
	var newStr = string.split("");
	for (var i = newStr.length-1; i>=0; i--){
		newReversed.push(newStr[i]);
	}
	return newReversed.join();
	}


console.log("Here is new git change need to add and commite ")

console.log("Here is new git third change need to add and commite ")

console.log("Here is new git final change need to add and commite ")


console.log("Here is new git new final change need to add and commite ")
 












