import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider, CardActionArea } from "@material-ui/core";

const DescriptionBox3 = ({HandleAppBarValeuChange}) => {
  return (
    <Card
      style={{
        maxWidth: "30%",
        maxHeight: "80%",
        minHeight: "30%",
        margin: "15px"
      }}
    >
    <CardActionArea onClick={(ev)=>HandleAppBarValeuChange(ev,2)}>
      <CardContent>
        <CardMedia image={require("./img4.jpg")} style={{ height: "180px" }} />
        <Typography variant='h5'>Guess Flag</Typography>
        <Divider variant='middle' />
        <Typography variant='subtitle1'>
          Flags help us to identify different countries around the world.
          A countries flag is made up of symbols, colours and sometimes
          phrases that represent its identity or character. Look at the picture 
          depicting the flag and pick the country that it belongs to. Have fun!
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DescriptionBox3;
