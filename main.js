$(document).ready(function() {
 
    setTimeout(()=>{
        $('.masthead').css('background-image',"url('./images/Backgroundpic5i.jpg')");
        
    
         setTimeout(()=>{
            $('.masthead-title').css('opacity','100');
            $('.masthead-title').css('bottom','0');
            
        },1500);
        },800);
        
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



var timeNow = new Date(); 
var hoursNow = timeNow.getHours(); 
var minutesNow = timeNow.getMinutes(); 
var message = "Welcome to Olugbenga's Portfolio Page. <br>It's "; 
var hoursText; 
if (minutesNow <= 30) { message += minutesNow + " minutes past ";
 hoursText = hoursNow; 
} else { message += (60 - minutesNow) + " minutes before ";
  hoursText = hoursNow + 1;
} 
if (hoursNow == 0 && minutesNow <= 30) { 
  message += "midnight.";
} else if (hoursNow == 11 && minutesNow > 30) {
   message += "noon."; 
} else if (hoursNow < 12) { 
  message += hoursText + " in the morning."; 
} else if (hoursNow == 12 && minutesNow <= 30) { 
  message += "noon."; 
} else if (hoursNow < 18) { 
  message += parseInt(hoursText - 12) + " in the afternoon."; 
} else if (hoursNow == 23 && minutesNow > 30) { 
  message += "midnight."; 
} else {
  message += parseInt(hoursText - 12) + " in the evening."; 
} 
document.getElementById("myOutput").innerHTML = message;



 








