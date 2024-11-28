import { CardTravelRounded as CardTravelRoundedIcon, GroupRounded as GroupRoundedIcon, LinkOutlined as LinkOutlinedIcon, StarRounded as StarRoundedIcon } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { blueGreen, purpleBtn, white } from "@/constants/colors";
import { ProjectLinks } from "@/components/styles/StyledComponents";

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
        lg: "80vh"
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
        <Paper
          elevation={3}
          variant="elevation"
          sx={{
            width: {
              xs: "100%",
              md: "30%",
            },
            height: {
              xs: "50%",
              md: "100%",
            },
            padding: "2vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1vh",
            position: "relative",
            overflow: "hidden",
            transition: "background-color 0.3s, color 0.5s",

            "&:hover": {
              backgroundColor: purpleBtn,
              color: white,
            },
          }}
        >
          <CardTravelRoundedIcon sx={{
            fontSize: "3rem",
            color: blueGreen
          }}/>
          <Typography variant="h4">Completed</Typography>
          <Typography variant="body2">15+ Completed Projects</Typography>
          <ProjectLinks to={"/"}>View All <LinkOutlinedIcon /></ProjectLinks>
        </Paper>
        <Paper
          elevation={3}
          variant="elevation"
          sx={{
            width: {
              xs: "100%",
              md: "30%",
            },
            height: {
              xs: "50%",
              md: "100%",
            },
            padding: "2vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1vh",
            position: "relative",
            overflow: "hidden",
            transition: "background-color 0.3s, color 0.5s",

            "&:hover": {
              backgroundColor: purpleBtn,
              color: white,
            },
          }}
        >
          <GroupRoundedIcon sx={{
            fontSize: "3rem",
            color: blueGreen
          }}/>
          <Typography variant="h4">Clients</Typography>
          <Typography variant="body2">50+ Happy Clients</Typography>
          <ProjectLinks to={"/"}>View All <LinkOutlinedIcon /></ProjectLinks>
        </Paper>
        <Paper
          elevation={3}
          variant="elevation"
          sx={{
            width: {
              xs: "100%",
              md: "30%",
            },
            height: {
              xs: "50%",
              md: "100%",
            },
            padding: "2vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1vh",
            position: "relative",
            overflow: "hidden",
            transition: "background-color 0.3s, color 0.5s",

            "&:hover": {
              backgroundColor: purpleBtn,
              color: white,
            },
          }}
        >
          <StarRoundedIcon sx={{
            fontSize: "3rem",
            color: blueGreen
          }}/>
          <Typography variant="h4">Experienced</Typography>
          <Typography variant="body2">5+ Years Of Experienced</Typography>
          <ProjectLinks to={"/"}>View All <LinkOutlinedIcon /></ProjectLinks>
        </Paper>
      </Box>
    </Box>
  );
};

export default Projects;
