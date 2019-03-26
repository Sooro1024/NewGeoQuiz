import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider, CardActionArea } from "@material-ui/core";

const DescriptionBox2 = ({HandleAppBarValeuChange}) => {
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
        <CardMedia image={require("./img2.jpg")} style={{ height: "180px" }} />
        <Typography variant='h5'>Guess Capital</Typography>
        <Divider variant='middle' />
        <Typography variant='subtitle1'>
          A capital city is the most important city in a country. It is usually 
          home to its government and administrative entities. Are you able to tell which
          capital belongs to which country? Do you know your world capitals?
          This quiz will test your knowledge of the capital cities of countries across the globe.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DescriptionBox2;