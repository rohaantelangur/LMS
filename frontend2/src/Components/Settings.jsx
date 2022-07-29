import React from 'react'
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box w="95%" ml="auto">
      <Heading size={"md"} my="15px">
      Settings
      </Heading>
      <Box border={"1px solid #c5c5c5"} borderRadius="5px" mt="25px">
        <Text textAlign={"center"} fontSize={"xl"} fontWeight="500" my="15px">
        Settings
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
  )
}

export default Settings