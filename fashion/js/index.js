$(document).ready(function(){
	
	$("header button").click(function(){
		if( $("#layout > nav").css("display") == "none" ){
			$("#layout > nav").stop().slideDown();
			$(this).text("close");
		}else{
			$("#layout > nav").stop().slideUp();
			$(this).text("menu");
		}
	});
	
	$("#layout > nav li").click(function(){
		$("#layout > nav").stop().slideUp();
		$("header button").text("menu");
	});
	
});//끝