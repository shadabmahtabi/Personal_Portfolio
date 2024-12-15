import { lazy, useEffect } from "react";
import Applayout from "@/components/layouts/Applayout";
import LandingPage from "@/components/specific/LandingPage";
import Aboutme from "@/components/specific/Aboutme";
import Projects from "@/components/specific/Projects";
import GetInTouch from "@/components/specific/GetInTouch";
import { Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 100,
      mirror: false,
      duration: 500,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <Stack boxSizing={"border-box"} minHeight={"90vh"} overflow={"hidden"}>
      <LandingPage />
      <Aboutme />
      <Projects />
      <GetInTouch />
    </Stack>
  );
};

export default Applayout()(Home);
