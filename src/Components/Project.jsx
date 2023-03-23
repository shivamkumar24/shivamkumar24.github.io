import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Project = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects">
      <Stack margin="auto" backgroundColor="cornflowerblue">
        {/* Projects */}
        <Box
          color="yellow"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          Some projects I've Built
        </Box>
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={6}
        >
          {/* First Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"fitfactory.jpeg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  Fit-Factory.com
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Fit-Factory is clone of HealthKart. This is generally based on
                  products which is related to our health and it is that website
                  where we sell product direct to customer.
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text fontWeight={"bold"} className="project-tech-stack">
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    React | React-Router | React-Redux | React-thunk | JSON
                  </Text>
                </Stack>

                <Text>A group project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/Sachin-Kesarwani/detailed-hour-2985/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://fit-factory.vercel.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* Second Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"trademart.jpeg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  TradeMart.com
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  TradeMart is clone website of IndiaMart. IndiaMart Indian
                  e-commerce company that provides B2B and customer to customer
                  sales services via its web portal.
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text fontWeight={"bold"} className="project-tech-stack">
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    React | React-Router | React-Redux | React-thunk | Firebase
                    | JSON
                  </Text>
                </Stack>

                <Text>A group project executed in 5 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/jithstephen13/TradeMart"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://trademart.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* Third Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"beautybebo.jpeg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  Beautybebo.com - Clone
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Beauty Bebo is India's fastest-growing online retail store for
                  makeup, skin care, hair care, personal care, mom and baby
                  care, fragrance, and Ayurveda products.
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text fontWeight={"bold"} className="project-tech-stack">
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    ReactJS | React-Router | API | JavaScript | ES6
                  </Text>
                </Stack>

                <Text>An individual project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/shivamkumar24/Beautybebo.com-Clone"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://beautybebo-com-clone-jdmb.vercel.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* Fourth Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={"sugarcosmetics.jpeg"}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  SugarCosmetics.com - Clone
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Sugar Cosmetics is one of India's fastest-growing premium
                  cosmetic companies. it has become the first choice of many
                  Indian women.
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text className="project-tech-stack" fontWeight={"bold"}>
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    JavaScript | ES6 | Local Storage | CSS | HTML
                  </Text>
                </Stack>

                <Text>An individual project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/shivamkumar24/SugarCosmetics.com-Clone"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://effortless-strudel-bc1dac.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>

          {/* Fifth Project */}
          <GridItem className="project-card">
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              m="auto"
              w={{ sm: "90%", md: "90%" }}
              height="auto"
              direction={{ base: "column", md: "column" }}
              bg={useColorModeValue("cyan", "gray.900")}
              boxShadow={"xl"}
              padding={4}
              margin={4}
              textAlign="center"
            >
              <Flex flex={1} bg="blue.200">
                <Image objectFit="cover" boxSize="100%" src={"myntra.jpeg"} />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  className="project-title"
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  Myntra.com - Clone
                </Heading>

                <Text
                  className="project-description"
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Myntra is a one stop shop for all your fashion and lifestyle
                  needs. Being India's largest e-commerce store for fashion and
                  lifestyle products
                </Text>

                <Stack
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text className="project-tech-stack" fontWeight={"bold"}>
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Tech Stack:
                    </span>{" "}
                    JavaScript | ES6 | Local Storage | CSS | HTML
                  </Text>
                </Stack>

                <Text>A group project executed in 4 days.</Text>

                <Stack
                  width={"70%"}
                  m="auto"
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Link
                    className="project-github-link"
                    href="https://github.com/shivamkumar24/Myntra_Clone"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    className="project-deployed-link"
                    href="https://idyllic-begonia-67c760.netlify.app/"
                    target={"_blank"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </section>
  );
});

export default Project;
