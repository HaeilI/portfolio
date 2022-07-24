$(document).ready(function(){
$(window).resize(function(){ 
if (window.innerWidth > 600 ) {  // 다바이스 크기가 600이상일때 

	
	$("footer section div").click(function(){
		$("section.gallery >div").css("width","16%");
		$("section.gallery >div").css("display","block");
		$("section.gallery >div").css("overflow","hidden");
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
		$("section.gallery >div").css("width","16%");
		$("section.gallery >div").css("display","block");
		$("section.gallery >div").css("overflow","hidden");
		$("h2.main span").removeClass("list");
		$("footer div").removeClass("active");
	});
	
	$("section.gallery >div").click(function(){
		$(this).siblings().css("display","none");
		$("footer >div").addClass("active");
		$(this).css("width","100%");
		$(this).css("overflow","auto");
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
	
	// function rightMove(){
		// $(".arr1").attr("disabled", true);
		// let n1 = $(".orange").index();		
		// n1--;		
		// $("#circle button").eq(  n1 ).addClass("orange").siblings().removeClass("orange");		
		// $("#slide").stop().animate({ left :  0  } , 500 , function(){
				// $( "#slide" ).prepend(    $(this).children().last()    );
				// $( "#slide" ).css("left" , "-800px");
				// autoSlide =  setInterval(  leftMove1  ,   2000);
				// $(".arr1").attr("disabled", false);
		// });
	// }
	

} else {

	
	$("footer section div").click(function(){
		$("section.gallery >div").css("width","49vw");
		$("section.gallery >div").css("display","block");
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
	});
	
	$("section.gallery >div").click(function(){
		$(this).siblings().css("display","none");
		$("footer div").addClass("active");
		$(this).css("dispaly","inline-block");
		let z = $(this).index();
		console.log(z);
		$("h2 span").eq(z).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 6).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 12).addClass("list").siblings().removeClass("list");
		$("h2 span").eq(z + 18).addClass("list").siblings().removeClass("list");
	});
	
	/*이미지슬라이드*/
	$("#leftbut").click(function(){
		
		
	});

}

}).resize(); 

	});
	
	