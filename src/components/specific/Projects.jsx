import ProjectCard from "@/components/shared/ProjectCard";
import { blueGreen, purpleBtn } from "@/constants/colors";
import {
  CardTravelRounded as CardTravelRoundedIcon,
  GroupRounded as GroupRoundedIcon,
  StarRounded as StarRoundedIcon
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box
      width={"100%"}
      minHeight={{
        xs: "0vh",
        sm: "0vh",
      }}
      maxHeight={{
        xs: "150vh",
        md: "60vh",
        lg: "80vh",
      }}
      fontFamily={"Gilroy"}
      padding={{
        xs: "2vh 0",
        md: "8vh 0",
      }}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"5vh"}
      id="projects"
    >
      <Typography
        variant="h5"
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
        Projects
      </Typography>
      <Box
        width={"100%"}
        height={{
          xs: "100vh",
          md: "45vh",
        }}
        padding={"0 2vh"}
        display={"flex"}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        justifyContent={"center"}
        gap={"2vw"}
      >
        <ProjectCard
          icon={
            <CardTravelRoundedIcon
              sx={{
                fontSize: "3rem",
                color: blueGreen,
              }}
            />
          }
          title={"Completed"}
          desc={"15+ Completed Projects"}
          link={"/projects"}
        />
        <ProjectCard
          icon={
            <GroupRoundedIcon
              sx={{
                fontSize: "3rem",
                color: blueGreen,
              }}
            />
          }
          title={"Clients"}
          desc={"50+ Happy Clients"}
          link={"/clients"}
        />
        <ProjectCard
          icon={
            <StarRoundedIcon
              sx={{
                fontSize: "3rem",
                color: blueGreen,
              }}
            />
          }
          title={"Experienced"}
          desc={"5+ Years Of Experienced"}
          link={"/experience"}
        />
      </Box>
    </Box>
  );
};

export default Projects;
