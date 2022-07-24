$(document).ready(function(){
	
	$("#next").click(function(){
		$("section.one").toggleClass("active").siblings().toggleClass("active");
		$("#number span.one").toggleClass("active").siblings().toggleClass("active");
	});
	
	$("footer section div").click(function(){
		let y = $(this).index();
		console.log(y);
		
		$("main > section").eq(y).addClass("active").siblings().removeClass("active");
		if( y == 0){
			$("#layout").removeClass().addClass("black");
		}if( y == 1){
			$("#layout").removeClass().addClass("white");
		}if( y == 2){
			$("#layout").removeClass().addClass("blue");
		}if( y == 3){
			$("#layout").removeClass().addClass("green");
		}
		
	});
	
	
}); // 끝