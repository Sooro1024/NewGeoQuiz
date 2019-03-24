import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import WorldMap from "../../Data/qartez.json";

const focusContry = {
  default: {
    fill: "#f50057",
    stroke: "#fafafa",
    strokeWidth: 0.1,
    outline: "none"
  },
  hover: {
    fill: "#f50057",
    stroke: "#fafafa",
    strokeWidth: 0.1,
    outline: "none"
  },
  pressed: {
    fill: "#f50057",
    stroke: "#fafafa",
    strokeWidth: 0.1,
    outline: "none"
  }
};

const defContry = {
  default: {
    fill: "#3f51b5",
    stroke: "#fafafa",
    strokeWidth: 0.4,
    outline: "none"
  },
  hover: {
    fill: "#3f51b5",
    stroke: "#fafafa",
    strokeWidth: 0.4,
    outline: "none"
  },
  pressed: {
    fill: "#3f51b5",
    stroke: "#fafafa",
    strokeWidth: 0.4,
    outline: "none"
  }
};

const MapComp = ({ gameArray, progress }) => {
  return (
    <Card
      style={{ maxHeight: "650px", maxWidth: "900px", marginLeft: "20px" }}
      raised
    >
      <CardHeader
        style={{ padding: "16px 16px 0px 16px" }}
        title="Which country is it ?"
        subheader={`Question ${progress + 1}`}
      />
      <CardContent style={{ paddingTop: "0" }}>
        <ComposableMap
          projectionConfig={{
            scale: 180,
            xOffset: -20,
            yOffset: -20,
            rotation: [-11, 0, 0]
          }}
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "auto",
            preserveAspectRatio: "none"
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography={WorldMap} disableOptimization>
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    geography.id !== "ATA" && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        style={
                          gameArray[progress].alpha2Code ===
                          geography.properties.ISO_A2
                            ? focusContry
                            : defContry
                        }
                      />
                    )
                )
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </CardContent>
    </Card>
  )
}

export default MapComp;