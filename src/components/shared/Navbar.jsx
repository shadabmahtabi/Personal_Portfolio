import {
  FileCopyOutlined as FileCopyOutlinedIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import { blueGreen, textDark, purpleBtn } from "@/constants/colors";
import { CurvedButton } from "@/components/styles/StyledComponents";
import Sidebar from "@/components/dialogs/Sidebar.jsx";
import { DownloadResume } from "@/utils/feature";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const sidebarHandler = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <Box
      data-aos="fade-down"
      data-aos-duration="400"
      sx={{ flexGrow: 1 }}
      height={"10vh"}
      id="home"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: {
            xs: "space-between",
            md: "space-around",
          },
          alignItems: "flex-end",
          padding: {
            xs: "0 5vw",
            md: "0vw",
          },
        }}
      >
        <Typography
          variant="h6"
          color={blueGreen}
          fontFamily={"Gilroy"}
          sx={{
            userSelect: "none",
          }}
        >
          Shadab Mahtabi.
        </Typography>
        <Box
          display={{
            xs: "none",
            md: "flex",
          }}
          gap={"1.5vw"}
        >
          <Box
            sx={{
              fontWeight: "500",
              opacity: 0.7,
              transition: ".3s",
              position: "relative",
              padding: "0 .5vw",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "2px",
                borderRadius: "10px",
                backgroundColor: purpleBtn,
                width: "100%",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },

              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <a
              href="#home"
              style={{
                textDecoration: "none",
                color: textDark,
              }}
            >
              Home
            </a>
          </Box>
          <Box
            sx={{
              fontWeight: "500",
              opacity: 0.7,
              transition: ".3s",
              position: "relative",
              padding: "0 .5vw",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "2px",
                borderRadius: "10px",
                backgroundColor: purpleBtn,
                width: "100%",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },

              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <a
              href="#about"
              style={{
                textDecoration: "none",
                color: textDark,
              }}
            >
              About
            </a>
          </Box>
          <Box
            sx={{
              fontWeight: "500",
              opacity: 0.7,
              transition: ".3s",
              position: "relative",
              padding: "0 .5vw",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "2px",
                borderRadius: "10px",
                backgroundColor: purpleBtn,
                width: "100%",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },

              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <a
              href="#projects"
              style={{
                textDecoration: "none",
                color: textDark,
                fontWeight: "500",
              }}
            >
              Projects
            </a>
          </Box>
          <Box
            sx={{
              fontWeight: "500",
              opacity: 0.7,
              transition: ".3s",
              position: "relative",
              padding: "0 .5vw",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "2px",
                borderRadius: "10px",
                backgroundColor: purpleBtn,
                width: "100%",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },

              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: textDark,
                fontWeight: "500",
              }}
            >
              Contact
            </a>
          </Box>
        </Box>
        <Box display={{ xs: "none", md: "block" }}>
          <CurvedButton onClick={DownloadResume}>
            Download CV <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }} />
          </CurvedButton>
        </Box>
        <Box display={{ xs: "block", md: "none" }}>
          <IconBtn
            title={"Menu"}
            icon={<MenuIcon />}
            onClick={sidebarHandler}
          />
        </Box>
      </Toolbar>

      {isSidebar && (
        <Suspense fallback={<Backdrop open />}>
          <Sidebar setIsSidebar={setIsSidebar} />
        </Suspense>
      )}
    </Box>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Navbar;
