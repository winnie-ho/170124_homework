var initialize = function(){
  var centre = {lat: 51.5074, lng: -0.1278};
  var buckinghamPalace = {lat:51.501364, lng:-0.141890};
  var tateModern = {lat:51.507595, lng: -0.099356};
  var mapDiv = document.querySelector("#main-map");


  var mainMap = new MapWrapper(mapDiv, centre, 12);
  mainMap.addMarker(centre);
  var bpMarker = mainMap.addMarker(buckinghamPalace);
  mainMap.addMarker(tateModern);

  mainMap.addClickEvent();

  mainMap.addInfoWindow(buckinghamPalace);
  // mainMap.addMarkerClickEvent(mainMap, bpMarker);


}


window.onload = initialize;
