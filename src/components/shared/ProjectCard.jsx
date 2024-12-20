import { ProjectLinks } from "@/components/styles/StyledComponents";
import { purpleBtn, white } from "@/constants/colors";
import { LinkOutlined as LinkOutlinedIcon } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";

const ProjectCard = ({ icon, title, desc, link, aosDelay }) => {
  return (
    <Paper
      data-aos="fade-down-right"
      data-aos-delay={aosDelay}
      data-aos-offset="100"
      elevation={2}
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

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: purpleBtn,
          zIndex: 0,
          transform: "scaleY(0)",
          transformOrigin: "top",
          transition: "transform .5s ease-in-out",
        },

        "&:hover::before": {
          transform: "scaleY(1)",
          transformOrigin: "bottom",
        },

        "& > *": {
          zIndex: 1,
        },

        "&:hover": {
          color: white,
        },
      }}
    >
      {icon}
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2">{desc}</Typography>
      <ProjectLinks to={link}>
        View All <LinkOutlinedIcon />
      </ProjectLinks>
    </Paper>
  );
};

export default ProjectCard;
