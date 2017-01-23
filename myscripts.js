 windowHeight = $(window).innerHeight();
$("#outside").css("height",windowHeight);
$(document).ready(function(){

var inputs=[];
 var totalString;// this string is finally evaluated ;
 var operators =["+","*","/","-"];
 var num=[0,1,2,3,4,5,6,,7,8,9];

 function update(){
    totalString=inputs.join("");
    $("#print").html(totalString);
 }
 function getTotal(){

     var result= eval(totalString);
     console.log(result);
 $("#print").html(result);
// totalString=result.toString();
//console.log("totalString");
  }
  $("button").click(function(){
   if(this.id==="deleteall"){
    inputs=[];
    update();
   }
   else if(this.id ==="deleteone"){
    inputs.pop();
update();
   }

   else if(this.id==="total"){
    getTotal();
   }

   else
    getValue(this.id);
  });

function getValue(input)
{
    // no two consecutive  periods
    if((inputs[inputs.length-1]===".")&&input===".")
    {
           console.log("two periods");
           console.log(inputs);
}


   else if(operators.includes(inputs[inputs.length-1])===false)
   {
    inputs.push(input);
  }
// string should not start with an operator
  else if(inputs.length===1 && operators.includes(input)===false)
  {
      inputs.push(input);
    }
    else if (num.includes(Number(input)))
    {
      inputs.push(input);
    }

    update();

// end of getvalue();
}
// end of document.ready()
});