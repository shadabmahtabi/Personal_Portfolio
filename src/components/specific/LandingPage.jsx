import me from "@/assets/me.png";
import splash from "@/assets/splash.png";
import { DownloadPurpleButton } from "@/components/styles/StyledComponents";
import {
  blueGreen,
  purpleBtn,
  purpleBtnHover,
  textDark,
  white
} from "@/constants/colors";
import { DownloadResume } from "@/utils/feature";
import {
  FileCopyOutlined as FileCopyOutlinedIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box
      width={"100%"}
      height={{
        xs: "calc(90vh - 8vh)",
        md: "calc(100vh - 8vh)",
      }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{
          xs: "flex-start",
          md: "center",
        }}
        flexDirection={{
          xs: "column-reverse",
          sm: "row",
        }}
        gap={{
          xs: "5vh",
          md: "3vw",
        }}
      >
        <Box
          height={{
            xs: "55%",
            md: "100%",
          }}
          width={{
            xs: "100%",
            md: "55%",
          }}
          padding={{
            xs: "2vh",
            md: "10vw",
          }}
        >
          <Stack
            alignItems={"flex-start"}
            justifyContent={"center"}
            height={"100%"}
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
                md: "initial",
              }}
              fontSize={{
                xs: "3rem",
                sm: "3.5rem",
                md: "4.5rem",
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
            <Box
              width={{
                xs: "100%",
                md: "40vw",
              }}
              display={"flex"}
              justifyContent={{
                xs: "center",
                sm: "flex-start",
              }}
              gap={{
                xs: "2vh",
                sm: "1vw",
              }}
            >
              <Box
                component={Link}
                to={"/about"}
                sx={{
                  textDecoration: "none",
                  backgroundColor: purpleBtn,
                  color: white,
                  padding: "1vh 3vh",
                  borderRadius: "1vh",
                  fontFamily: "Gilroy",
                  fontWeight: "400",
                  transition: "background-color 0.3s",

                  "&:hover": {
                    backgroundColor: purpleBtnHover,
                  },
                }}
              >
                Hire Me
              </Box>
              <DownloadPurpleButton onClick={DownloadResume}>
                Download CV{" "}
                <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }} />
              </DownloadPurpleButton>
            </Box>
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={{
                xs: "space-evenly",
                sm: "flex-start",
              }}
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
            md: "100%",
          }}
          width={{
            xs: "100%",
            md: "45%",
          }}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            width={{
              xs: "400px",
              md: "100%",
            }}
            height={{
              xs: "400px",
              md: "100%",
            }}
          >
            <img
              src={splash}
              alt="Splash Image"
              width={"100%"}
              style={{
                marginTop: "20%",
                backgroundSize: "cover",
              }}
            />
          </Box>
          <Box
            width={{
              xs: "300px",
              md: "500px",
            }}
            height={{
              xs: "300px",
              md: "500px",
            }}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <img
              src={me}
              alt="Me Image"
              width={"100%"}
              style={{
                backgroundSize: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* <Box
        width={"100%"}
        height={"8%"}
        display={{
          xs: "none",
          sm: "flex"
        }}
        // alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          height={{
            xs: "70%",
            md: "80%"
          }}
          width={{
            xs: "25vh",
            md: "30vh"
          }}
          bgcolor={greyBtnColor}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1vh"}
          color={textDark}
          borderRadius={"5vh"}
          // border={"1px solid #000"}
          boxShadow={"1px 1px 3px #e3e3e3"}
        >
          Scroll Down <MouseIcon />
        </Box>
      </Box> */}
    </Box>
  );
};

const IconBtn = ({ title, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        size={"small"}
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
