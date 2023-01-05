import { Box, Button, HStack, Image } from "@chakra-ui/react";

export default function Home() {
  const property = {
    imageUrl: "https://avatars.githubusercontent.com/u/76693614?v=4",
    imageAlt: "Shivam Profile Picture",
  };

  const contactIcon = [
    {
      name: "LinkedIn",
      linkSrc: "https://www.linkedin.com/in/shivamkumar24/",
      imgSrc:
        "https://img.freepik.com/free-icon/linkedin_318-183415.jpg?w=2000",
    },
    {
      name: "GitHub",
      linkSrc: "https://github.com/shivamkumar24",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPckPxK1s_0qZb7Y3z4lzgLaHryrHEG7lSplIx4kgfpNj80QEC0u4n6q3R3l6LoMT_ak&usqp=CAU",
    },
    {
      name: "Gmail",
      linkSrc: "shivam2432000@gmail.com",
      imgSrc:
        "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI",
    },
  ];

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

          <HStack
            marginTop="18px"
            width={{ base: "150px", md: "150px" }}
            display="flex"
            justifyContent="space-around"
          >
            {contactIcon.map((el) => (
              <a href={el.linkSrc}>
                <img
                  key={el.name}
                  alt={el.name}
                  src={el.imgSrc}
                  width="25px"
                  height="25px"
                  cursor="pointer"
                />
              </a>
            ))}
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
