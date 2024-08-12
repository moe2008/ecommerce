import React from "react";
import Footer from "../components/UI/Footer";
import MobileNavbar from "../components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "../components/Navbar/DesktopNavbar/DesktopNavbar";
import Hero from "../components/Sections/Hero/Hero";
import ServiceSection from "../components/Sections/Service/ServiceSection";
import TeamSection from "../components/Sections/Team/TeamSection";
import RefrenceSection from "../components/Sections/References/RefrenceSection";
import Contact from "../components/Sections/Contact/Contact";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const contactRef = useRef();
  const teamRef = useRef();
  const serviceRef = useRef();
  const homeRef = useRef();
  const portRef = useRef();

  const [navSize, setNavsize] = useState();

  const refs = [homeRef, serviceRef, teamRef, portRef, contactRef];
  const router = useRouter();

  useEffect(() => {
    const { innerHeight: height } = window;
    setNavsize(height * 0.095);
  }, []);

  const scrollToHandler = (i) => {
    if (i === "shop") {
      router.push("/shop");
    } else {
      window.scrollTo({
        top: refs[i].current.offsetTop - navSize,
        behavior: "smooth",
      });
    }
  };

  return (
    <React.Fragment>
      <MobileNavbar onClickScroll={scrollToHandler} />
      <DesktopNavbar onClickScroll={scrollToHandler} />
      <Hero ref={homeRef} onClickScroll={scrollToHandler} />
      <ServiceSection ref={serviceRef} />
      <TeamSection ref={teamRef} />
      <RefrenceSection ref={portRef} />
      <Contact ref={contactRef} />
      <Footer bgColor="#F3F3F3" fontColor="#343434" width="100%" />
    </React.Fragment>
  );
};

export default index;
