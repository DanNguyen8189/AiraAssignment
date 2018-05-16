var event = new Event("mapSet");
var map;

function process(){
	var name = document.forms["entries"]["name"].value;
	var latitude = document.forms["entries"]["latitude"].value;
	var longitude = document.forms["entries"]["longitude"].value;
	
	if (latitude >= -85 && latitude <= 85 && longitude >= -180 && longitude <= 180){
		document.getElementById("returnString").innerHTML = "Hi " + name + ", your GPS point is valid";
		document.dispatchEvent(event);
	}
	else{
		alert("GPS point is invalid");
	}
}

function myMap() {
	var myCenter = new google.maps.LatLng(51.5, -0.12);
    var mapOptions = {
        center: myCenter,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: myCenter,
		map: map
	});
	
	document.addEventListener("mapSet", function(){
		var latitude = document.forms["entries"]["latitude"].value;
		var longitude = document.forms["entries"]["longitude"].value;
		var newCenter = new google.maps.LatLng(latitude, longitude);
		map.setCenter(newCenter);
		marker.setPosition(newCenter);
	});
}
