import { Grid, Box } from "@mui/material";
import backImage from "../assets/NeuricLabEasyUnrealEngineAI.gif";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { getDocuments } from "../lib/api";
export const metadata = {
  title: 'neuricLab',
  description: 'Easy UnrealEngine AI',
};

export default async function Home() {
  const docs = await getDocuments();

  return (
    <>
      <Navbar />
      <Grid
        style={{
          backgroundImage: `url(${backImage.src})`,
          "object-fit": "cover",
        }}
        sx={{
          width: "100%",
          height: "100vh",
          color: "white",
          overflow: "hidden",
          background: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            item={true}
            sx={{
              display: "flex",
              fontSize: { md: "3rem", xs: "2.3rem" },
              margin: "1rem 0",
            }}
          >
            Easy UnrealEngine AI
          </Box>
          <Grid
            item={true}
            sx={{
              display: "flex",
              "& > div ,& > a > div": {
                borderRadius: "5px",
                border: "1px white solid",
                padding: "1rem .5rem",
                margin: ".5rem",
                "&:hover": {
                  color: "black",
                  background: "white",
                },
              },
            }}
          >
            <Box>Monster AI kit</Box>
            <Link href={"/Docs"}>
              <Box>Documentation</Box>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
