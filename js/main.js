$(document).live('pageinit',function(event){
	$('[data-position=fixed]').fixedtoolbar({ tapToggle:false});
});

$( '#gallery' ).live( 'pageinit',function(event){
	var options = {};
	$("#photo-gal a").photoSwipe(options);
});

$(function() {
	// Also works with: var yourStartLatLng = '13.724732, 100.539279';
	var yourStartLatLng = new google.maps.LatLng(37.533143,127.027308);

	$('#map_canvas').css({height:'400px'}); 


var locationStr = "<div align='center'><h2>Our Location at Seoul</h2><br></div><a href='tel: +82-25483967'>Call us</a><br><a href='http://forrestyoga.co.kr' rel='external'>View Website</a><br><a href='mailto:snao11@hotmail.com'>Email Us</a><br><br><br><a href='directions.php?id=103273' rel='external'>Directions to Our Location</a><br>";

var map_canvas = $('#map_canvas');
map_canvas.gmap(
	{'center' : yourStartLatLng,
	'zoom' : 10,
	//'disableDefaultUI':true,
	'callback':function(){
		var self = this;
		var marker = self.addMarker({ 'position' : yourStartLatLng });
		marker.click(function(){
			self.openInfoWindow({ 'content' : locationStr }, this);
		});
	}
});

});