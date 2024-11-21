import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import me from "../../assets/me.png";
import splash from "../../assets/splash.png";
import {
  blueGreen,
  greyBtnColor,
  purpleBtn,
  textDark,
} from "../../constants/colors";
import { Link } from "react-router-dom";
import {
  FileCopyOutlined as FileCopyOutlinedIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import { DownloadPurpleButton } from "../styles/StyledComponents";

const LandingPage = () => {
  return (
    <Box
      width={"100%"}
      height={{
        xs: "calc(95vh - 8vh)",
        md: "calc(95vh - 8vh)"
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={{
        xs: "flex-start",
        md: "center"
      }}
      flexDirection={{
        xs: "column-reverse",
        sm: "row",
      }}
      gap={{
        xs: "5vh",
        md: "3vw"
      }}
    >
      <Box height={{
        xs: "55%",
        md: "100%"
      }} width={{
        xs: "100%",
        md: "55%"
      }} padding={{
        xs: "2vh",
        md: "10vw"
      }}>
        <Stack
          alignItems={"flex-start"}
          justifyContent={"center"}
          height={"100%"}
          // bgcolor={"red"}
        >
          <Button
            variant="contained"
            color="warning"
            size="small"

            sx={{
              marginBottom: "2vh",
            }}
          >
            Shadab Mahtabi
          </Button>
          <Typography
            variant="text"
            color={textDark}
            fontFamily={"gilroy, sans serif"}
            fontWeight={"500"}
            whiteSpace={"nowrap"}
            lineHeight={{
              xs: 1,
              md: "initial"
            }}
            fontSize={{
              xs: "3rem",
              sm: "3.5rem",
              sm: "4rem"
            }}
          >
            I'm{" "}
            <span
              style={{
                color: blueGreen,
              }}
            >
              Youtuber
            </span>
          </Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            perferendis dignissimos nam officiis deleniti nihil consectetur
            assumenda doloribus exercitationem voluptates.
          </p>
          <Box display={"flex"} gap={"1vw"}>
            <Link
              to={"/about"}
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: purpleBtn,
                color: "#fff",
                padding: "1vh 3vh",
                borderRadius: "1vh",

                "&::hover": {
                  backgroundColor: greyBtnColor,
                  color: textDark,
                },
              }}
            >
              Hire Me
            </Link>
            <DownloadPurpleButton to={"/about"}>
              Download CV <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }} />
            </DownloadPurpleButton>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"1vw"}
            marginTop={"4vh"}
          >
            <Link>
              <IconBtn title={"Instagram"} icon={<InstagramIcon />} />
            </Link>
            <Link>
              <IconBtn title={"LinkedIn"} icon={<LinkedInIcon />} />
            </Link>
            <Link>
              <IconBtn title={"Twitter"} icon={<TwitterIcon />} />
            </Link>
            <Link>
              <IconBtn title={"Github"} icon={<GitHubIcon />} />
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box
        height={{
          xs: "35%",
          md: "100%"
        }}
        width={{
          xs: "100%",
          md: "35%"
        }}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box width={{
          xs: "400px",
          md: "450px"
        }} height={{
          xs: "400px",
          md: "450px"
        }}>
          <img
            src={splash}
            alt="Splash Image"
            width={"100%"}
            style={{
              marginTop: "20%",
              backgroundSize: "cover"
            }}
          />
        </Box>
        <Box width={{
          xs: "300px",
          md: "400px"
        }} height={{
          xs: "300px",
          md: "400px"
        }} sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}>
          <img
            src={me}
            alt="Me Image"
            width={"100%"}
            style={{
              backgroundSize: "cover"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const IconBtn = ({ title, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        size="small"
        sx={{
          color: textDark,
          // bgcolor: greyBtnColor,
          padding: ".6vw",
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default LandingPage;
