import React from "react";
import { getDocumentByTitle } from "../../../lib/api";
import Markdown from "../../../components/Markdown/Markdown";
import { Grid } from "@mui/material";
import { notFound } from "next/navigation";

export default async function Docs({ params }) {
  console.log("ddddddas", params);
  const Doc = await getDocumentByTitle(params.slug.join("|"));
  if (!Doc) {
    notFound();
  }
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Markdown>{Doc.content[0].content}</Markdown>
    </Grid>
  );
}
