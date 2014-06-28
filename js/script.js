$(document).ready(function(){
 
    function getPrevColor(element){
        var prev = $(element).prev();
        return prev.css("color");
    }
    $(".pure-u-1").click(function(){
        var variable = 100-33.3333;
        var child = $(this).find(".custom-box");
        var hasClass = $(this).hasClass(".is-activated")
        if(hasClass){
            $(this).css("paddingRight",0);

        }
        else{
            $(this).css("paddingRight",variable + "%");
        }
        $(this).toggleClass(".is-activated");
    });

});