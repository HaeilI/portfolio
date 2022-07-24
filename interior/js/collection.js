$(document).ready(function(){
	
	$("footer section div").click(function(){
		$("section.gallery >div").css("width","16%");
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
		$("section.gallery >div").css("width","16%");
		$("section.gallery >div").css("display","block");
		// $("section.gallery >div h2").css("display","block");
		$("h2.main span").removeClass("list");
		$("footer div").removeClass("active");
	});
	
	$("section.gallery >div").click(function(){
		$(this).siblings().css("display","none");
		$("footer div").addClass("active");
		$(this).css("width","200%");
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
	
	
}); // 끝