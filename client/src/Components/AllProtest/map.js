import React, { useState, useRef, useCallback, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL from 'react-map-gl';


const api_key =
  'pk.eyJ1IjoiYWxwaGFxIiwiYSI6ImNrZzU1OTF5NDAxZnAyd21vNnJhdmlrMHcifQ.LIsHCJC6jxKvnpp1R2szEw';

export default function Mapper(props) {
  // state
  const [viewport, setViewport] = useState({
    latitude: 22.5726,
    longitude: 88.3639,
    zoom: 12
  });

  // refs
  const geocoderContainerRef = useRef();
  const mapRef = useRef();

  // runs when the component mounts
  useEffect(() => {
    ; (async () => {
      const locationResponse = await fetch(
        `https://us1.locationiq.com/v1/search.php?key=pk.1c0b20306647d2b688f1e086e9fbfa9f&format=json&q=${props.loc}`
      );
      const reponseData = await locationResponse.json();

      const lat = Number(Number(reponseData[0].lat).toFixed(4));
      const long = Number(Number(reponseData[0].lon).toFixed(4));

      setViewport((prevState) => ({ ...prevState, latitude: lat, longitude: long }));
    })();
  }, []);

  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

  return (
    <div style={{ marginLeft: '20%' }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: 'absolute', top: 10, left: 15, zIndex: 1, width: '28vw' }}
      />

      <MapGL
        ref={mapRef}
        {...viewport}
        width="35vw"
        height="30vh"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={api_key}
      ></MapGL>
    </div>
  );
}
