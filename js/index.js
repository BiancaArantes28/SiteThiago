$(".project-info").mouseover(function(){
	$(this).css({"opacity": "100"});
});
$(".project-info").mouseout(function(){
	$(this).css({"opacity": "0"});
});
$(".navbar-toggler-icon").click(function(){
	if(!$(".navbar-collapse").hasClass("show")){
		$("#shippedtitles").css({"margin-top": "362px"});
	}else{
		$("#shippedtitles").css({"margin-top": "90px"});
	}		
});
$(".nav-link").click(function(){
	$(".navbar-collapse").removeClass("show");
	$("#shippedtitles").css({"margin-top": "90px"});
});