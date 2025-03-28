// $('.gnb li').mouseenter(function(){
//     $(this).children('div').stop().slideDown();
// });
// $('.gnb li').mouseleave(function(){
//     $(this).children('div:visible').stop().slideUp();
// });

/* on() 사용 */
$('.gnb li').on({'mouseenter': function(){
    $(this).children('div').stop().slideDown();
}, 'mouseleave': function(){
    $(this).children('div:visible').stop().slideUp();
}});