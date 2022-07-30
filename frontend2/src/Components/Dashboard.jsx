import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const Data = useSelector((store) => store.AppReducer.courses);
  return (
    <Box w="95%" ml="auto">
      <Heading size={"md"} my="15px">
        Dashboard
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} color="white" gap={"35px"}>
        <GridItem
          textAlign="center"
          borderRadius="5px"
          w="100%"
          h="100px"
          bg="gray.500"
          p="10px"
        >
          <Text fontSize={"lg"} fontWeight="500">
            Enrolled Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem
          textAlign="center"
          borderRadius="5px"
          w="100%"
          h="100px"
          bg="gray.500"
          p="10px"
        >
          <Text fontSize={"lg"} fontWeight="500">
            Active Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem
          textAlign="center"
          borderRadius="5px"
          w="100%"
          h="100px"
          bg="gray.500"
          p="10px"
        >
          <Text fontSize={"lg"} fontWeight="500">
            Completed Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem
          textAlign="center"
          borderRadius="5px"
          w="100%"
          h="100px"
          bg="gray.500"
          p="10px"
        >
          <Text fontSize={"lg"} fontWeight="500">
            Total Students
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem
          textAlign="center"
          borderRadius="5px"
          w="100%"
          h="100px"
          bg="gray.500"
          p="10px"
        >
          <Text fontSize={"lg"} fontWeight="500">
            Total Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem
          textAlign="center"
          borderRadius="5px"
          w="100%"
          h="100px"
          bg="gray.500"
          p="10px"
        >
          <Text fontSize={"lg"} fontWeight="500">
            Total Earning
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>
      </SimpleGrid>

      <Box border={"1px solid #c5c5c5"} borderRadius="5px" mt="55px">
        <Text textAlign={"center"} fontSize={"xl"} fontWeight="500" my="15px">
          Most Popular Courses
        </Text>
        <TableContainer border={"1px solid black"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th w="40%">Course Name</Th>
                <Th w="15%" textAlign={"center"}>
                  Publish
                </Th>
                <Th w="15%" textAlign={"center"}>
                  Enrolled
                </Th>
                <Th w="15%" textAlign={"center"}>
                  Edit
                </Th>
                <Th w="15%" textAlign={"center"}>
                  Delete
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {Data?.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.coures_name}</Td>
                  <Td>
                  <Switch id='email-alerts' />
                  </Td>
                  <Td textAlign={"center"}>0</Td>
                  <Td textAlign={"center"}>
                    <EditIcon />
                    </Td>
                  <Td textAlign={"center"}>
                  <DeleteIcon onClick={HandleDelet} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
