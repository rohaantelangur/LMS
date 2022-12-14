import {
  Flex,
  Box,
  FormControl,
  Stack,
  Button,
  Heading,
  Text,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { REGISTER_SUCCESS } from "../Redux/Auth/actionType";
function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "username":
      return {
        ...state,
        username: action.payload,
      };
    case "mobile":
      return {
        ...state,
        mobile: action.payload,
      };
    case "description":
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
}
const initialState = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: 0,
  description: "",
};

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(state);
  const signupHandler = () => {
    dispatch(Register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        navigate("/auth/login", { replace: true });
      }
    });
  };
  console.log(setShowPassword);
  return (
    <Box>
      <Box display="flex" width="80%" margin="auto">
        <Box width="60%">
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            width="100%"
            bg={useColorModeValue("white", "gray")}
          >
            <Stack
              spacing={8}
              mx={"auto"}
              width={"90%"}
              px={6}
              p={"2rem"}
              textAlign="left"
            >
              <Stack spacing={6}>
                <Heading fontSize={"4xl"}>
                  Discover & connect with Alumni who have walked the same path
                  as you
                </Heading>
                <img
                  width="40px"
                  src="https://cdn.timecamp.com/res/css/images/review-icon-signup.1658395296.svg"
                  alt=""
                />
                <Stack direction="row" spacing={3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    width="220px"
                    height="210px"
                  >
                    <Text>
                      2500+ Masai school Lives Transformed And Counting!
                    </Text>
                    <img
                      width="125px"
                      src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658395296.svg"
                      alt=""
                    />
                    <Text>
                      <strong>Emily</strong>, Lead Software Engineer & sales
                      executive
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    width="220px"
                    height="210px"
                  >
                    <Text>
                      Great tool to measure the time dedicated to tasks and
                      projects.
                    </Text>
                    <img
                      width="125px"
                      src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658395296.svg"
                      alt=""
                    />
                    <Text>
                      <strong>Enrique</strong>, Director Operaciones at
                      Consultor
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    width="220px"
                    height="210px"
                  >
                    <Text>
                      It has removed all our worries about tracking time and.
                    </Text>
                    <img
                      width="125px"
                      src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658395296.svg"
                      alt=""
                    />
                    <Text>
                      <strong>Sarah</strong>, Practice Lead at Cloud & Emerging
                      Tech
                    </Text>
                  </Box>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={12}>
                <img
                  width="80px"
                  src="https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg"
                  alt=""
                />
                <img
                  width="80px"
                  src="https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg"
                  alt=""
                />
                <img
                  width="80px"
                  src="https://masai-website-images.s3.ap-south-1.amazonaws.com/homelane_e9cadd0c3c.svg"
                  alt=""
                />
                <img
                  width="80px"
                  src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg"
                  alt=""
                />
              </Stack>
            </Stack>
          </Flex>
        </Box>
        <Box width="40%" mt="70px">
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            width="100%"
            bg={useColorModeValue("white", "gray")}
          >
            <Stack
              spacing={8}
              mx={"auto"}
              width={"95%"}
              px={6}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius="30px"
              p={"2rem"}
            >
              <Stack align={"center"} spacing={4}>
                <Heading fontSize={"4xl"}>Start Learning Now</Heading>
                <Heading fontSize={"2xl"} color="gray">
                  Create an account and start Your Learning online.
                </Heading>
                <Heading fontSize={"md"} color="gray">
                  Start for free boost your carrier
                </Heading>
              </Stack>

              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                p={8}
              >
                <Stack spacing={4} textAlign="center">
                  <Button backgroundColor="white" border="1px solid lightgray">
                    <img
                      width="20px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                      alt=""
                    />
                    <Text ml={4} color="gray.500">
                      Sign up With Google
                    </Text>
                  </Button>
                  <Text>Or</Text>
                  <FormControl id="email">
                    <Input
                      value={state.email}
                      type="email"
                      onChange={(e) =>
                        setter({ type: "email", payload: e.target.value })
                      }
                      placeholder="Email"
                      _focus={{ boxShadow: "none !important" }}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={state.password}
                      onChange={(e) =>
                        setter({ type: "password", payload: e.target.value })
                      }
                      placeholder="Password"
                      _focus={{ boxShadow: "none !important" }}
                    />
                  </FormControl>
                  <FormControl id="phone">
                    <Input
                      type="number"
                      onChange={(e) =>
                        setter({ type: "mobile", payload: e.target.value })
                      }
                      placeholder="phone (optional)"
                      _focus={{ boxShadow: "none !important" }}
                    />
                  </FormControl>
                  <Box
                    m={4}
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                  >
                    <Button
                      color={"white"}
                      _hover={{
                        bg: "green.500",
                      }}
                      width="200px"
                      backgroundColor="green.400"
                      p="25px"
                      borderRadius="50px"
                      ml="22%"
                      onClick={signupHandler}
                    >
                      <Link to="/onboarding">Sign up for free</Link>
                    </Button>
                  </Box>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    By signing up you agree to our{" "}
                    <RouterLink to="/terms" color="green.300">
                      <strong>Terms of Services</strong>
                    </RouterLink>
                    <RouterLink to="/privacy" color="green.300">
                      <strong>Privacy Policy</strong>
                    </RouterLink>
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
