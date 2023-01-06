import {
  GridItem,
  Stack,
  Image,
  Heading,
  useColorModeValue,
  Grid,
  Box,
} from "@chakra-ui/react";
import React from "react";

const MySkills = () => {
  return (
    <Stack
      margin="auto"
      backgroundColor="purple.300"
      padding={{ base: "10px 1%", md: "10px 22%" }}
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
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: "", md: "4" }}
      >
        {/* First Soft Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/collabrative.697daf5b0a056e39d2ea.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Collaborative
            </Heading>
          </Stack>
        </GridItem>

        {/* Second Soft Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/creativity1.445675a0a00c2757a1d6.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Creative Thinking
            </Heading>
          </Stack>
        </GridItem>

        {/* Third Soft Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/problemSolv.ddf49384f01d0b6de6c0.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Problem Solving
            </Heading>
          </Stack>
        </GridItem>

        {/* Fourth Soft Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/timeManage.4644a4b2b8ed5f538eec.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Time Management
            </Heading>
          </Stack>
        </GridItem>
      </Grid>

      {/* Tech Skills */}
      <Heading
        paddingLeft={{ base: "12px", md: "25px" }}
        textDecoration="underline"
      >
        Tech Skills
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: "", md: "4" }}
      >
        {/* First Tech Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/frontend-icon-22.23cac2a4e78e5e715d52.jpg"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Frontend
            </Heading>
          </Stack>
        </GridItem>

        {/* Second Tech Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/backend.cd86763da06f05c86ca6.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Backend
            </Heading>
          </Stack>
        </GridItem>

        {/* Third Tech Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/DSAA.77509298a343d123a7bd.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              DSA
            </Heading>
          </Stack>
        </GridItem>

        {/* Fourth Tech Skills */}
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            m="auto"
            w={{ sm: "80%", md: "90%" }}
            height="auto"
            direction={{ base: "column", md: "column" }}
            bg={useColorModeValue("black", "gray.900")}
            boxShadow={"xl"}
            padding="10px"
            margin={4}
            textAlign="center"
          >
            <Image
              width={{ base: "70px", md: "100px" }}
              height="130px"
              margin="2px 18%"
              src={
                "https://abhijitnr.github.io/static/media/projectManagement.56532bbb9da241b0f1c8.png"
              }
            />

            <Heading fontSize={"xl"} fontFamily={"body"} color="white">
              Project Management
            </Heading>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default MySkills;
