$(document).ready(function(){
    $('.gnb ul li').eq(0).click(function(){
        $('#buy').stop().show();
    });
    $('.gnb ul li').eq(1).click(function(){
        $('#sell').stop().show();
    });
});