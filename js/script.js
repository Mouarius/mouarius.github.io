$(document).ready(function(){
 
    function getPrevColor(element){
        var prev = $(element).prev();
        return prev.css("color");
    }

});