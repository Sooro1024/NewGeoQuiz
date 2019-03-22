import React from 'react'
import WorldMap from "../../Data/qartez.json";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { Card } from '@material-ui/core';

const wrapperStyles = {
  display: "flex"
};


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
    strokeWidth: 1,
    outline: "none"
  },
  hover: {
    fill: "#3f51b5",
    stroke: "#fafafa",
    strokeWidth: 1,
    outline: "none"
  },
  pressed: {
    fill: "#3f51b5",
    stroke: "#fafafa",
    strokeWidth: 1,
    outline: "none"
  }
};

const GuessCountry = () => {
  return (
    <Card style={{ maxHeight: "600px", maxWidth: "900px" , marginRight: '20px'}} raised>
    <div style={wrapperStyles}>
      <ComposableMap
        projectionConfig={{
          scale: 200,
          xOffset: -20,
          yOffset: -20,
          rotation: [-11, 0, 0]
        }}
        width={800}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          preserveAspectRatio: "none",
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies geography={WorldMap}>
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={defContry}
                    />
                  )
              )
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
    </Card>
  );
};

export default GuessCountry;