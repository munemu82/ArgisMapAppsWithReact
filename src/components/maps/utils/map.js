import React, { useRef, useEffect } from 'react';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export const createMapView = ( mapRef) => {

  const map = new Map({
    basemap: "streets",
  });
  const view = new MapView({
    container: mapRef,
    map: map,
    center: [-118, 34],
    zoom: 8
  });
  return view;
};