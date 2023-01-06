import { Box, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  const property = {
    imageUrl: "https://avatars.githubusercontent.com/u/76693614?v=4",
    imageAlt: "Shivam Profile Picture",
  };

  return (
    <>
      <Box
        display="flex"
        backgroundColor="whatsapp.200"
        pt={{ base: "20px", md: "50px" }}
        pb={{ base: "20px" }}
        justifyContent={{ base: "center", md: "space-around" }}
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box p="6">
          <Box fontWeight="bold" fontSize={{ base: "22px", md: "30px" }}>
            Hi, I am
          </Box>

          <Box fontWeight="bold" fontSize={{ base: "30px", md: "45px" }}>
            Shivam Kumar
          </Box>

          <Box
            fontWeight="bold"
            fontSize={{ base: "18px", md: "30px" }}
            color="red"
          >
            Full Stack Web Developer
          </Box>

          <Box margin="10px">
            <a href="Resume.pdf" download>
              <Button
                display={"inline-flex"}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight={"bold"}
                letterSpacing="2px"
                color={"white"}
                bg={"red"}
                _hover={{
                  bg: "red.800",
                }}
              >
                Resume
              </Button>
            </a>
          </Box>

          {/* Social Icons */}

          <HStack
            mt={{ lg: 5, md: 5 }}
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

        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          borderRadius="50%"
          height={{ base: "225px", md: "320px" }}
          width={{ base: "225px", md: "320px" }}
        />
      </Box>
    </>
  );
}
