import React, { forwardRef } from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Experience = forwardRef((props, ref) => {
  const experience_data = [
    {
      role: "SDE-Intern",
      location: "Remote",
      start_date: "Sep 2023",
      end_date: "Feb 2024",
      company_name: "Masai School",
      works: [
        "Developed and maintained web applications using languages such as HTML, CSS, JavaScript, ReactJS, TypeScript, Redux and Chakra-ui.",
        "This opportunity has allowed me to apply my knowledge and learn from experienced professionals in the industry.",
        "Implemented responsive designs and CRUD Operation's.",
        "Developed Masai Alumni website www.masaialumni.com",
      ],
    },
  ];

  return (
    <section ref={ref} id="experience" class="experience section">
      <Stack
        w="100%"
        margin="auto"
        bgColor={"#F8F8F8"}
        mb={{ base: "20px", md: "25px" }}
        padding={{ base: "10px 1%", md: "10px", lg: "10px 22%" }}
      >
        <Box
          fontWeight="bold"
          mb={{ base: "12px", md: "22px" }}
          fontSize={{ base: "22px", md: "45px" }}
          textAlign={{ base: "center" }}
          textDecoration="underline"
        >
          Experience
        </Box>

        {experience_data?.map((el, i) => (
          <Box
            key={i}
            p={{ base: "12px", md: "18px", lg: "20px" }}
            m={{ base: "10px 5%", md: "18px 10px", lg: "20px 10px" }}
            borderRadius={"12px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Flex justifyContent={"space-between"} fontWeight={"bold"}>
              <Text color={"red"} fontSize="xl">
                {el.company_name}
              </Text>
              <Text fontSize="lg">{el.location}</Text>
            </Flex>

            <Flex
              justifyContent={"space-between"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
            >
              <Text>{el.role}</Text>
              <Text>
                {el.start_date} - {el.end_date}
              </Text>
            </Flex>

            <UnorderedList mt={{ base: "10px", md: "15px", lg: "18px" }}>
              {el.works.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Stack>
    </section>
  );
});

export default Experience;
