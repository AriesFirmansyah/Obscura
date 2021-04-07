$(document).ready(function(){
    $('#myModal').modal({
        keyboard: false,
        show: true,
        backdrop: 'static'
    });
});

$("#atas1").hide();
$("#atas2").hide();
$("#atas3").hide();

// $("#scroll2").hide();
// $("#panitia").hide();
setInterval(function(){
    $(".scroll").fadeToggle(3000);
},1500);
setTimeout(function(){ 
    $("#atas1").fadeIn(2000); 
}, 1000);
setTimeout(function(){ 
    $("#atas2").fadeIn(2000); 
}, 4500);
setTimeout(function(){ 
    $("#atas3").fadeIn(2000); 
}, 7500);

// function scroll1() {
//     $("#atas4").hide();
//     $("#atas5").hide();
//     $("#atas4").fadeIn(2000); 
//     setTimeout(function(){ 
//         $("#atas5").fadeIn(2000); 
//     }, 5000);
//     setTimeout(function(){ 
//         $("#commitee").fadeIn(2000); 
//     }, 6000);
// }

