// import React, { Component } from "react";
// import Styles from "./maps.module.css";

// class maps extends Component {
//   render() {
//     return (
//       <>
//         <div className={Styles.wrapper}></div>
//       </>
//     );
//   }
// }

// export default maps;

// import React, { Component } from "react";
// import { render } from "react-dom";

// const locations = [
//   { lat: -31.56391, lng: 147.154312 },
//   { lat: -33.718234, lng: 150.363181 },
//   { lat: -33.727111, lng: 150.371124 },
//   { lat: -33.848588, lng: 151.209834 },
//   { lat: -33.851702, lng: 151.216968 },
//   { lat: -34.671264, lng: 150.863657 },
//   { lat: -35.304724, lng: 148.662905 },
//   { lat: -36.817685, lng: 175.699196 },
//   { lat: -36.828611, lng: 175.790222 },
//   { lat: -37.75, lng: 145.116667 },
//   { lat: -37.759859, lng: 145.128708 },
//   { lat: -37.765015, lng: 145.133858 },
//   { lat: -37.770104, lng: 145.143299 },
//   { lat: -37.7737, lng: 145.145187 },
//   { lat: -37.774785, lng: 145.137978 },
//   { lat: -37.819616, lng: 144.968119 },
//   { lat: -38.330766, lng: 144.695692 },
//   { lat: -39.927193, lng: 175.053218 },
//   { lat: -41.330162, lng: 174.865694 },
//   { lat: -42.734358, lng: 147.439506 },
//   { lat: -42.734358, lng: 147.501315 },
//   { lat: -42.735258, lng: 147.438 },
//   { lat: -43.999792, lng: 170.463352 }
// ];

// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       map: ""
//     };
//   }

//   onScriptLoad() {
//     this.state.map = new window.google.maps.Map(
//       document.getElementById(this.props.id),
//       this.props.options
//     );
//     this.addMarker();
//   }

//   componentDidMount() {
//     if (!window.google) {
//       var s = document.createElement("script");
//       s.type = "text/javascript";
//       s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCANJ80ZERHp5HlMHbV1la0mQ5l7_a7DaI`;
//       var x = document.getElementsByTagName("script")[0];
//       x.parentNode.insertBefore(s, x);

//       var s2 = document.createElement("script");
//       s2.type = "text/javascript";
//       s2.src = `https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js`;
//       var x2 = document.getElementsByTagName("script")[0];
//       x2.parentNode.insertBefore(s2, x2);

//       s.addEventListener("load", e => {
//         this.onScriptLoad();
//       });
//     } else {
//       this.onScriptLoad();
//     }
//   }
//   // Add some markers to the map.
//   addMarker() {
//     const markers = locations.map((location, i) => {
//       return new google.maps.Marker({
//         position: location,
//         icon:
//           "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
//         map: this.state.map
//       });
//     });
//     // Add a marker clusterer to manage the markers.
//     var markerCluster = new MarkerClusterer(this.state.map, markers, {
//       imagePath:
//         "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
//     });
//   }

//   render() {
//     return <div className="map" id={this.props.id} />;
//   }
// }

// export default Map;

import React from "react";
import MarkerClusterer from "@googlemaps/markerclustererplus";

const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "33.93781881397966";
    let lng = "-84.47701522331634";
    // 33.93781881397966, -84.47701522331634
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 9,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Google Maps",
    });

    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
        map: map
      });
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });

    const contentString =
      '<div class="info-window-content"><h2>Found You!!!</h2>' +
      "<p>Look Here</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div style={{ height: `100%` }} ref={mapRef}></div>
    </>
  );
};

function FullScreenMap() {
  return (
    <>
      <div className="content">
        {/* Google Map */}
        <div
          id="map"
          className="map"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
          }}
        >
          <MapWrapper />
        </div>
        {/* Google Map */}
      </div>
    </>
  );
}

export default FullScreenMap;
