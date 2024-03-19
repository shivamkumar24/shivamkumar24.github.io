import {
  R2,
  R3,
  R6,
  SA,
  AUTO,
  SMALL,
  CENTER,
  COLUMN,
  FILL_80PARENT,
  LIGHTSTEELBLUE,
} from "../Constants/Typography";
import techData from "../Utils/techData";
import toolData from "../Utils/toolData";
import React, { forwardRef } from "react";
import { Box, Flex, Grid, Image, Heading } from "@chakra-ui/react";

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills">
      <Grid id="skills">
        <Box
          color={LIGHTSTEELBLUE}
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
          m={{ base: "10px 5%", md: "18px 10px", lg: "20px 10px" }}
        >
          Skills
        </Box>

        <Grid
          gridTemplateColumns={{
            base: R2,
            sm: R3,
            md: R3,
            lg: R6,
          }}
          w={{
            base: FILL_80PARENT,
            sm: FILL_80PARENT,
            md: FILL_80PARENT,
          }}
          gap="20px"
          m={AUTO}
        >
          {techData.map((item) => (
            <Box
              key={item.id}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              borderRadius={"20px"}
            >
              <Flex justifyContent={SA} direction={COLUMN} align={CENTER}>
                <Image
                  w={"50%"}
                  padding={"10px"}
                  height={{
                    base: "60px",
                    sm: "80px",
                    md: "80px",
                    lg: "80px",
                  }}
                  src={item.frontendtech_desc}
                />
                <Heading
                  as={"h4"}
                  size={SMALL}
                  color={LIGHTSTEELBLUE}
                  textAlign={CENTER}
                  marginBottom={"5px"}
                >
                  {item.frontendtech_name}
                </Heading>
              </Flex>
            </Box>
          ))}
        </Grid>
        <Box
          color={LIGHTSTEELBLUE}
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
          m={{ base: "10px 5%", md: "18px 10px", lg: "20px 10px" }}
        >
          Tools
        </Box>
        <Grid
          gridTemplateColumns={{
            base: R2,
            sm: R3,
            md: R3,
            lg: R6,
          }}
          w={{
            base: FILL_80PARENT,
            sm: FILL_80PARENT,
            md: FILL_80PARENT,
          }}
          gap="20px"
          m={AUTO}
        >
          {toolData.map((item) => (
            <Box
              key={item.id}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              borderRadius={"20px"}
            >
              <Flex justifyContent={SA} direction={COLUMN} align={CENTER}>
                <Image
                  w={"50%"}
                  padding={"10px"}
                  height={{
                    base: "60px",
                    sm: "80px",
                    md: "80px",
                    lg: "80px",
                  }}
                  src={item.tool_desc}
                />
                <Heading
                  as={"h4"}
                  size={SMALL}
                  color={LIGHTSTEELBLUE}
                  textAlign={CENTER}
                  marginBottom={"5px"}
                >
                  {item.tool_name}
                </Heading>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Grid>
    </section>
  );
});

export default Skills;
