import {
  Box,
  Tab,
  Tabs,
  Text,
  Flex,
  Grid,
  Link,
  Stack,
  Image,
  Button,
  TabList,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import projectData from "../Utils/projectData";
import React, { useState, forwardRef } from "react";
import { LIGHTSTEELBLUE } from "../Constants/Typography";

const Project = forwardRef((props, ref) => {
  const projectsPerPage = 3;
  const [data, setData] = useState(projectData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = data.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const handleProjectType = (project_type) => {
    if (project_type === "All") {
      setData(projectData);
    } else {
      let filtered_project_data = projectData.filter(
        (res) => res.type === project_type
      );
      setData(filtered_project_data);
    }
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const displayedProjects = data.slice(startIndex, endIndex);

  return (
    <section ref={ref} id="projects">
      <Stack
        margin="auto"
        padding={{ base: "5px 10px", md: "15px", lg: "18px" }}
      >
        {/* Projects */}
        <Box
          color={LIGHTSTEELBLUE}
          fontWeight="bold"
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          Some projects I've Built
        </Box>

        <Box display="flex" justifyContent="center">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab onClick={() => handleProjectType("All")}>ALL</Tab>
              <Tab onClick={() => handleProjectType("MERN")}>MERN</Tab>
              <Tab onClick={() => handleProjectType("React")}>ReactJS</Tab>
              <Tab onClick={() => handleProjectType("JavaScript")}>
                JavaScript
              </Tab>
            </TabList>
          </Tabs>
        </Box>

        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={6}
        >
          {displayedProjects.map((el, i) => (
            <GridItem className="project-card" key={i}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                m="auto"
                w={{ sm: "90%", md: "90%" }}
                height="auto"
                direction={{ base: "column", md: "column" }}
                bg={"cyan"}
                boxShadow={"xl"}
                padding={4}
                margin={4}
                textAlign="center"
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={el.banner} />
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
                    {el.title}
                  </Heading>

                  <Text
                    className="project-description"
                    textAlign={"center"}
                    color={"gray.700"}
                    px={3}
                  >
                    {el.desc}
                  </Text>

                  <Stack
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Text fontWeight={"bold"} className="project-tech-stack">
                      <span style={{ color: "red", fontWeight: "600" }}>
                        Tech Stack:
                      </span>{" "}
                      {el.tech_stack.map((elem) => elem).join(" | ")}
                    </Text>
                  </Stack>

                  <Text>{el.work_type}</Text>

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
                      href={el.github}
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
                      href={el.demo}
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
          ))}
        </Grid>

        {/* Pagination */}
        <Stack direction="row" mt={4} spacing={4} justifyContent="center">
          <Button
            color={"white"}
            onClick={handlePreviousPage}
            isDisabled={currentPage === 1}
            bgColor={LIGHTSTEELBLUE}
            _hover={{
              color: "white",
              bgColor: { LIGHTSTEELBLUE },
            }}
          >
            Previous
          </Button>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            color={"white"}
            onClick={handleNextPage}
            bgColor={LIGHTSTEELBLUE}
            isDisabled={currentPage === totalPages}
            _hover={{
              color: "white",
              bgColor: { LIGHTSTEELBLUE },
            }}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </section>
  );
});

export default Project;
