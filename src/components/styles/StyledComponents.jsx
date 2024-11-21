import { styled } from "@mui/material";
import { blueGreen, greyBtnColor, purpleBtn, textDark } from "../../constants/colors";
import { Link } from "react-router-dom";

export const CurvedButton = styled('button')({
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
        color: "#fff"
    }
})

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
        color: "#fff"
    }
})