var myArray=["Sleep","Quiet Time","A Chef","Drinks"];
var price=[50.99,100.56,300.89,1.00];
var itemList = "";
var sum = 0;
var menuTitle = "Menu";
function getList(){
  for (var i = 0; i <myArray.length; i++) {
  	if(myArray[i]!==null && price[i]!==null){
  		itemList +=(myArray[i]+" "+price[i]+'\r');
  	}
  	else{
  		break;
  	}
    
  }
  console.log(menuTitle);
  console.log( itemList);
  //getOrder();
}//end of menu func

function getOrder(){
  var shoppingList;
  var answer;
  var cond = true;
  var order = [];
  var grandTotal = 0;
  var total = 0;
  var cnt = 0;
  while(cond === true){
    total = 0;
    shoppingList = prompt("Please enter in an Item from the list:");
       total+= getItmPrice(shoppingList);
       order.push(shoppingList+" "+total);
       grandTotal+=total;
       answer = prompt("Would you like to add another item Enter Y or N?");
    	
    if (answer === 'N'){
     cond = false;
     for (var i = 0; i <order.length; i++) {
       alert("You have ordered: "+order[i]);
      }
      alert("Your GrandTotal is: "+grandTotal);
      alert("Thanks for Shopping at the 4 item Store!!")
    }
  }
}
function getItmPrice(itm){
  if ( itm === "Sleep"){
       sum=price[0];
    }else if (itm === "Quiet Time"){
       sum=price[1];
    }else if (itm === "A Chef"){
       sum=price[2];
    }else{
     sum=price[3];
    }
  return sum;
}
getList();
