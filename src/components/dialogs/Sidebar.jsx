import { DownloadPurpleButton } from "@/components/styles/StyledComponents.jsx";
import { purpleBtn, textDark, white } from "@/constants/colors";
import { blueGreen } from "@/constants/colors.js";
import { FileCopyOutlined as FileCopyOutlinedIcon } from "@mui/icons-material";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import { DownloadResume } from "@/utils/feature";

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
        <Box
          sx={{
            width: "80%",
            height: "7vh",
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
          }}
        >
          <a
            href={"#home"}
            style={linkStyles}
            onClick={() => setIsSidebar(false)}
          >
            Home
          </a>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "7vh",
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
          }}
        >
          <a
            href={"#about"}
            style={linkStyles}
            onClick={() => setIsSidebar(false)}
          >
            About
          </a>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "7vh",
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
          }}
        >
          <a
            href={"#projects"}
            style={linkStyles}
            onClick={() => setIsSidebar(false)}
          >
            Projects
          </a>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "7vh",
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
          }}
        >
          <a
            href={"#contact"}
            style={linkStyles}
            onClick={() => setIsSidebar(false)}
          >
            Contact
          </a>
        </Box>
        <DownloadPurpleButton to={"/about"} onClick={DownloadResume}>
          Download CV <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }} />
        </DownloadPurpleButton>
      </Stack>
    </Drawer>
  );
};

let linkStyles = {
  height: "100%",
  width: "100%",
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Sidebar;
