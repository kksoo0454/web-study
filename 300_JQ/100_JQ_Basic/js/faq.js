$(document).ready(function(){
    // 각 항목 열기/닫기
    $('.open1').click(function(){
        $(this).parent().next().stop().show();
    })
    $('.close1').click(function(){
        $(this).parent().next().hide();
    })
    // 모두 열기, 모두 닫기
    $('.open').click(function(){
        $('.content').stop().slideDown();
    })
    $('.close').click(function(){
        $('.content').stop().slideUp();
    })
});