import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Tag,
  useToast,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import axios from "axios";

const Lession = [
  {
    title: "01 Nextjs full stack application",
    types: "video",
  },
  {
    title: "02 Creating models in Nextjs",
    types: "video",
  },
  {
    title: "03 Connecting to database in nextjs",
    types: "video",
  },
  {
    title: "04 Create REST API in nextjs part 1",
    types: "video",
  },
  {
    title: "05 Create REST API in nextjs part 2",
    types: "video",
  },
  {
    title: "06 Testing REST API in nextjs",
    types: "video",
  },
  {
    title: "07 Global layouts in nextjs",
    types: "video",
  },
  {
    title: "08 Server side rendering SSR in nextjs",
    types: "video",
  },
  {
    title: "09 Create a new hero in nextjs",
    types: "video",
  },
  {
    title: "10 Routing and SSR in nextjs",
    types: "video",
  },
  {
    title: "11 Edit a superhero in nextjs",
    types: "video",
  },
  {
    title: "CodeSandbox for nextjs",
    types: "article",
  },
  {
    title: "Video lesson 13",
    types: "video",
  },
  {
    title: "SECTION QUIZ 14",
    types: "quiz",
  },
  {
    title: "SECTION QUIZ 15",
    types: "quiz",
  },
];

const CoursesDetail = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();
  const toast = useToast()
  console.log(typeof +id);

  const handleEnroll=()=>{
    axios.post("http://localhost:8080/enrolled",{...Data[id], isComplate:false})
    .then((result) => {
      return toast({
        title: 'Enroll Successfull.',
        description: "We've add courses to your Dashboard.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const getData =()=>{
    axios
    .get("http://localhost:8080/locourses")
    .then((result) => {
      setData(result.data);
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={Data[id]?.src}
            // fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {Data[id]?.coures_name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={800}
              fontSize={"2xl"}
            >
              {Data[id]?.isfree === "" ? Data[id]?.offerprices : "Free"}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{Data[id]?.decription}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Lession
              </Text>

              <Accordion allowToggle>
                {Lession?.map((item, index)=>(

                    <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" justifyContent={"space-between"}>
                        {item.title} <Tag>{item.types}</Tag>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
))}

              </Accordion>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            onClick={handleEnroll}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Enroll Now
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default CoursesDetail;
