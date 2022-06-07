function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return 'This one is on me!'
  } else if (1999 < feet && feet < 2500){
      return "I will gladly take your thirty bucks."
  } else {(feet > 2500)
    return "No can do.";
  }
}
function ternaryCheckCity(City){
  
  return City ==='NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
    switch (tip) {
      case 'generous':
        return 'Thank you so much.'
        break;
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.'
      default:
        return 'Bye.'
    }
  }
