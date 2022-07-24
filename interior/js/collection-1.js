$(document).ready(function(){
$(window).resize(function(){ 
if (window.innerWidth > 600 ) {  // 다바이스 크기가 600이상일때 

	
	$("footer section div").click(function(){
		$("section.gallery >div").css("width","16%");
		$("section.gallery >div").css("display","block");
		$("section.gallery >div").css("overflow","hidden");
		$("section.gallery >div h2").css("position","relative");
		$("h2.main span").removeClass("list");
		$(".gallery>div div").removeClass("slide");
		let y = $(this).index();
		console.log(y);
		$("main > section").eq(y).addClass("active").siblings().removeClass("active");
		if( y == 0){
			$("#layout").removeClass().addClass("black");
			$("footer div button").removeClass().addClass("material-symbols-outlined black");
		}if( y == 1){
			$("#layout").removeClass().addClass("white");
			$("footer div button").removeClass().addClass("material-symbols-outlined white");
		}if( y == 2){
			$("#layout").removeClass().addClass("blue");
			$("footer div button").removeClass().addClass("material-symbols-outlined blue");
		}if( y == 3){
			$("#layout").removeClass().addClass("green");
			$("footer div button").removeClass().addClass("material-symbols-outlined green");
		}
		
	});
	
	$("h2.main").click(function(){
		$("section.gallery >div").css("width","16%");
		$("section.gallery >div").css("display","block");
		$("section.gallery >div").css("overflow","hidden");
		$("h2.main span").removeClass("list");
		$("footer div").removeClass("active");
		$("section.gallery >div h2").css("position","relative");
		$(".gallery>div div").removeClass("slide");
	});
	
	$("section.gallery >div").click(function(){
		$(this).siblings().css("display","none");
		$("footer >div").addClass("active");
		$(this).css("width","100%");
		$(this).css("overflow","auto");
		$(this).children("div").addClass("slide");
		$("section.gallery > div >div").css("left","-410px");
		$("section.gallery >div h2").css("position","fixed");
		// $("section.gallery >div >div").addClass("slide");
		// $(".gallery img").css("transform","translateX(-410px)")
		let z = $(this).index();
		console.log(z);
		$("h2 span").eq(z).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 6).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 12).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 18).addClass("list").siblings().removeClass("list");
	});
	
	/*이미지슬라이드*/
	$("#leftbut").click(function(){
		$(".gallery .slide").stop().animate({ left : 0} , 500 , function(){
			$(".slide").prepend( $(this).children().last() );
			$(".slide").css("left" , "-410px");
		});
	});
	
	$("#rightbut").click(function(){
		$(".gallery .slide").stop().animate({ left : "-820px"} , 500 , function(){
			$(".slide").append( $(this).children().first() );
			$(".slide").css("left" , "-410px" );
		});
	});

} else {

	
	$("footer section div").click(function(){
		$("section.gallery >div").css("width","49vw");
		$("section.gallery >div").css("display","block");
		$("section.gallery > div >div").css("overflow","hidden");
		$("section.gallery >div h2").css("position","relative");
		$("section.gallery > div >div").css("left",0);
		$("h2.main span").removeClass("list");
		let y = $(this).index();
		console.log(y);
		$("main > section").eq(y).addClass("active").siblings().removeClass("active");
		if( y == 0){
			$("#layout").removeClass().addClass("black");
			$("footer div button").removeClass().addClass("material-symbols-outlined black");
		}if( y == 1){
			$("#layout").removeClass().addClass("white");
			$("footer div button").removeClass().addClass("material-symbols-outlined white");
		}if( y == 2){
			$("#layout").removeClass().addClass("blue");
			$("footer div button").removeClass().addClass("material-symbols-outlined blue");
		}if( y == 3){
			$("#layout").removeClass().addClass("green");
			$("footer div button").removeClass().addClass("material-symbols-outlined green");
		}
		
	});
	
	$("h2.main").click(function(){
		$("section.gallery >div").css("width","49vw");
		$("section.gallery >div").css("display","block");
		$("h2.main span").removeClass("list");
		$("footer div").removeClass("active");
		$("section.gallery > div >div").css("overflow","hidden");
		$("section.gallery > div >div").css("left",0);
		$("section.gallery >div h2").css("position","relative");
	});
	
	$("section.gallery >div").click(function(){
		$(this).siblings().css("display","none");
		// $("footer div").addClass("active");
		$(this).css("width","100%");
		$("section.gallery >div h2").css("position","fixed");
		$("section.gallery > div >div").css("overflow","visible");
		// $(this).css("dispaly","inline-block");
		// $(this).css("overflow","auto");
		let z = $(this).index();
		console.log(z);
		$("h2 span").eq(z).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 6).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 12).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 18).addClass("list").siblings().removeClass("list");
	});

	
	/*이미지슬라이드*/
	let sw1 = $(window).width()*(-0.8)-10;
	console.log(sw1);
	let sw2 = $(window).width()*(-0.8)-10;
	
	$("#leftbut").click(function(){
		$(".gallery .slide").stop().animate({ left : 0} , 500 , function(){
			$(".slide").prepend( $(this).children().last() );
			$(".slide").css("left" , sw1);
		});
	});
	
	$("#rightbut").click(function(){
		$(".gallery .slide").stop().animate({ left : sw1 * 2} , 500 , function(){
			$(".slide").append( $(this).children().first() );
			$(".slide").css("left" , sw1 );
		});
	});

}

}).resize(); 

	});
	
	