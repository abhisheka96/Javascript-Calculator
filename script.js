function disp(val){
return document.getElementById("result").value+=val;
}

function clr(){
	document.getElementById("result").value = "";
	
}

function del(){ 
var back = document.getElementById("result").value;
 var len = back.length - 1;
 var newBack = back.substring(0,len);
 document.getElementById("result").value = newBack;
}

function solve(){
	let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}