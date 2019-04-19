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

function displayGreeting() {
  var currentHour = new Date().getHours();

  
  if (currentHour < 12) { 
    console.log("Good morning! " + "Welcome To Olugbenga's Portfolio"); 
  } else if (currentHour < 18) { 
    console.log("Good afternoon! " + "Welcome To Olugbenga's Portfolio"); 
  } else {
    console.log("Good evening! " + "Welcome To Olugbenga's Portfolio"); 
  } 

}

displayGreeting();






