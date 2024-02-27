"use client";
import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ExpandMore } from "@mui/icons-material";

export default function Expand({ doc, menuOpen, setmenuOpen }) {
  const [navItems, setNavItems] = useState(doc);
  const [expanded, setExpanded] = useState([]);
  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  return (
    <>
      <TreeView
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        expanded={expanded}
        onNodeToggle={handleToggle}
        sx={{
          color: "inherit",
          height: "calc(100vh - 82px)",
          display: { xs: menuOpen ? "block" : "none", md: "block" },
          padding: { xs: "1rem", md: "0" },
        }}
      >
        {Object.keys(navItems).map((category) => (
          <Box key={category}>
            <Grid container>
              <Grid item xs={6}>
                <Box sx={{ my: "1rem" }}>{category}</Box>
              </Grid>
              <Grid
                item
                xs={6}
                container
                justifyContent="flex-end"
                alignContent={"center"}
              ></Grid>
            </Grid>
            <RenderTree
              nodes={navItems[category]}
              setmenuOpen={setmenuOpen}
              menuOpen={menuOpen}
            />
          </Box>
        ))}
      </TreeView>
    </>
  );
}

function RenderTree({ nodes, setmenuOpen, menuOpen }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      {nodes?.map((item) => (
        <Link
          key={item._id}
          style={{ textDecoration: "none", color: "white" }}
          href={`/Docs/${item.titleId?.replace(/\?/g, "%3F")}`}
          onClick={() => {
            menuOpen
              ? setmenuOpen((prev) => {
                  !prev;
                })
              : "";
          }}
        >
          <TreeItem
            key={item._id}
            nodeId={item._id}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Quicksand",
                }}
              >
                <Box
                  sx={{
                    my: "0.4rem",
                  }}
                >
                  {item.title}
                </Box>
              </Box>
            }
            sx={{
              color:
                pathname == `/Docs/${item.titleId?.replace(/\?/g, "%3F")}`
                  ? "#FFFFFF"
                  : "#6b7594",
            }}
          >
            {item.children && item.children.length > 0 ? (
              <RenderTree nodes={item.children} />
            ) : (
              ""
            )}
          </TreeItem>
        </Link>
      ))}
    </>
  );
}
