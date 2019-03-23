import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import WorldMap from "../../Data/qartez1.json";

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

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // FocusCountry: 0,
    };
  }



//   shouldComponentUpdate(nextProps){
//     return this.props.progress !== nextProps.progress ? true : false 
//   }

//   componentDidMount(){
//       this.setState({FocusCountry: this.props.gameArray[this.props.progress].alpha2Code})
//   }

  // componentDidUpdate(prevProps){
  //     if(this.props.progress !== prevProps.progress){
  //       this.forceUpdate()
  //   }
  // }


  render() {
    const { gameArray, progress } = this.props;
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
              yOffset: -42,
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
    );
  }
}