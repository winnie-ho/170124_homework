var initialize = function(){
  var centre = {lat: 51.5074, lng: -0.1278};
  var buckinghamPalace = {lat:51.501364, lng:-0.141890};
  var tateModern = {lat:51.507595, lng: -0.099356};
  var mapDiv = document.querySelector("#main-map");


  var mainMap = new MapWrapper(mapDiv, centre, 12);
  var centreMarker = mainMap.addMarker(centre);
  var bpMarker = mainMap.addMarker(buckinghamPalace);
  var tateModernMarker = mainMap.addMarker(tateModern);


  var bpInfo = "Buckingham Palace - where the queen lives!"
  var centreInfo = "London City Centre"
  var tateModernInfo = "Tate Modern Art Gallery"

  mainMap.addClickEvent();

  mainMap.addInfoWindow(mainMap, bpMarker, bpInfo);
  mainMap.addInfoWindow(mainMap, centreMarker, centreInfo);
  mainMap.addInfoWindow(mainMap, tateModernMarker, tateModernInfo);


}


window.onload = initialize;
