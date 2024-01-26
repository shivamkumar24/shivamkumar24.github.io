import {
  Box,
  Link,
  Flex,
  Text,
  Wrap,
  Input,
  Button,
  VStack,
  HStack,
  Heading,
  Textarea,
  useToast,
  WrapItem,
  Container,
  FormLabel,
  InputGroup,
  IconButton,
  FormControl,
  InputLeftElement,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { forwardRef, useState } from "react";
import { BsGithub, BsPerson, BsLinkedin } from "react-icons/bs";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";

const initialValue = {
  name: "",
  email: "",
  message: "",
};

const Chat = forwardRef((props, ref) => {
  const toast = useToast();
  const [emailData, setEmailData] = useState(initialValue);

  const setEmail = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const SendMail = () => {
    emailjs
      .send(
        "service_i2hkmo5",
        "template_zq8dleu",
        emailData,
        "ae60aBiY4mqn_XZfT"
      )
      .then((res) => {
        toast({
          title: "Email Sended",
          description: "E-mail Sent's Successfully.",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Something Wrong",
          description: "Something goes wrong please check console.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log("EmailSendError: ", err);
      });
  };

  return (
    <section ref={ref} id="contact">
      <Container
        bg="#9DC4FB"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        p="10px"
      >
        {/* Form and Contact details */}
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
                {/* Contact Details */}
                <WrapItem>
                  <Box>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          id="contact-phone"
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
                          id="contact-email"
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          shivamkumg@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
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
                      <Link
                        id="contact-linkedin"
                        href="https://www.linkedin.com/in/shivamkumar24/"
                      >
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </Link>

                      <Link
                        id="contact-github"
                        href="https://github.com/shivamkumar24"
                      >
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsGithub size="28px" />}
                        />
                      </Link>

                      {/* <Link href="shivam2432000@gmail.com"> */}
                      <a href="mailto:shivam2432000@gmail.com">
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<MdEmail size="28px" />}
                        />
                      </a>
                      {/* </Link> */}
                    </HStack>
                  </Box>
                </WrapItem>

                {/* Form */}
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
                            <Input
                              type="text"
                              size="md"
                              name="name"
                              onChange={(e) => setEmail(e)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="mail">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="email"
                              size="md"
                              name="email"
                              onChange={(e) => setEmail(e)}
                            />
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
                            name="message"
                            onChange={(e) => setEmail(e)}
                          />
                        </FormControl>
                        <FormControl id="sendbutton" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            onClick={SendMail}
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

        {/* Footer */}
        <Heading fontSize={{ base: "12px", md: "18px" }} textAlign="center">
          Designed and Developed by{" "}
          <span style={{ color: "red" }}>Shivam Kumar</span>,© Copyright 2023.
          All rights reserved.
        </Heading>
      </Container>
    </section>
  );
});

export default Chat;
