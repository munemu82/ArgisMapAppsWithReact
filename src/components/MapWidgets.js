import React, { useEffect } from "react";
import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";

const MapWidgets = ({ view }) => {
  useEffect(() => {
    view.ui.add(
      new Home({
        view: view,
      }),
      "top-left"
    );

    view.ui.add(
      new ScaleBar({
        view: view,
      }),
      "bottom-left"
    );
  }, []);

  return null;
};

export default MapWidgets;
