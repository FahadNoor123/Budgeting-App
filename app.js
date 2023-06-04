function incomes(){
    var incomeValueSet=+prompt("Enter Your Mothly Income")
    var incomeValue=document.getElementById("incomeval").innerText=incomeValueSet;
    var BalanceValue=document.getElementById("balvalue").innerText=incomeValueSet;

}


let epxpesNumber=0;
let description="";
function expensebtn(){
    var expenseValueSet=+prompt("Enter Your Expense Amount")
    epxpesNumber+=expenseValueSet
    var expenseDescription=prompt("Expense Details")
    description+=expenseDescription

   var result=(description+"="+expenseValueSet)
   var details=document.getElementById("expenseDetails").innerText=result;
  
//    console.log(epxpesNumber)
    var incomeValue=document.getElementById("incomeval").innerText;
    var subtractValue=incomeValue-epxpesNumber
    var BalanceValueFinal=document.getElementById("balvalue").innerText=subtractValue;
    var expenseValue=document.getElementById("expensssss").innerText=epxpesNumber;
}



function onWoring(){
    alert("Website Under Construction")
}