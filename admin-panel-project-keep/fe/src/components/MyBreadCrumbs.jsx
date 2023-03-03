import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MyBreadCrumbs({ link }) {
  console.log(link);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {link.map((a, index) => {
        if (link.length == index + 1) {
          return <Typography color="text.primary">{a.linkName}</Typography>;
        } else {
          return (
            <Link underline="hover" color="inherit" href={a.link}>
              {a.linkName}
            </Link>
          );
        }
      })}
    </Breadcrumbs>
  );
}
