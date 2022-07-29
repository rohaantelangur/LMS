import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { LOGIN_SUCCESS } from "../Redux/Auth/actionType";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  const loginHandler = () => {
    if (username && password) {
      const params = {
        username,
        password,
      };
      dispatch(Login(params)).then((res) => {
        if (res === LOGIN_SUCCESS) {
          navigate("/", { replace: true });
        } else {
          //err
        }
      });
    }
  };
  return (
    <Box>
      <Box display="flex" width="80%" margin="auto">
        <Box width="50%">
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
              width={"80%"}
              px={6}
              p={"2rem"}
              textAlign="left"
            >
              <Text color="green.300" fontWeight={"bold"} fontSize="10px">
                BUY COURSES ONLINE
              </Text>
              <Stack spacing={6}>
                <Heading fontSize={"5xl"}>Create Impact</Heading>
                <Heading fontSize={"2xl"} color="gray.500">
                  Create Impact Learn real skills from top tech instructors
                </Heading>
                <Button
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  width="300px"
                  backgroundColor="green.400"
                  p="25px"
                  borderRadius="40px"
                  ml="37%"
                  onClick={loginHandler}
                >
                  <Link ml={2}>Book a FREE live class. NOW!</Link>
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <img
                  width="120px"
                  src="https://assets.scaler.com/assets/scaler_branding/webp/scaler-academy-d5df043846b1b8943ef921631f7cc79828a24f71cefef28287d43c12aa439507.webp.gz"
                  alt=""
                />
                <img
                  width="100px"
                  src="https://assets.scaler.com/assets/scaler_branding/webp/scaler-data-science-fddff860d0d80dd2eddbdaf0fd0a586c1897825f7e4efef900e76b01428c6d23.webp.gz"
                  alt=""
                />
                <img
                  width="100px"
                  src="https://assets.scaler.com/assets/scaler_branding/webp/scaler-neovarsity-2998244f3636cfd64256f9c186a7d96695097d5eb4fc965ca753433fc7c0aba8.webp.gz"
                  alt=""
                />
                <img
                  width="100px"
                  src="https://assets.scaler.com/assets/scaler_branding/webp/scaler-topics-068619f855161b21dd1cd92d172cf188f255573fd5a3ffdece352bd37eac8a00.webp.gz"
                  alt=""
                />
              </Stack>
            </Stack>
          </Flex>
        </Box>
        <Box width="50%">
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
              width={"87%"}
              px={6}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius="30px"
              p={"2rem"}
            >
              <Stack align={"center"}>
                <Heading fontSize={"2xl"}>Log in to TimeCamp</Heading>
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
                      Login With Google
                    </Text>
                  </Button>
                  <Text>Or</Text>
                  <FormControl id="email">
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Email"
                      _focus={{ boxShadow: "none !important" }}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      _focus={{ boxShadow: "none !important" }}
                    />
                  </FormControl>
                  <Box
                    m={4}
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                  >
                    <Link color={"green.400"} m={4}>
                      Forgot password?
                    </Link>
                    <Button
                      color={"white"}
                      _hover={{
                        bg: "green.500",
                      }}
                      width="100px"
                      backgroundColor="green.400"
                      p="25px"
                      borderRadius="50px"
                      ml="37%"
                      // onClick={loginHandler}
                    >
                      {isLoading ? (
                        <p>Please Wait</p>
                      ) : (
                        <p>
                          <RouterLink to="/header">Log In</RouterLink>
                        </p>
                      )}
                    </Button>
                  </Box>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"} color="green.300">
                    <RouterLink to="/auth/register" color={"blue.400"}>
                      No account? Sign up or Log in with SSO
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
