$(document).ready(function() {
    //Remember to put title back in place on mobile
    // $(".masthead").mouseenter(function() {
    //    $(this).css('background-image',"url('./images/Backgroundpic3.jpg')");
    //    $('.masthead-title').css('opacity','100');
    //    $('.masthead-title').css('bottom','0');
    // })

    // $(".masthead").mouseleave(function() {
    //    $(this).css('background-image',"url('./images/Backgroundpic3b.jpg')");
    //    $('.masthead-title').css('opacity','0');
    //    $('.masthead-title').css('bottom','400px');
    // })

    setTimeout(()=>{
        $('.masthead').css('background-image',"url('./images/Backgroundpic3.jpg')");
        
    
         setTimeout(()=>{
            $('.masthead-title').css('opacity','100');
            $('.masthead-title').css('bottom','0');
            
        },1500);
        },800);
    
    
});
// $(document).ready(function(){
//     setTimeout(()=>{

//         $('.masthead').css('background-image',"url('./images/Backgroundpic3b.jpg')");
//     }2000);
// });

// function mouseenter() { 
//     document.querySelector(".masthead").url('./images/Backgroundpic3.jpg')
//     mouseenter();
// }

// window.mouseenter = function() {
//     let mouseenter = document.getElementById('masthead');
//     mouseenter.addEventListener('mouseenter');
// }

