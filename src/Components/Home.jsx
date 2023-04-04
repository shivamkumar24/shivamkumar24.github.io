import { Box, Button, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { forwardRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Home = forwardRef((props, ref) => {
  const property = {
    imageUrl: "https://avatars.githubusercontent.com/u/76693614?v=4",
    imageAlt: "Shivam Profile Picture",
  };

  return (
    <section ref={ref} id="home">
      <Box
        display="flex"
        backgroundColor="whatsapp.200"
        pt={{ base: "45px", md: "80px" }}
        pb={{ base: "20px" }}
        justifyContent={{ base: "center", md: "space-around" }}
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box p="6">
          <Box fontWeight="bold" fontSize={{ base: "22px", md: "30px" }}>
            Hi, I am
          </Box>

          <Box
            id="user-detail-name"
            fontWeight="bold"
            fontSize={{ base: "30px", md: "45px" }}
          >
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
            <Button
              id="resume-button-2"
              display={"inline-flex"}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight={"bold"}
              letterSpacing="2px"
              color={"white"}
              bg={"red"}
              _hover={{
                bg: "red.800",
              }}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1C3_YArb8NUMfjF8Q_lNbrLNmMRf7K1tq/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a href="Shivam-Kumar-Resume.pdf" id="resume-link-2" download>
                Resume
              </a>
            </Button>
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
          </HStack>
        </Box>

        <Image
          src={"Profile_Picture.jpg"}
          alt={property.imageAlt}
          borderRadius="50%"
          className="home-img"
          height={{ base: "225px", md: "320px" }}
          width={{ base: "225px", md: "320px" }}
        />
      </Box>
    </section>
  );
});

export default Home;
