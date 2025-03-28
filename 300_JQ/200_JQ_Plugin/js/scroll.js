$(document).ready(function(){
    /* scrollTo 플러그인 사용 */
    $('.gnb a').on('click', function(e){
        e.preventDefault();
        // (링크될 # || Y축 위치값, 애니메이션 시간)
        $(window).scrollTo(this.hash || 0, 500);
    })
    var sa = 100;
    // scroll 이벤트 연결
    $(window).scroll(function(){
        // 스크롤 탑 정보 얻어서 변수 num에 할당 => (콘솔) 캡처, 넘버링
        var num = $(this).scrollTop();
        console.log(num);
        if (num > sa) {
            $('aside div').stop().fadeIn();
        } else if (num <= sa) {
            $('aside div').stop().fadeOut();
        }
    });
    
    /* animate 이용 부드러운 스크롤탑 이동 */
    $('.top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: 0}, 1000, 'swing');
    });
});