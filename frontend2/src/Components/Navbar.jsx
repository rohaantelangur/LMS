import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

const Links = ['All Coures','login','signup', 'dashboard'];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
                <Link to="/">All Courese</Link>
                <Link to="/profile/dashboard">Dashboard</Link>
                <Link to="/auth/login">
                <Button>Login</Button>
                </Link>
                <Link to="/auth/register">
                <Button>Register</Button>
                </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}