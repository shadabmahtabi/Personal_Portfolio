import me from "@/assets/me.webp";
import splash from "@/assets/splash.webp";
import { DownloadPurpleButton } from "@/components/styles/StyledComponents";
import {
  blueGreen,
  purpleBtn,
  purpleBtnHover,
  textDark,
  white,
} from "@/constants/colors";
import { DownloadResume } from "@/utils/feature";
import {
  FileCopyOutlined as FileCopyOutlinedIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const LandingPage = () => {
  const textSpan = useRef(null);

  useEffect(() => {
    const typed = new Typed(textSpan.current, {
      strings: [
        "Developer",
        "Youtuber",
        "Designer",
        // "Engineer",
        // "Problem Solver",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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
              data-aos="fade-right"
              data-aos-delay="400"
              // data-aos-duration="500"
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
              data-aos="fade-left"
              data-aos-delay="500"
              // data-aos-duration="500"
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
                ref={textSpan}
              ></span>
            </Typography>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              // data-aos-duration="500"
            >
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
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-offset="50"
                // data-aos-duration="500"
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
              <DownloadPurpleButton
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-offset="50"
                onClick={DownloadResume}
              >
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
              <Link
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-offset="50"
              >
                <IconBtn
                  title={"Instagram"}
                  icon={<InstagramIcon />}
                  link={import.meta.env.VITE_INSTA_LINK}
                />
              </Link>
              <Link
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-offset="50"
              >
                <IconBtn
                  title={"LinkedIn"}
                  icon={<LinkedInIcon />}
                  link={import.meta.env.VITE_LINKEDIN_LINK}
                />
              </Link>
              <Link
                data-aos="zoom-in"
                data-aos-delay="700"
                data-aos-duration="800"
                data-aos-offset="50"
              >
                <IconBtn
                  title={"Twitter"}
                  icon={<TwitterIcon />}
                  link={import.meta.env.VITE_X_LINK}
                />
              </Link>
              <Link
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-offset="50"
              >
                <IconBtn
                  title={"Github"}
                  icon={<GitHubIcon />}
                  link={import.meta.env.VITE_GITHUB_LINK}
                />
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-delay="900"
          data-aos-duration="500"
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
      x
    </Box>
  );
};

const IconBtn = ({ title, icon, link }) => {
  const HandleLink = (link) => {
    // console.log(link);
    window.open(link, "_self");
  };
  
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
        onClick={() => HandleLink(link)}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default LandingPage;
