import { Box, Image } from "@chakra-ui/react";
import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" class="about section">
      <Box>
        <Box
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          About me
        </Box>
        <Box
          width="90%"
          margin="auto"
          display="flex"
          pt={{ base: "20px", md: "30px" }}
          pb={{ base: "20px" }}
          mb={{ base: "20px", md: "25px" }}
          justifyContent={{ base: "center", md: "space-around" }}
          alignItems={{ base: "center" }}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Image
            src="https://t3.ftcdn.net/jpg/00/79/32/70/240_F_79327071_ubG3dWNUwUeVFqALg55FLqGpJFgfnoRY.jpg"
            alt="aboutUs"
            borderRadius="20px"
            height={{ base: "200px", md: "300px" }}
            width={{ base: "200px", md: "500px" }}
          />
          <Box margin="20px" id="user-detail-intro">
            <Box
              fontSize={{ base: "15px", md: "22px" }}
              mb="8px"
              fontWeight="semibold"
            >
              My name is Shivam Kumar. I am from East Champaran, Bihar ( India )
              and I enjoy creating things that live on the internet.
            </Box>
            <Box fontSize={{ base: "12px", md: "18px" }} mb="8px">
              I am a passionate and self-motivated Aspiring Full-Stack Web
              Developer. I can build websites by using HTML, CSS, JavaScript,
              React, Redux, NodeJS, ExpressJS and MongoDB (MERN Stack). Seeking
              challenging oppurtunities to make the best use of my abilities and
              knowledge to develop both my professional and interpersonal
              skills, along with fulfilling the organization's growth and goals.
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
});

export default About;
