import React, { forwardRef } from "react";
import softSkillData from "../Utils/skillData";
import { Box, Grid, Stack, Image, Heading, GridItem } from "@chakra-ui/react";

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills">
      <Stack
        w="100%"
        margin="auto"
        backgroundColor="#ADD8E6"
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
          color="#008080"
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
          {softSkillData.map((el, i) => (
            <GridItem className="skills-card" key={i}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                m="auto"
                w={{ sm: "75%", md: "90%" }}
                height="auto"
                direction={{ base: "column", md: "column" }}
                bg={"black"}
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
                  src={el.banner}
                />

                <Heading
                  className="skills-card-name"
                  fontSize={{ sm: "sm", md: "xl" }}
                  fontFamily={"body"}
                  color="white"
                >
                  {el.title}
                </Heading>
              </Stack>
            </GridItem>
          ))}
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
