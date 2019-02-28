console.log("Binded Correctly");




$("#AddButt").on("click", function(event){
	event.preventDefault();
	if ($("#AddInp").val() != ""){
	$("ul").append("<li class= 'cajaElem'></li>");
	$("li").last().append("<div> "+$("#AddInp").val()+"</div>", "<button type='submit' class= 'botoCheck'>check</button> ","<button type='submit' class= 'botoDel'>delete</button>");
	}
	$("#AddInp").val("");
});


$(document).on("click",".botoCheck",function(event){
	event.preventDefault();
	$(this).parent().toggleClass('cajaElem crosscajaElem ')
});

$(document).on("click",".botoDel",function(event){
	event.preventDefault();
	$(this).parent().remove();
});

	
	
	








