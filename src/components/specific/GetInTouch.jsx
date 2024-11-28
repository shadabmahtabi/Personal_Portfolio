import { purpleBtn, textDark, white } from "@/constants/colors";
import {
  EmailOutlined as EmailOutlinedIcon,
  PhoneOutlined as PhoneOutlinedIcon,
  TurnRightRounded as TurnRightRoundedIcon
} from "@mui/icons-material";
import {
  Box,
  Paper,
  Typography
} from "@mui/material";
import React from "react";
import ContactForm from "@/components/Forms/ContactForm";

const GetInTouch = () => {
  return (
    <Box
      width={"100%"}
      id="contact"
      minHeight={{
        xs: "0vh",
        sm: "0vh",
      }}
      maxHeight={{
        xs: "150vh",
      }}
      fontFamily={"Gilroy"}
      padding={{
        xs: "4vh 0",
        md: "2vh 0 3vh 0",
      }}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"2vh"}
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
        Get In Touch
      </Typography>
      <Typography
        variant="body1"
        color={textDark}
        textAlign={"center"}
        padding={{
          xs: "0 5vh",
          md: "0",
        }}
        fontFamily={"Gilroy"}
      >
        Do you have a project in your mind. Contact me here
      </Typography>
      <Box
        width={"100%"}
        height={{
          xs: "70vh",
          md: "60vh",
        }}
        padding={"0 2vh"}
        display={"flex"}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        justifyContent={"center"}
        gap={"5vw"}
        marginTop={"3vh"}
      >
        <Paper
          elevation={3}
          variant="elevation"
          sx={{
            width: {
              xs: "100%",
              md: "35%",
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
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontFamily={"Gilroy"}
            marginBottom={"1vh"}
          >
            Find me{" "}
            <TurnRightRoundedIcon
              sx={{
                rotate: "90deg",
                fontWeight: "600",
              }}
            />
          </Typography>
          <Typography variant="body1" display={"inline-flex"} gap={"1vh"}>
            <EmailOutlinedIcon /> Email: shadabmanpuri@gmail.com
          </Typography>
          <Typography variant="body1" display={"inline-flex"} gap={"1vh"}>
            <PhoneOutlinedIcon /> +91 7541057155
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          variant="elevation"
          sx={{
            width: {
              xs: "100%",
              md: "50%",
              lg: "40%",
            },
            height: {
              xs: "60vh",
              md: "100%",
            },
          }}
        >
          <ContactForm />
        </Paper>
      </Box>
    </Box>
  );
};

export default GetInTouch;
