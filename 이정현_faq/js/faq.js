$(document).ready(function(){
    /* 전체 열고 닫기 */
    $('#openAll').click(function(){
        $('main .a').stop().slideDown();
    })
    $('#closeAll').click(function(){
        $('main .a').slideUp();
    })
    /* 질문1 열고 닫기 */
    $('#openQ_1').click(function(){
        $('main .a_1').stop().slideDown();
    })
    $('#closeQ_1').click(function(){
        $('main .a_1').slideUp();
    })
    /* 질문2 열고 닫기 */
    $('#openQ_2').click(function(){
        $('main .a_2').stop().slideDown();
    })
    $('#closeQ_2').click(function(){
        $('main .a_2').slideUp();
    })
});