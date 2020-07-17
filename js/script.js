/*---------------preloader------------------*/
$(window).on('load', function () {
	$("#preloader").fadeOut("slow");
});



var sidebar = document.getElementById("sidebar");
 

function toggleSidebar() {
	document.getElementById("sidebar").classList.toggle("mini-sidebar");
	document.querySelector(".page-wrapper").classList.toggle("m-l-60");
}


$("#sidebar").mouseover(function(){
	event.stopPropagation();
	if($("#sidebar").hasClass('mini-sidebar')) {
	sidebar.classList.remove("mini-sidebar");
	document.querySelector(".page-wrapper").classList.remove("m-l-60");
}
	});





var $slimScrolls = $('.slimscroll');

if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}



