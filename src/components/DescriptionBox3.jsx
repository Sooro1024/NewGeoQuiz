import React from "react";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DescriptionBox3 = () => {
  return (
    <Card
      style={{
        maxWidth: "30%",
        maxHeight: "80%",
        minHeight: "30%",
        margin: "15px"
      }}
    >
      <CardContent>
        {/* <CardActionArea> */}
        <CardMedia image={require("./img4.jpg")} style={{ height: "180px" }} />
        <Typography>
            <h3>Guess Flag</h3>
          Flags help us to identify different countries around the world.
          A countries flag is made up of symbols, colours and sometimes
          phrases that represent its identity or character. Look at the picture 
          depicting the flag and pick the country that it belongs to. Have fun!
        </Typography>
        <CardActions />
        {/* </CardActionArea> */}
        {/* <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: "40%", marginTop: "5px" }}
        >
          Play
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default DescriptionBox3;