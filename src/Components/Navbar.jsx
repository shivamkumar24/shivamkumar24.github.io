import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Links = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About Me" },
  { to: "/projects", name: "Projects" },
  { to: "/techstack", name: "Tech-Stack" },
  { to: "/skills", name: "Skills" },
  { to: "/contact", name: "Contact" },
];

const NavItem = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "red.800",
      color: "white",
    }}
    color="black"
    fontWeight="bold"
    fontSize="18px"
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar({ refs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;

      case "/projects":
        scrollSmoothHandler(refs.projectRef);
        break;

      case "/techstack":
        scrollSmoothHandler(refs.techStackRef);
        break;

      case "/skills":
        scrollSmoothHandler(refs.skillsRef);
        break;

      case "/contact":
        scrollSmoothHandler(refs.contactRef);
        break;

      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        bg={useColorModeValue("purple.300", "black.900")}
        px={4}
        pos="fixed"
        zIndex={2}
        w="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              fontSize={{ base: "md", md: "30px" }}
              fontWeight="bold"
              fontStyle="italic"
              cursor="pointer"
              color="red"
            >
              Shivam Kumar
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.to}>
                  {" "}
                  <NavItem key={link.name}>{link.name}</NavItem>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <a href="Shivam-Kumar-Resume.pdf" download>
              <Button
                display={"inline-flex"}
                fontSize={"md"}
                fontWeight={"bold"}
                letterSpacing="2px"
                color={"white"}
                bg={"red.600"}
                href={"#"}
                _hover={{
                  bg: "white",
                  color: "red.800",
                  border: "1px solid red",
                }}
              >
                Resume
              </Button>
            </a>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} p="static">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.to}>
                  {" "}
                  <NavItem key={link.name}>{link.name}</NavItem>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
