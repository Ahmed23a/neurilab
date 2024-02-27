import React, { Suspense } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoadingOut from "./LoadingOut";

export default function DocsLayout({ children }) {
  return (
    <Grid container
      sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
      <Grid
        item
        xs={3}
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Suspense fallback={<LoadingOut />}>
          <Sidebar />
        </Suspense>
      </Grid>
      <Grid item xs={9}
        sx={{
          height: "100vh",
          boxSizing: "border-box",
          padding: "1rem 2rem",
          background: "#cfdae9",
          overflow: "hidden"
        }}

      >
        <Grid sx={{
          height: "calc(100vh - 32px)",
          overflowY: "auto",
          justifyContent: "center",
          alignItems: "start",
          background: "#cfdae9",

        }}
          className="scrollBar"
          id="scrollBar">
          {children}
        </Grid>

      </Grid>
    </Grid >
  );
}
