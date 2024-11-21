import { FileCopyOutlined as FileCopyOutlinedIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import React from "react";
import { blueGreen, textDark } from "../../constants/colors";
import { CurvedButton } from "../styles/StyledComponents";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} height={"10vh"} id="home">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: {
            xs: "space-between",
            md: "space-around"
          },
          alignItems: "flex-end",
          padding: {
            xs: "0 5vw",
            md: "0vw"
          }
        }}
      >
        <Typography variant="h6" color={blueGreen} sx={{
          userSelect: "none"
        }}>
          Shadab Mahtabi.
        </Typography>
        <Box display={{
          xs: "none",
          md: "flex"
        }} gap={"1vw"}>
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
        <Box display={{ xs: "none", md: "block" }}><CurvedButton>Download CV <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }}/></CurvedButton></Box>
        <Box display={{ xs: "block", md: "none" }}><IconBtn title={"Menu"} icon={<MenuIcon />}/></Box>
      </Toolbar>
    </Box>
  );
};

const IconBtn = ({title, icon, onClick}) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Navbar;
