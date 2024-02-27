import React, { Suspense } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoadingOut from "./LoadingOut";
import { getDocuments } from "../../lib/api";

export default async function DocsLayout({ children }) {
  const docs = await getDocuments();

  return (
    <Grid container
      sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          height: { xs: "auto", md: "100vh" },
          justifyContent: "center",
          alignItems: "start",
          position: "relative"
        }}
      >
        <Suspense fallback={<LoadingOut />}>
          <Sidebar docs={docs} />
        </Suspense>
      </Grid>
      <Grid item xs={12} md={9}
        sx={{
          height: { xs: "calc(100vh - 82px)", md: "100vh" },
          boxSizing: "border-box",
          padding: { xs: "1rem .5rem", md: "1rem 2rem" },
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
