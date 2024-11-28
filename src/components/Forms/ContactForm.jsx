import { purpleBtn, purpleBtnHover } from "@/constants/colors";
import { SendRounded as SendRoundedIcon } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email, title, desc });

    setDesc("");
    setEmail("");
    setName("");
    setTitle("");
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <form
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
        onSubmit={SubmitHandler}
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
            md: "0 5vh",
            lg: "0 10vh",
          }}
        >
          <Box width={"100%"} display={"inline-flex"} gap={"1vh"}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                flexGrow: 1,
              }}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                flexGrow: 1,
              }}
            />
          </Box>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              width: "100%",
            }}
          />
          <TextField
            multiline
            rows={4}
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            sx={{
              width: "100%",
            }}
          />
        </Box>
        <Button
          type="submit"
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
          <Typography
            variant="body1"
            sx={{
              display: {
                xs: "none",
                md: "inline",
              },
            }}
          >
            Send
          </Typography>
          <SendRoundedIcon
            sx={{
              rotate: "-45deg",
            }}
          />
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
