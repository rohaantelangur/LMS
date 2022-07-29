import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { AiFillStar,AiOutlineRocket, AiOutlineStar, AiFillDashboard, AiOutlineDollarCircle } from "react-icons/ai";
import {FiLogOut, FiShoppingCart, FiSettings} from 'react-icons/fi'
import {FaUserGraduate } from 'react-icons/fa'
import {FcGraduationCap} from 'react-icons/fc'
import {MdOutlineReviews, MdQuiz, MdAssignment} from 'react-icons/md'
import {GiWallet} from 'react-icons/gi'
import { Outlet, useNavigate } from "react-router-dom";


const Profile = () => {
    const [Active, setActive] = useState(0)
    const nagigate = useNavigate()

    
    const HandleCliek= (item, num) =>{
        setActive(num)
        nagigate("/profile/"+ item.link)
        
    }

    const SideMenu = [
    {
        Icon: <AiFillDashboard />,
        title:"Dashboard",
        link:"dashboard",
    },
    {
        Icon:<FaUserGraduate />,
        title:"My Profile",
        link:"myprofile",
    },
    {
        Icon:<FcGraduationCap/>,
        title:"Enrolled Course",
        link:"enrolledcourse",
    },
    {
        Icon:<MdOutlineReviews/>,
        title:"Reviews",
        link:"reviews",
    },
    {
        Icon:<AiOutlineRocket/>,
        title:"My Courses",
        link:"mycourses",
    },
    {
        Icon:<MdQuiz/>,
        title:"Quiz Attempts",
        link:"quiz",
    },
    {
        Icon:<AiOutlineDollarCircle/>,
        title:"Earning",
        link:"earning",
    },
    {
        Icon:<GiWallet/>,
        title:"Withdraw",
        link:"withdraw",
    },
    {
        Icon:<FiShoppingCart/>,
        title:"Purchase History",
        link:"purchasehistory",
    },
    {
        Icon:<MdAssignment/>,
        title:"Assignments",
        link:"assignments",
    },
    {
        Icon:<FiSettings/>,
        title:"Setting",
        link:"setting",
    },
    {
        Icon:<FiLogOut/>,
        title:"Logout",
        link:"",
    }
]


  return (
    <Box>
      <Box w="90%" m="auto" my="20px">
        <HStack spacing={0} justifyContent={"space-between"}>
          <Box>
            <HStack>
              <Avatar
                mr="20px"
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Box>
                <Heading size="lg">Rohaan Telangur</Heading>
                <HStack color={"gold"} fontSize="20px" spacing={"5px"}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box>
            <Button
              leftIcon={<EditIcon />}
              size="sm"
              borderRadius={0}
              colorScheme="blue"
              variant="outline"
              onClick={()=>{nagigate("/profile/dashboard")}}
            >
              ADD NEW COURSE
            </Button>
          </Box>
        </HStack>
      </Box>
      <Box w={"92%"} borderTop="1px solid" display="flex" flexWrap={"wrap"} m="auto" spacing={0} h="100vh">
        {/* Left Side */}
        <Box w={["50%","50%","20%"]} borderRight={"1px solid"} pt="20px" spacing={"10px"}>
          {SideMenu.map((item, index) => (
            <Button
            my="5px"
              key={index}
              leftIcon={ item.Icon }
              w="100%"
              borderRadius={0}
              justifyContent="left"
              colorScheme="teal"
              variant={index===Active?"solid":"ghost"}
              onClick={()=>HandleCliek(item,index)}
            >
              {item.title}
            </Button>
          ))}
        </Box>
        {/* Right Side */}
        <Box w={["50%","50%","80%"]} >
        {/* <Dashboard/> */}
        <Outlet/>
        
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
