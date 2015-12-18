$(document).ready(function(){

	// #1

	$(".badge-info").parent().on({
    	 mouseenter: function () {
      	   $(".badge-info").css("background-color", "#b20000 ");
     	},
     	mouseleave: function () {
        	$(".badge-info").css("background-color", "rgb(119, 119, 119)");
     	}
 	});

	// #2

	$(".panel:even").css("background-color", "#cccccc");

	// #3
	var message = "<span>2016 projection</span>";

	// #4
	$(".progress-bar-success").on({
    	 mouseenter: function () {
      	   $(this).parent().append(message);
     	},
     	mouseleave: function () {
			$("span:last-child").remove();     	
		}
 	});

 	// 5
 	$("td").filter(function(){
   		return $(this).text() === "..";
 	}).each(function(){
   		$(this).parent().remove();
 	});

 	// #6 

 	$( ".btn-primary" ).click(function() {
  	$( "#target" ).click();
	});
});