import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider, CardActionArea } from "@material-ui/core";

const DescriptionBox1 = ({HandleAppBarValeuChange}) => {
  return (
    <Card
      style={{
        maxWidth: "30%",
        maxHeight: "80%",
        minHeight: "30%",
        margin: "15px"
      }}
    >
    <CardActionArea onClick={(ev)=>HandleAppBarValeuChange(ev,1)}>
      <CardContent>
        <CardMedia image={require("./img3.jpg")} style={{ height: "180px" }} />
        <Typography variant='h5'>Guess Country</Typography>
        <Divider variant='middle' />
        <Typography variant='subtitle1'>
          How many countries on our globe? Do you know them? And can you determine
          from their outlines - what kind of countries are these? You will be offered
          a picture depicting the outlines of the country on the world map and four 
          possible answers. Your task is to choose the right answer.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DescriptionBox1;
