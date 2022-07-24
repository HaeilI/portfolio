$(document).ready(function(){
	
	//상단 메뉴 (햄버거아이콘을 클릭하면 메뉴가 내려온다)
	$("header button").click(function(){
		if($("nav").css("display") == "none"){
			$("nav").stop().slideDown();
			$(this).text("X");
		}else{
			$("nav").slideUp();
			$(this).html("&#x2630;");
		}
	});
	
		$("nav a").click(function(){
			$("nav").stop().slideUp();
			$("header button").html("&#x2630;");
		}); // 상단메뉴 끝

		//왼쪽방향으로 자동 슬라이드
		const x = setInterval( y , 1800 );  //1.8초 간격으로 계속 y()함수를 호출한다.
		function y() { 
			//왼쪽 방향으로 570픽셀 이동한다. (포지션을 확인한다.)
			$("figure div").stop(true,true).animate({left : "-535px"}, 1000, function(){
					//<div>첫째자식을 맨 뒤로 보낸다 (append는  뒤에 추가한다)
					$(this).append(   $(this).children().first()    );
					$(this).css("left" , 0);
			});
	}
		//위로 (top)화살표 오른쪽 위치 가변설정
		//넓이 600보다 큰 화면에서만 해당 됨
	if($(window).width() > 600 ){
		const w1 = $(window).width();
		console.log(w1);
		const w2 = ((w1 - 600)/2)+10;
		console.log(w2);
		
		$("#arrTop").css("right",w2);
	}//창크기 변경후 새로고침 할 것
}); ///////마지막 끝