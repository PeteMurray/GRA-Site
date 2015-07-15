/**
 ** Maps **
         **/
function initialize() {

    var mapOptions = {
        center: { lat: 57.40, lng: -2.40},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas-advice'), mapOptions);

    var adviceCentres = [
        ['Huntly Advice Centre', 57.444843, -2.789943, 3],
        ['Inverurie Advice Centre', 57.2830647, -2.3746715, 2],
        ['Ellon Advice Centre', 57.3650986, -2.0705312, 1]
    ];

    var adviceInfo = [
        ('<address>'+
          '<strong>Huntly Advice Centre</strong><br>'+
          'Gordon Street,<br>'+
          'Huntly, AB54 8FG<br>'+
          '<abbr title="Telephone">T:</abbr> 01466 793676<br>'+
          '<em>Open Mon-Fri, 10am–3pm<br>'+
          'Fridays by appointments only</em>'+
        '</address>'),
        ('<address>'+
          '<strong>Inverurie Advice Centre</strong><br>'+
          '49c Market Place,<br>'+
          'Inverurie, AB51 3QA<br>'+
          '<abbr title="Telephone">T:</abbr> 01467 624421<br>'+
          '<em>Open Mon & Thurs, 10am-2pm<br>'+
          'Tuesday by appointment only</em>'+
        '</address>'),
        ('<address>'+
          '<strong>Ellon Advice Centre</strong><br>'+
          'Inverythan House, The Square,<br>'+
          'Ellon, AB41 9JB<br>'+
          '<abbr title="Telephone">T:</abbr> 01358 724425<br>'+
          '<em>Open Mon & Fri, 10am-2pm</em>'+
        '</address>')
    ];

    for (var i = 0; i < adviceCentres.length; i++) {
        var adviceCentre = adviceCentres[i];
        var infowindow = new google.maps.InfoWindow(), marker, i;
        var myLatLng = new google.maps.LatLng(adviceCentre[1], adviceCentre[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: adviceCentre[0],
            zIndex: adviceCentre[3]
        });
        var content = adviceInfo[i];
        var infowindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker,'click',(function(marker,content,infowindow){ 
            return function() {
               infowindow.setContent(content);
               infowindow.open(map,marker);
            };
        })(marker,content,infowindow)); 
    }
}

google.maps.event.addDomListener(window, 'load', initialize);