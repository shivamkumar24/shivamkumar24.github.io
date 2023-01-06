import React from "react";
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

const Project = () => {
  return (
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
        templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3, 1fr)" }}
        gap={8}
      >
        {/* First Project */}
        <GridItem>
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
                src={
                  "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
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
              <Heading fontSize={"xl"} fontFamily={"body"}>
                BEAUTYBEBO.COM - CLONE
              </Heading>

              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Beauty Bebo is India's fastest-growing online retail store for
                makeup, skin care, hair care, personal care, mom and baby care,
                fragrance, and Ayurveda products.
              </Text>

              <Stack
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Text>
                  <span style={{ color: "red", fontWeight: "600" }}>
                    Tech Stack:
                  </span>{" "}
                  JavaScript | ES6 | ReactJS | React-Router | API
                </Text>
              </Stack>

              <Text>An Individual project executed in 4 days.</Text>

              <Stack
                width={"70%"}
                m="auto"
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Link href="https://github.com/shivamkumar24/Beautybebo.com-Clone">
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
                <Link href="https://beautybebo-com-clone-jdmb.vercel.app/">
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
        <GridItem>
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
                src={
                  "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
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
              <Heading fontSize={"xl"} fontFamily={"body"}>
                BEAUTYBEBO.COM - CLONE
              </Heading>

              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Beauty Bebo is India's fastest-growing online retail store for
                makeup, skin care, hair care, personal care, mom and baby care,
                fragrance, and Ayurveda products.
              </Text>

              <Stack
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Text>
                  <span style={{ color: "red", fontWeight: "600" }}>
                    Tech Stack:
                  </span>{" "}
                  JavaScript | ES6 | ReactJS | React-Router | API
                </Text>
              </Stack>

              <Text>An Individual project executed in 4 days.</Text>

              <Stack
                width={"70%"}
                m="auto"
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Link href="https://github.com/shivamkumar24/Beautybebo.com-Clone">
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
                <Link href="https://beautybebo-com-clone-jdmb.vercel.app/">
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
        <GridItem>
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
                src={
                  "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
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
              <Heading fontSize={"xl"} fontFamily={"body"}>
                BEAUTYBEBO.COM - CLONE
              </Heading>

              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Beauty Bebo is India's fastest-growing online retail store for
                makeup, skin care, hair care, personal care, mom and baby care,
                fragrance, and Ayurveda products.
              </Text>

              <Stack
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Text>
                  <span style={{ color: "red", fontWeight: "600" }}>
                    Tech Stack:
                  </span>{" "}
                  JavaScript | ES6 | ReactJS | React-Router | API
                </Text>
              </Stack>

              <Text>An Individual project executed in 4 days.</Text>

              <Stack
                width={"70%"}
                m="auto"
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Link href="https://github.com/shivamkumar24/Beautybebo.com-Clone">
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
                <Link href="https://beautybebo-com-clone-jdmb.vercel.app/">
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
  );
};

export default Project;
