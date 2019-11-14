function initMap() {

    var work = {lat: 41.881656, lng: -87.630443};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11.1,
        mapTypeControlOptions: {mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']},
        center: work,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#3c0812'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#3c0812'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#3c0812'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#3c0812'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#3c0812'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#3c0812'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6d2f39'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#3c0812'}]
            }
        ]
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        parking: {
            name: 'Parking',
            icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
            name: 'Library',
            icon: iconBase + 'library_maps.png'
        },
        info: {
            name: 'Info',
            icon: iconBase + 'info-i_maps.png'
        }
    };
    var features = [
        {
            position: new google.maps.LatLng(41.881656, -87.630443),
            type: 'info'
        }, {
            position: new google.maps.LatLng(42.006195, -87.669342),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(41.835513, -87.625715),
            type: 'library'
        }
    ];

    // Create markers.
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });


    var marker = new google.maps.Marker({position: work, map: map});
}