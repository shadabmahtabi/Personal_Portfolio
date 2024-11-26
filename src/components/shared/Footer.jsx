import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { blueGreen, textDark } from "@/constants/colors";

const Footer = () => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} height={"15vh"} gap={"1vh"}>
      <Typography variant="h5" color={blueGreen} fontFamily={"Gilroy"}>
        Shadab Mahtabi.
      </Typography>
      <Box display={"flex"} gap={{
        xs: "2vh",
        md: "1vw",
      }}>
          <a href="#home" style={{
            textDecoration: "none", 
            color: textDark
          }}>Home</a>
          <a href="#about" style={{
            textDecoration: "none", 
            color: textDark
          }}>About</a>
          <a href="#projects" style={{
            textDecoration: "none", 
            color: textDark
          }}>Projects</a>
          <a href="#contact" style={{
            textDecoration: "none", 
            color: textDark
          }}>Contact</a>
        </Box>
    </Box>
  );
};

export default Footer;
