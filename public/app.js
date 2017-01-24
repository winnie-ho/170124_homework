var initialize = function(){
  var centre = {lat: 51.5074, lng: -0.1278};
  var buckinghamPalace = {lat:51.501364, lng:-0.141890};
  var tateModern = {lat:51.507595, lng: -0.099356};
  var leicesterSquare = {lat:51.510278, lng: -0.130278﻿};
  var edinburgh = {lat: 55.9533, lng:-3.1883 };
  var mapDiv = document.querySelector("#main-map");

  var mainMap = new MapWrapper(mapDiv, centre, 13);
  var bpMarker = mainMap.addMarker(buckinghamPalace);
  var tateModernMarker = mainMap.addMarker(tateModern);
  var leicesterSquareMarker = mainMap.addMarker(leicesterSquare);


  var bpInfo = '<div class = "window-div"><h3> Buckingham Palace</h3> <p>Buckingham Palace is the London residence and administrative headquarters of the reigning monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality.</p> </br> <img height = "100px" src = "https://www.clinkhostels.com/wp-content/uploads/2014/09/Buckingham-Palace-014.jpg"</p></div>'
  var centreInfo = "London City Centre"
  var tateModernInfo = '<div class = "window-div"><h3>Tate Modern Art Gallery</h3> <p>Tate Modern is a modern art gallery located in London. It is Britains national gallery of international modern art and forms part of the Tate group. </br> <img  height = "100px" src = "https://media.timeout.com/images/102272961/image.jpg"</p></div>'
  var leicesterSquareInfo = '<div class = "window-div"><h3> Leicester Square</h3> <p> Pedestrianised square in the West End of London. It was laid out in 1670 and is named after the contemporary Leicester House, itself named after Robert Sidney, 2nd Earl of Leicester.</p> </br> <img height = "100px" src = "https://i.ytimg.com/vi/YXvB4NJaniU/maxresdefault.jpg"</p></div>'

  mainMap.addClickEvent();

  mainMap.addInfoWindow(mainMap, bpMarker, bpInfo);
  mainMap.addInfoWindow(mainMap, tateModernMarker, tateModernInfo);
  mainMap.addInfoWindow(mainMap, leicesterSquareMarker, leicesterSquareInfo);


  mainMap.addEdinburghButtonClick;

  

}


window.onload = initialize;
