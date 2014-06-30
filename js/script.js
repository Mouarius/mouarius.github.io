$(document).ready(function(){
 
    function getPrevColor(element){
        var prev = $(element).prev();
        return prev.css("color");
    }
    $(".pure-u-1").click(function(){
        var variable = 100-33.3333;
        var child = $(this).find(".custom-box");
        var hasClass = $(this).hasClass("is-activated")
        if(hasClass){
            $(".pure-u-1").show();
            $(this).animate({
                width: "33.3333%",
                paddingBottom: "0"
            }, 500);
            $(this).css("width","33.3333%");
        }
        else{
            $(".pure-u-1").hide();
            $(this).show();
            $(this).css("left", "33.3333%");
            $(this).css("margin", "auto");
            $(this).animate({
                width: "100%",
                paddingBottom: "20em"
            }, 500);
        }
        $(this).toggleClass("is-activated");
        
        
    });
    

});