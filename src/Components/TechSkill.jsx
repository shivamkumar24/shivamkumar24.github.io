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

const TechSkill = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Stack
        w="100%"
        margin="auto"
        backgroundColor="lavender"
        padding={{ base: "10px 1%", md: "10px", lg: "10px 22%" }}
      >
        {/* Tech Stack */}
        <Box
          color="red.600"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          Tech Stack
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={{ sm: "4", md: "8" }}
        >
          {/* First Tech Stack */}
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
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"html.png"}
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                HTML
              </Heading>
            </Stack>
          </GridItem>

          {/* Second Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"css.png"}
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                CSS
              </Heading>
            </Stack>
          </GridItem>

          {/* Third Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={
                  "data:image/png;base64,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"
                }
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                JavaScript
              </Heading>
            </Stack>
          </GridItem>

          {/* Fourth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"https://cdn.worldvectorlogo.com/logos/react-1.svg"}
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                React
              </Heading>
            </Stack>
          </GridItem>

          {/* Fifth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"redux.png"}
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Redux
              </Heading>
            </Stack>
          </GridItem>

          {/* Sixth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={
                  "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                }
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                NodeJS
              </Heading>
            </Stack>
          </GridItem>

          {/* Seventh Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("grey", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={
                  "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
                }
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="black"
              >
                ExpressJS
              </Heading>
            </Stack>
          </GridItem>

          {/* Eight Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={
                  "data:image/png;base64,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"
                }
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                MongoDB
              </Heading>
            </Stack>
          </GridItem>

          {/* Nineth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={
                  "data:image/png;base64,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"
                }
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Chakra-UI
              </Heading>
            </Stack>
          </GridItem>

          {/* Tenth Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"bootstrap.png"}
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Bootstrap
              </Heading>
            </Stack>
          </GridItem>

          {/* Eleventh Tech Stack */}
          <GridItem>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("black", "gray.900")}
              boxShadow={"xl"}
              padding="10px"
              margin={4}
              textAlign="center"
            >
              <Image
                display="block"
                width={{ base: "70%", md: "100px" }}
                height="130px"
                margin={{ sm: "auto", md: "auto" }}
                src={"git.png"}
              />

              <Heading
                fontSize={{ sm: "sm", md: "xl" }}
                fontFamily={"body"}
                color="white"
              >
                Git
              </Heading>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </section>
  );
});

export default TechSkill;
