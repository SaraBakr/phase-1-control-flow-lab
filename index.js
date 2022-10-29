

function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance>2500){
    return "No can do.";
  }
  if(distance<=400){
  return "This one is on me!";

 } else if(distance>400 && distance<2000){
    return "That will be twenty bucks."
  }

  else if(distance>200){
return "I will gladly take your thirty bucks.";
  }




}

function ternaryCheckCity(city){
if(city=="NYC"){
  return "Ok, sounds good.";
}
else{
  return "No go.";
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip=="generous"){
    return "Thank you so much.";
  }
  else if(tip=="not as generous"){
    return "Thank you.";
  }
  else{
    return "Bye."
  }
}





/*
function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400) {
      return "This one is on me!";
  }
  
  if (rideLength >2500) {
      return "No can do.";
  } else if (rideLength >= 2000) {
      return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip) {
      case 'generous' :
          return 'Thank you so much.';
          break;
      case 'not as generous' :
          return 'Thank you.';
          break;
      default:
          return 'Bye.';
          break;
  }
}
*/