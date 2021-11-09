import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export default function Header(props) {
  const headerLinks = [
    {
      linkText: "Add Candidate",
      href: "/addCandidate",
    },
    {
      linkText: "Candidate List",
      href: "/",
    },
  ];

  return (
    <Box>
      <AppBar
        position="fixed"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Toolbar>
          {headerLinks
            .filter((headerLink) => {
              return headerLink.linkText !== props.currentPage;
            })
            .map((headerLink, index) => {
              return (
                <Link href={headerLink.href} key={index}>
                  <a>{headerLink.linkText}</a>
                </Link>
              );
            })}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
