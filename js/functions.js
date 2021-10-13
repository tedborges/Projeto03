window.onload = function() {
    
    var map;

    function inicialize() {
        var mapProp = {
            center: new google.maps.LatLng(-12.9704, -38.5124),
            scrollWheel: false,
            zoom:12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat, lng, icon, content) {
        var LatLng = {'lat':lat, 'lng':lng};

        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.open(map, marker);
        });
    }

    inicialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço!</p>';

    addMarker(-12.947192,-38.495467, '',conteudo);

}