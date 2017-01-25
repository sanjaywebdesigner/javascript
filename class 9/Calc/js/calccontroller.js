window.addEventListener("load",init);
function init(){
    /*document.getElementById("addBt").addEventListener("click",doOperation);
    document.getElementById("subtractBt").addEventListener("click",doOperation);*/
    var buttonArray = document.getElementsByTagName("button");
    for(var i = 0 ; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",doOperation);
    }
}
function doOperation(event){
    var result =0;
    var firstNo = document.getElementById("firstNo").value;
    var secondNo = document.getElementById("secondNo").value;
    //var operation = this.getAttribute("data-operation");
    var operation = event.srcElement.getAttribute("data-operation");

    //result = calcObject[this.getAttribute("data-operation")](firstNo,secondNo);
    var expression = firstNo + operation + secondNo;
    result = eval(expression);
    console.log("Expression is ",expression);
    /*if(this.innerHTML==="Add"){
     result = calcObject.add(firstNo,secondNo);
    }
    else
    if(this.innerHTML==="Subtract"){
        result = calcObject.subtract(firstNo,secondNo);
    }*/
    document.getElementById("result").innerHTML=result;
}
/*function addLogic(){
    var firstNo = document.getElementById("firstNo").value;
    var secondNo = document.getElementById("secondNo").value;
    var result = add(firstNo,secondNo);
    document.getElementById("result").innerHTML=result;
}
function subtractLogic(){
    var firstNo = document.getElementById("firstNo").value;
    var secondNo = document.getElementById("secondNo").value;
    var result = subtract(firstNo,secondNo);
    document.getElementById("result").innerHTML=result;
}*/
