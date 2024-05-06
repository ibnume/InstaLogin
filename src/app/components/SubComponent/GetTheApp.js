import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const GetTheApp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ margin: "10px 20px", fontSize: "13px" }}>Get the app.</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: ".6rem",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        <Link
          href="https://apps.apple.com/id/app/instagram/id389801252?l=id"
          target="_blank"
        >
          <Image
            className="cursor-pointer bg-white"
            src="/assets/googlestore.png"
            width={280}
            height={40}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default GetTheApp;
