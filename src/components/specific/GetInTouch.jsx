import {
  Box,
  Button,
  IconButton,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { purpleBtn, textDark, white } from "@/constants/colors";
import {
  EmailOutlined as EmailOutlinedIcon,
  PhoneOutlined as PhoneOutlinedIcon,
  Send as SendIcon,
  SendRounded as SendRoundedIcon,
  TurnRightRounded as TurnRightRoundedIcon,
} from "@mui/icons-material";
import { InputBox } from "../styles/StyledComponents";
import { purpleBtnHover } from "../../constants/colors";

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
        xs: "2vh 0",
        md: "2vh 0 1vh 0",
      }}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"3vh"}
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
              md: "40%",
            },
            height: {
              xs: "60vh",
              md: "100%",
            },
          }}
        >
          <form
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <Box
              height={"100%"}
              width={"80%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={{
                xs: "1vh",
                md: "3vh",
              }}
              padding={{
                xs: "2vh",
                md: "0 10vh"
              }}
            >
              <Box width={"100%"} display={"inline-flex"} gap={"1vh"}>
                <TextField label="Name" sx={{
                  flexGrow: 1
                }}/>
                <TextField label="Email" sx={{
                  flexGrow: 1
                }}/>
              </Box>
              <TextField
                label="Title"
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                multiline
                rows={4}
                label="Description"
                sx={{
                  width: "100%",
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                display: "inline-flex",
                gap: "2vh",
                marginLeft: "auto",
                backgroundColor: purpleBtn,

                "&:hover": {
                  backgroundColor: purpleBtnHover,
                },
              }}
            >
              <Typography variant="body1" sx={{
                display: {
                  xs: "none",
                  md: "inline"
                }
              }}>Send</Typography>
              <SendRoundedIcon
                sx={{
                  rotate: "-45deg",
                }}
              />
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default GetInTouch;
