

var MapWrapper = function(container, coords, zoom) {
  var container = document.querySelector("#main-map");
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
    });

  var searchButton = document.querySelector("button");
  searchButton.onclick =  this.addEdinburghButtonClick;


}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    console.log("marker added");
    return marker;
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      console.log("map has been clicked!");

      console.log(event);

      console.log("coords selected are: " + event.latLng.lat(), event.latLng.lng());
      var coordsSelected = {lat: event.latLng.lat(), lng: event.latLng.lng()};

      this.addMarker(coordsSelected);

    }.bind(this));
  },

  addInfoWindow: function(map, marker, contentString){
    var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });

      marker.addListener("click", function(){
      infoWindow.open(this.googleMap, marker);
    })
  },


  addEdinburghButtonClick: function(event){
    this.googleMap.setCenter({lat: 55.9533, lng: -3.1883 });
    console.log("Edinburgh button clicked");
  
  }

}


