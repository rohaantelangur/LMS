import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
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

const Dashboard = () => {
  return (
    <Box w="95%" ml="auto">
      <Heading size={"md"} my="15px">
        Dashboard
      </Heading>
      <SimpleGrid columns={[1,1,2,3]} color="white" gap={"35px"}>
        <GridItem textAlign="center" borderRadius="5px" w="100%" h="100px" bg="gray.500" p="10px">
          <Text fontSize={"lg"} fontWeight="500">
            Enrolled Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>
        
        <GridItem textAlign="center" borderRadius="5px" w="100%" h="100px" bg="gray.500" p="10px">
          <Text fontSize={"lg"} fontWeight="500">
            Active Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem textAlign="center" borderRadius="5px" w="100%" h="100px" bg="gray.500" p="10px">
          <Text fontSize={"lg"} fontWeight="500">
            Completed Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem textAlign="center" borderRadius="5px" w="100%" h="100px" bg="gray.500" p="10px">
          <Text fontSize={"lg"} fontWeight="500">
            Total Students
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem textAlign="center" borderRadius="5px" w="100%" h="100px" bg="gray.500" p="10px">
          <Text fontSize={"lg"} fontWeight="500">
            Total Course
          </Text>
          <Text fontSize={"4xl"} fontWeight="500">
            0
          </Text>
        </GridItem>

        <GridItem textAlign="center" borderRadius="5px" w="100%" h="100px" bg="gray.500" p="10px">
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
                <Th w="80%">Course Name</Th>
                <Th textAlign={"center"}>Enrolled</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td textAlign={"center"}>0</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td textAlign={"center"}>0</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td textAlign={"center"}>2</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
