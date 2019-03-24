import React from "react";
import { Paper, Typography } from "@material-ui/core";

const ResultOfGame = ({ result, gameMod }) => {
  if (gameMod === "0") {
    gameMod = "guess country";
  } else if (gameMod === "1") {
    gameMod = "guess flag";
  } else {
    gameMod = "guess capital";
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={10}
        style={{ minWidth: "400px", maxWidth: "600px", padding: "20px" }}
      >
        <Typography variant="h2">Congratulations!!!</Typography>
        <Typography variant="h4">
          You earned {result} points in {gameMod} mod.
        </Typography>
        <Typography variant="h4">
          Improve your knowledge and try again.
        </Typography>
      </Paper>
    </div>
  );
};

export default ResultOfGame;