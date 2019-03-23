import React from "react";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DescriptionBox2 = () => {
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
        <CardMedia image={require("./img2.jpg")} style={{ height: "180px" }} />
        <Typography>
          <h3>Guess Capital</h3>  
          A capital city is the most important city in a country. It is usually 
          home to its government and administrative entities. Are you able to tell which
          capital belongs to which country? Do you know your world capitals?
          This quiz will test your knowledge of the capital cities of countries across the globe.
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

export default DescriptionBox2;