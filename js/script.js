$(window).load(function(){
    $('.menuBlock>ul>li').hover(
        function(){
            $(this).children().css({'background':'#31a7f0'}).find('.nawImg,.bottArr').css({'opacity':'1'});
            $(this).find('.inner').stop().slideDown();
        },
        function(){
            $(this).children().css({'background':'#0093ec'}).find('.nawImg,.bottArr').css({'opacity':'0.3'});
            $(this).find('.inner').stop().slideUp();
        }
    ); //menu hover end
    
    if ( $('#foo2')[0] ){ 
               var carousel = $("#foo2");
                carousel.carouFredSel({
                    width: "100%",
                    height: "auto",
                    pagination: ".pager2",
                    mousewheel: true,
                    responsive: true,
                    circular: false,
                    auto: {
                    timeoutDuration: 5000,
                    },
                    
                    items: {
                    visible: 1,
                    },
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    },
                    scroll: {
                        fx: 'directscroll',
                        pauseOnHover    : true,
                    },
                    onCreate: function () {
                    $(window).on('resize', function () {
                      carousel.parent().add(carousel).height(carousel.children().first().height());
                    }).trigger('resize');
                    
                     $('#foo2 img.slide ').css('visibility', 'visible');
                    }
                });

        }//slider end

        if ( $('.caseForm')[0] ){
            $(".caseForm").validationEngine();

        }    
//map





//*****


});//document ready end

$(document).ready(function(){
    if ( $('#map')[0] ){
var image1 = 'img/marker.png';
google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 6,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(50.444898, 30.493215), 

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4ca5ff"
            },
            {
                "weight": "0.57"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d4e9ff"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d4e9ff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4ca5ff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-62"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(50.444898, 30.493215),
                    map: map,
                    icon: image1,
                    title: 'Snazzy!'
                });
                 var Marker = new google.maps.Marker({
                    position: new google.maps.LatLng(48.453260, 35.064334),
                    map: map,
                    icon: image1
                });
                var Marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.905619, 27.482962),
                    map: map,
                    icon: image1
                });
                var Marker = new google.maps.Marker({
                    position: new google.maps.LatLng(55.802503, 37.546438),
                    map: map,
                    icon: image1
                });
            }
}//end map
});