console.log("Hello World!");

$(document).ready(function(){
	// function initMap() {
	// 	var uluru = {lat: -25.363, lng: 131.044};
	// 	var map = new google.maps.Map(document.getElementById('map'), {
	// 	  zoom: 4,
	// 	  center: uluru
	// 	});
	// 	var marker = new google.maps.Marker({
	// 	  position: uluru,
	// 	  map: map
	// 	});
	// }
	console.log($('#map'));
});

document.onload(
	$('nav div a.nav-link').click(
		function() { 
			$('nav div a.active').removeClass("active"); 
			$(this).addClass("active"); 
		}
	);
);