/* DOM객체 탭메뉴명 변수 tab에 할당 */
var tab = $('#menu_gnb').find('li');
// (콘솔창)tab의 갯수 출력 | 탭메뉴 li갯수 : ??? = 캡쳐, 넘버링
console.log('탭메뉴 li갯수 : ' + tab.length);

/* Event Listener */
var i;
function tab_num(num){
    for(i=0; i<tab.length; i++){
        if(num == i){
            // a-1. active 클래스 적용
            tab.eq(i).addClass('active');
            // b-1. 콘텐츠 보여주기 = 문자열결합, i , show
            $('.tab_content_0'+i).show();
        }else{
            // a-2. active 클래스 제거
            tab.eq(i).removeClass('active');
            // b-2. 콘텐츠 가리기
            $('.tab_content_0'+i).hide();
        }
    }
}