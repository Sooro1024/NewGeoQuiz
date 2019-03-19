import React from "react";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DescriptionBox = () => {
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
        <CardMedia image={require("./img1.jpg")} style={{ height: "180px" }} />
        <Typography>
          aystex teqst Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora suscipit ut nulla ipsam provident tempore explicabo, officia
          reprehenderit, deserunt at eum? Laboriosam eos sunt ut saepe voluptas
          culpa aliquid dolore.
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

export default DescriptionBox;
