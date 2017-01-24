contentString = "Interesting information about London Places"


var MapWrapper = function(container, coords, zoom) {
  var container = document.querySelector("#main-map");
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
    });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    console.log("marker added");
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      console.log("map has been clicked!");

      console.log(event);

      console.log(event.latLng.lat(), event.latLng.lng());
      var coordsSelected = {lat: event.latLng.lat(), lng: event.latLng.lng()};

      this.addMarker(coordsSelected);

    }.bind(this));
  },

  addInfoWindow: function(coords){
      var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
      });

    var infoWindow = new google.maps.InfoWindow({
          content: "contentString"
        });
    console.log("infoWindow added");

    marker.addListener("click", function(){
      infoWindow.open(this.googleMap, marker);
    })



  }
}


