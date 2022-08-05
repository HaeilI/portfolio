$(document).ready(function(){
	
	
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow","hidden");		
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//스킬 그래프
	
	
	
	//상단 메뉴 부드럽게 이동
	$("nav a, #top a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		if( $("nav a") ){
			$(this).addClass("active").siblings().removeClass("active");
		}
	});
	
	//상단 메뉴 - 스크롤로 내릴때 색변경
	$(window).scroll(function(){
		st = $(this).scrollTop();
		if( st <900 ){
			$("#nav1").addClass("active").siblings().removeClass("active");
		}
		if( 900 <= st && st < 1800 ){
			$("#nav2").addClass("active").siblings().removeClass("active");
			$("#about  section div").eq(0).children().addClass("ani_70");
			$("#about  section div").eq(1).children().addClass("ani_70");
			$("#about  section div").eq(2).children().addClass("ani_80");
			$("#about  section div").eq(3).children().addClass("ani_70");
			$("#about  section div").eq(4).children().addClass("ani_60");
			$("#about  section div").eq(5).children().addClass("ani_70");
		}
		if( 1800 <= st && st < 4581 ){
			$("#nav3").addClass("active").siblings().removeClass("active");
		}
		if( 4581 <= st && st < 6300 ){
			$("#nav4").addClass("active").siblings().removeClass("active");
		}
		if( 6300 <= st){
			$("#nav5").addClass("active").siblings().removeClass("active");
		}
		console.log(st);
	});
	
	if( $(window).width()<= 600 ){
	$(window).scroll(function(){
			st = $(this).scrollTop();
			if( st <681 ){
				$("#nav1").addClass("active").siblings().removeClass("active");
			}
			if( 681 <= st && st < 1931 ){
				$("#nav2").addClass("active").siblings().removeClass("active");
				$("#about  section div").eq(0).children().addClass("ani_70");
				$("#about  section div").eq(1).children().addClass("ani_70");
				$("#about  section div").eq(2).children().addClass("ani_80");
				$("#about  section div").eq(3).children().addClass("ani_70");
				$("#about  section div").eq(4).children().addClass("ani_60");
				$("#about  section div").eq(5).children().addClass("ani_70");
			}
			if( 1931 <= st && st < 4987 ){
				$("#nav3").addClass("active").siblings().removeClass("active");
			}
			if( 4987 <= st && st < 11000){
				$("#nav4").addClass("active").siblings().removeClass("active");
			}
			if( 11000 <= st){
				$("#nav5").addClass("active").siblings().removeClass("active");
			}
			console.log(st);
		});
	}
	//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "안녕하세요. \n박민수의 포트폴리오입니다."
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 150 );
		}
	}
	type();
	
	//휴대폰에서는 상단 배경색 보임
	if( $(window).width()<= 600 ){
		$("nav").addClass("act");
	} else{	//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		$(window).scroll(function(){
			if( $(window).scrollTop() > 100 ){
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}
		});
	}
	
	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if( $(window).width()> 600 ){
		$(window).scroll(function(){
			if( $(window).scrollTop()>1600 ){
				$("#portfolio1> section").eq(0).addClass("act");
			}
			if( $(window).scrollTop()>2500 ){
				$("#portfolio1> section").eq(1).addClass("act");
			}
			if( $(window).scrollTop()>3400 ){
				$("#portfolio1> section").eq(2).addClass("act");
			}
		});		
	}
	
});//끝









