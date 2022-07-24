$(document).ready(function(){
	
	//상단메뉴
	$("header ul").mouseenter(function(){
		$("#menu nav").stop().slideDown();
		$("header").stop().animate({height:"400px"});
	});
	
	$("#menu").mouseleave(function(){
		$("#menu nav").stop().slideUp();
		$("header").stop().animate({height:"180px"});
	});

	//seoul photo school gallery 모달 팝업보이기
	$("#gallery button").click(function(){
		let src1 = $(this).children().attr("src");
		let src2 = src1.replace(".png","_big.png");
		$("#popup img").attr("src", src2 );
		$("#popup").fadeIn();
		$("#popup").css("display","flex");
	});
	
	$("#popup").click(function(){
		$(this).fadeOut();
	});
	
	//공지사항
	$("#notice b").click(function(){
		let i = $(this).index();
		let j = "";
		switch(i){
			case 0 : j="#n1"; break;
			case 1 : j="#n2"; break;
			case 2 : j="#n3";
		}
		$("#n1,#n2,#n3").hide();
		$(j).show();
		$(this).addClass("active").siblings().removeClass("active");
		
	});
	
	
}); //전체끝   