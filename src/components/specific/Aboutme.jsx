import {
  DownloadPurpleButton,
  Skills,
  SkillsBox,
} from "@/components/styles/StyledComponents";
import { purpleBtn } from "@/constants/colors";
import { DownloadResume } from "@/utils/feature";
import { FileCopyOutlined as FileCopyOutlinedIcon } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { skills } from "@/constants/sampleData";

const Aboutme = () => {
  return (
    <Box
      data-aos="fade-up"
      width={"100%"}
      minHeight={{
        xs: "100vh",
        sm: "0vh",
      }}
      maxHeight={{
        xs: "150vh",
        md: "150vh",
      }}
      id="about"
      fontFamily={"Gilroy"}
      padding={{
        xs: "4vh 0",
        md: "2vh 0 4vh 0",
      }}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"5vh"}
    >
      <Typography
        variant="h5"
        // width={"100%"}
        // bgcolor={"grey"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontFamily={"inherit"}
        sx={{
          position: "relative",
          padding: "0 1vh",

          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "0%",
            left: "0%",
            width: "100%",
            height: "3px",
            backgroundColor: purpleBtn,
            borderRadius: "1vh",
          },
        }}
      >
        About Me
      </Typography>
      <Box
        width={"100%"}
        height={"80%"}
        display={"flex"}
        alignItems={{
          xs: "center",
          md: "flex-start",
        }}
        justifyContent={"center"}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        gap={{
          xs: "3vh",
          md: "2vw",
        }}
      >
        <Paper
          data-aos="zoom-in"
          data-aos-dalay="700"
          data-aos-offset="200"
          elevation={2}
          variant="elevation"
          sx={{
            width: {
              xs: "95%",
              md: "45%",
            },
            height: {
              xs: "50%",
              md: "90%",
            },
            padding: "2vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            color={"#000"}
            fontFamily={"inherit"}
            fontWeight={"500"}
          >
            My Introduction
          </Typography>
          <Typography
            variant="body1"
            color={"#000"}
            textAlign={"center"}
            fontFamily={"inherit"}
          >
            I am a software developer with 5+ years of experience in developing
            scalable and efficient software solutions. I have experience in
            developing scalable and efficient front-end solutions using React,
            Redux, and other popular libraries and frameworks. I have also
            worked with various UI/UX tools and technologies to create visually
            appealing and user-friendly interfaces. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi, corporis.
          </Typography>
          <DownloadPurpleButton
            onClick={DownloadResume}
            style={{
              marginLeft: "auto",
            }}
          >
            Download CV <FileCopyOutlinedIcon style={{ fontSize: ".9rem" }} />
          </DownloadPurpleButton>
        </Paper>
        <Box
          data-aos="zoom-in"
          data-aos-dalay="700"
          data-aos-offset="200"
          width={{
            xs: "95%",
            md: "45%",
          }}
          minHeight={{
            xs: "45%",
            md: "90%",
          }}
          // bgcolor={lightWhite}
          borderRadius={"2vh"}
          // boxShadow={"2px 2px 5px #e0e0e0"}
          display={"flex"}
          justifyContent={"space-between"}
          padding={{
            xs: "1vh",
            md: "1vw 2vw",
          }}
        >
          <Box height={"100%"} width={"30%"}>
            <Typography
              variant="h6"
              fontWeight={"400"}
              fontFamily={"Gilroy"}
              color="initial"
              height={{
                xs: "5vh",
                md: "13%",
              }}
            >
              Front-end
            </Typography>
            <SkillsBox>
              {skills.frontend.map((skill) => {
                return <Skills key={skill}>{skill}</Skills>;
              })}
            </SkillsBox>
          </Box>
          <Box height={"100%"} width={"30%"}>
            <Typography
              variant="h6"
              fontWeight={"400"}
              fontFamily={"Gilroy"}
              color="initial"
              height={{
                xs: "5vh",
                md: "13%",
              }}
            >
              Back-end
            </Typography>
            <SkillsBox>
              {skills.backend.map((skill) => {
                return <Skills key={skill}>{skill}</Skills>;
              })}
            </SkillsBox>
          </Box>
          <Box height={"100%"} width={"30%"}>
            <Typography
              variant="h6"
              fontWeight={"400"}
              fontFamily={"Gilroy"}
              color="initial"
              height={{
                xs: "5vh",
                md: "13%",
              }}
            >
              Database
            </Typography>
            <SkillsBox>
              {skills.database.map((skill) => {
                return <Skills key={skill}>{skill}</Skills>;
              })}
            </SkillsBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutme;
