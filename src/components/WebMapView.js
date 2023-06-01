import React, {useState, useEffect, useRef} from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";

const WebMapView = ({ setWxState, mapState }) => {
  const mapRef = useRef();
  const [view, setView] = useState();

  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };

  useEffect(() => {
    if (mapState.lon) {
      const newLayer = new GraphicsLayer();
      const point = new Point({
        //Create a point
        longitude: mapState?.lon,
        latitude: mapState?.lat,
      });

      const newPoint = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      });
      newLayer.add(newPoint);
      // Method 1
      // map.add(newLayer);

      // Method 2
      if(view){
        view.graphics.add(newPoint);
      }
      
      setView({
        ...view,
        graphics: {
          ...view?.graphics,
          items: [...view?.graphics?.items],
        },
      });
    }
  }, [mapState]);

  useEffect(() => {
    const map = new Map({
      basemap: "topo-vector",
      ground: "world-elevation",
    });

    const handleDraw = async (event) => {
      if (event.state === "complete" && event.tool === "polyline") {
        const convertedGeo = webMercatorUtils.webMercatorToGeographic(
          event.graphic.geometry
        );
        const points = convertedGeo.paths[0];
        // Business logic
      }
    };

    // load the map view at the ref's DOM node
    const newView = new MapView({
      container: mapRef.current,
      map: map,
      center: [-118, 34],
      zoom: 8,
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    newView.when(() => {
      // Create a new sketch widget
      const sketch = new Sketch({
        view: newView,
        layer: graphicsLayer,
        polylineSymbol: {
          type: "simple-line", // autocasts as new SimpleLineSymbol()
          color: [4, 90, 141],
          width: 2,
          // creationMode: "update"
        },
      });

      // Add the sketch widget to the view
      newView.ui.add(sketch, "top-right");
      sketch.on("create", handleDraw);
      sketch.on("update", handleDraw);
    });
    setView(newView);

    return () => {
      if (view) {
        // destroy the map view
        view.destroy();
      }
    };
  }, []);

  return <div style={{ position: "relative", height: "60%" }} ref={mapRef} />;
};

export default WebMapView;