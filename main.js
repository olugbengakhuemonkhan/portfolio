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




