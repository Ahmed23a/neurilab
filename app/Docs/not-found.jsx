import { Grid } from "@mui/material";
import React from "react";

export default function Notfound() {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "inherit",
        fontSize: "2rem",
      }}
    >
      404 Not-found
    </Grid>
  );
}
