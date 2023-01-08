import React, { useEffect, useState, useRef } from "react";
import Graphic from "@arcgis/core/Graphic";

import Faker from "faker";

const MapGraphics = ({ view }) => {
  const formRef = useRef();
  const [state, setState] = useState({
    name: "",
    address: "",
  });
  Faker.locale = "ar";

  let loactions = [];
  for (let index = 0; index < 10; index++)
    loactions.push({
      name: Faker.name.findName(),
      address: Faker.address.streetAddress(),
      latitude: Faker.address.latitude(),
      longitude: Faker.address.longitude(),
    });

  useEffect(() => {
    const glResult1 = view.map.findLayerById("glResult1");

    if (glResult1) {
      loactions.map((location) => {
        const graph = new Graphic({
          geometry: {
            type: "point",
            latitude: location.latitude,
            longitude: location.longitude,
          },
          symbol: {
            type: "simple-marker",
            color: "red",
            size: 14,
          },
          attributes: {
            title: location.name,
            content: location.address,
          },
        });
        glResult1.add(graph);
      });
    }

    view.ui.add(formRef.current, "top-right");
    view.on("click", (event) => {
      view.hitTest(event).then((resp) => {
        if (resp.results.length > 0) {
          setState({
            name: resp.results[0].graphic.attributes.title,
            address: resp.results[0].graphic.attributes.content,
          });
        }
      });
    });
  }, []);

  return (
    <div
      ref={formRef}
      className="esri-widget"
      style={{ margin: 5, padding: 5 }}
    >
      <input type="text" value={state.name} className="esri-input" />
      <br />
      <br />
      <input type="text" value={state.address} className="esri-input" />
    </div>
  );
};

export default MapGraphics;
