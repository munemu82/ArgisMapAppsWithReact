import React, { useRef, useEffect } from 'react';
import Map from "@arcgis/core/Map";
import {createMapView} from './utils/map'

 const MapView = () => {
  const mapRef = useRef();

  useEffect( () =>{
    const view = createMapView(mapRef.current);
    return (view && view.destroy())

}, []); // only after initial render
  return <div ref={mapRef}  style={{ height: "100vh", width: "100%" }}/>;
};

export default MapView;