import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson, BsLinkedin } from "react-icons/bs";

const Chat = () => {
  return (
    <Container
      bg="#9DC4FB"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      p="10px"
    >
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 10, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 10 }}
        >
          <Box p={4}>
            <Heading mb={{ base: "12px", md: "22px" }}>
              Take a Coffee And Chat with me
            </Heading>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="auto"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-9355228666
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="auto"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        shivam2432000@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="auto"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Bihar, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Link href="https://www.linkedin.com/in/shivamkumar24/">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </Link>

                    <Link href="https://github.com/shivamkumar24">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>

                    <Link href="shivam2432000@gmail.com">
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdEmail size="28px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="mail">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="sendbutton" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      <Heading fontSize={{ base: "12px", md: "18px" }}>
        Designed and Developed by{" "}
        <span style={{ color: "red" }}>Shivam Kumar</span>,© Copyright 2023. All
        rights reserved.
      </Heading>
    </Container>
  );
};

export default Chat;
