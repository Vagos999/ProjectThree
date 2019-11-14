function initMap() {

    var uluru = {lat: 41.881656, lng: -87.630443};

    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: uluru});

    var marker = new google.maps.Marker({position: uluru, map: map});
}