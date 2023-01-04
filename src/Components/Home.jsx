import { Box, Button, Image } from "@chakra-ui/react";

export default function Home() {
  const property = {
    imageUrl: "https://avatars.githubusercontent.com/u/76693614?v=4",
    imageAlt: "Shivam Profile Picture",
  };

  return (
    <>
      {/* First Container */}
      <Box
        display="flex"
        pt={{ base: "20px", md: "100px" }}
        pb={{ base: "20px" }}
        mb={{ base: "30px", md: "50px" }}
        justifyContent={{ base: "center", md: "space-around" }}
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box p="6">
          <Box
            fontWeight="bold"
            fontSize={{ base: "22px", md: "30px" }}
            // textAlign={{ base: "center" }}
          >
            Hi, I am
          </Box>
          <Box
            fontWeight="bold"
            fontSize={{ base: "30px", md: "45px" }}
            // textAlign={{ base: "center" }}
          >
            Shivam Kumar
          </Box>
          <Box
            fontWeight="bold"
            fontSize={{ base: "18px", md: "30px" }}
            // textAlign={{ base: "center" }}
            color="red"
          >
            Full Stack Web Developer
          </Box>
          <Box margin="10px">
            <Button
              display={"inline-flex"}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight={"bold"}
              letterSpacing="2px"
              color={"white"}
              bg={"red"}
              href={"#"}
              _hover={{
                bg: "red.800",
              }}
            >
              Resume
            </Button>
          </Box>
        </Box>

        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          borderRadius="50%"
          height={{ base: "225px", md: "320px" }}
          width={{ base: "225px", md: "320px" }}
        />
      </Box>

      {/* Second Container */}
      <Box>
        <Box
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          Who I am
        </Box>
        <Box
          width="90%"
          margin="auto"
          display="flex"
          pt={{ base: "20px", md: "30px" }}
          pb={{ base: "20px" }}
          mb={{ base: "30px", md: "50px" }}
          justifyContent={{ base: "center", md: "space-around" }}
          alignItems={{ base: "center" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Image
            src="https://t3.ftcdn.net/jpg/00/79/32/70/240_F_79327071_ubG3dWNUwUeVFqALg55FLqGpJFgfnoRY.jpg"
            alt="aboutUs"
            borderRadius="20px"
            height={{ base: "200px", md: "300px" }}
            width={{ base: "200px", md: "500px" }}
          />
          <Box margin="20px">
            <Box
              fontSize={{ base: "15px", md: "22px" }}
              mb="8px"
              fontWeight="semibold"
            >
              My name is Shivam Kumar. I am from East Champaran, Bihar ( India )
              and I enjoy creating things that live on the internet.
            </Box>
            <Box fontSize={{ base: "12px", md: "18px" }} mb="8px">
              I am a passionate and self-motivated Aspiring Full-Stack Develoer
              from Bihar(India). Seeking challenging oppurtunities to make the
              best use of my abilities and knowledge to develop both my
              professional and interpersonal skills, along with fulfilling the
              organization's growth and goals.
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Third Container */}
    </>
  );
}
