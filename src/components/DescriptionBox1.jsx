import React from "react";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DescriptionBox1 = () => {
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
        <CardMedia image={require("./img3.jpg")} style={{ height: "180px" }} />
        <Typography>
          <h3>Guess Country</h3>
          How many countries on our globe? Do you know them? And can you determine
          from their outlines - what kind of countries are these? You will be offered
          a picture depicting the outlines of the country on the world map and four 
          possible answers. Your task is to choose the right answer.
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

export default DescriptionBox1;
