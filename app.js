//Install express server
const express = require('express');
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + 'dist'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

console.log("Hello World!");

// $(document).ready(function(){
// 	// function initMap() {
// 	// 	var uluru = {lat: -25.363, lng: 131.044};
// 	// 	var map = new google.maps.Map(document.getElementById('map'), {
// 	// 	  zoom: 4,
// 	// 	  center: uluru
// 	// 	});
// 	// 	var marker = new google.maps.Marker({
// 	// 	  position: uluru,
// 	// 	  map: map
// 	// 	});
// 	// }
// 	console.log($('#map'));
// });

// document.onload(
// 	$('nav div a.nav-link').click(
// 		function() { 
// 			$('nav div a.active').removeClass("active"); 
// 			$(this).addClass("active"); 
// 		}
// 	);
// );

