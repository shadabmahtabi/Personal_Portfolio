import { Box, styled } from "@mui/material";
import {
  blueGreen,
  greyBtnColor,
  purpleBtn,
  purpleBtnHover,
  textDark,
  white,
} from "../../constants/colors";
import { Link } from "react-router-dom";

export const CurvedButton = styled("button")({
  border: "none",
  outline: "none",
  padding: "1.5vh 3vh",
  borderRadius: "1vh",
  backgroundColor: `${greyBtnColor}`,
  fontSize: ".9rem",
  cursor: "pointer",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",
  fontFamily: "gilroy",
  fontWeight: "500",
  transition: ".5s",
  "&:hover": {
    backgroundColor: purpleBtn,
    color: white,
  },
});

export const DownloadPurpleButton = styled(Link)({
  padding: "1vh 3vh",
  borderRadius: "1vh",
  backgroundColor: `${greyBtnColor}`,
  // fontSize: ".9rem",
  cursor: "pointer",
  color: textDark,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  fontFamily: "gilroy",
  fontWeight: "500",
  transition: ".5s",
  "&:hover": {
    backgroundColor: purpleBtn,
    color: white,
  },
});

export const NavLinks = styled(Link)({
  width: "80%",
  height: "10vh",
  // fontSize: ".9rem",
  cursor: "pointer",
  color: textDark,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",
  fontFamily: "gilroy",
  fontWeight: "500",
  transition: ".5s",
  borderRadius: "1vh",
  fontSize: "1.3rem",
  "&:hover": {
    backgroundColor: purpleBtn,
    color: white,
  },
});

export const SkillsBox = styled(Box)({
  maxHeight: "88%",
  maxWidth: "100%",
  // backgroundColor: "yellow",
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "1vh",
  userSelect: "none",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "3px",
    height: "3px"
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "8px",
  },
});

export const Skills = styled(Box)({
  padding: ".5vh 1vh",
  color: white,
  backgroundColor: purpleBtn,
  fontSize: ".85rem",
  borderRadius: "1vh",
  "&:hover": {
    backgroundColor: purpleBtnHover,
  }
});
