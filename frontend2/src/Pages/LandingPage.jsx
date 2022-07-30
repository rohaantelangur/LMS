import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [Data, setData] = useState([])
  const navigate= useNavigate()


  useEffect(() => {
    axios.get("http://localhost:8080/locourses")
    .then((result) => {
      setData(result.data)
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
    
  }, [])
  
  return(
  <Box w="90%" m="auto" my="50px">
<SimpleGrid minChildWidth='250px' spacing='40px'>
  {Data?.map((item,index)=>(
    <Box bg='tomato'  key={index} p="10px" borderRadius={"5px"}
    cursor="pointer"
    onClick={()=>{navigate("/courses/"+index)}}
    >
    <Img src={item.src}></Img>
    <Text noOfLines={1} fontSize="lg" fontWeight={"600"}>{item.coures_name}</Text>
    <Text noOfLines={1} fontSize="sm">{item.decription}</Text>
    <Text>{item.lessons}</Text>
    <Text fontWeight={"800"}>Free</Text>
  </Box>
      ))}
</SimpleGrid>
  </Box>
  );
};
