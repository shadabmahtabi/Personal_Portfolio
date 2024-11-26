import { Dialog, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import { DownloadPurpleButton, NavLinks } from "../styles/StyledComponents";
import { blueGreen } from "../../constants/colors";
import { FileCopyOutlined as FileCopyOutlinedIcon } from "@mui/icons-material";

const Sidebar = ({ setIsSidebar }) => {
  return (
    <Drawer open onClose={() => setIsSidebar(false)}>
      <Typography
        variant="h6"
        color={blueGreen}
        height={"10vh"}
        padding={"3vh"}
        fontFamily={"Gilroy"}
        sx={{
          userSelect: "none",
        }}
      >
        Shadab Mahtabi.
      </Typography>
      <Stack
        width={"80vw"}
        height={"90vh"}
        gap={"2vh"}
        alignItems={"center"}
        paddingTop={"1vh"}
      >
        <NavLinks to={"#home"}>Home</NavLinks>
        <NavLinks to={"#about"}>About</NavLinks>
        <NavLinks to={"#projects"}>Projects</NavLinks>
        <NavLinks to={"#contact"}>Contact</NavLinks>
        <DownloadPurpleButton
          to={"/about"}
        >
          Download CV <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }} />
        </DownloadPurpleButton>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
