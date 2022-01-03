$(Document).ready(function(){
    $(".dtext").on("click",function(){
       $(".pointer").toogle();
       $(".ptext").toogle();
    });   
});









$(document).ready(function(){
    $("form#form").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if(name && email){
            alert (name + ",message received. We will contact you soon.");
        }
        else{
            alert ("Please enter you name and email!");
        }
    });
});