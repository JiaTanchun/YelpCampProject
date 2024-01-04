mapboxgl.accessToken = mapToken;
//mapboxgl.accessToken = 'pk.eyJ1IjoieGlhb2ZlbmdjaGVuIiwiYSI6ImNscXJpOXUzNTRqYTkyaXBhNzNxd3YxcnUifQ.YT-Im-okD6Nnl0WeNUBxxA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12', // stylesheet location
//    center:[ -74.451482, 40.499053 ],
    center: campground.geometry.coordinates,
    zoom: 8
});

map.addControl(new mapboxgl.NavigationControl(),"top-left");

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)