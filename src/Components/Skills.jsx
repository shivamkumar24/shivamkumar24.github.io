import {
  GridItem,
  Stack,
  Image,
  Heading,
  useColorModeValue,
  Grid,
  Box,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills">
      <Stack
        w="100%"
        margin="auto"
        backgroundColor="purple.300"
        padding={{ base: "10px 1%", md: "10px", lg: "10px 22%" }}
      >
        <Box
          color="red.600"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          My Skills
        </Box>

        {/* Soft Skills */}
        <Heading
          paddingLeft={{ base: "12px", md: "25px" }}
          textDecoration="underline"
        >
          Soft Skills
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={4}
        >
          {/* First Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "75%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={{ sm: 2, md: 4 }}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={
                  "https://abhijitnr.github.io/static/media/collabrative.697daf5b0a056e39d2ea.png"
                }
              />

              <Heading
                className="skills-card-name"
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Collaborative
              </Heading>
            </Stack>
          </GridItem>

          {/* Second Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "75%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={{ sm: 2, md: 4 }}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"creative.png"}
              />

              <Heading
                className="skills-card-name"
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Creative Thinking
              </Heading>
            </Stack>
          </GridItem>

          {/* Third Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "75%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={{ sm: 2, md: 4 }}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"problem.png"}
              />

              <Heading
                className="skills-card-name"
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Problem Solving
              </Heading>
            </Stack>
          </GridItem>

          {/* Fourth Soft Skills */}
          <GridItem className="skills-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "75%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={{ sm: 2, md: 4 }}
              textAlign="center"
            >
              <Image
                className="skills-card-img"
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"time.png"}
              />

              <Heading
                className="skills-card-name"
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Time Management
              </Heading>
            </Stack>
          </GridItem>
        </Grid>

        {/* Tech Skills */}
        {/* <Heading
          paddingLeft={{ base: "12px", md: "25px" }}
          textDecoration="underline"
        >
          Tech Skills
        </Heading> */}
      </Stack>
    </section>
  );
});

export default Skills;
