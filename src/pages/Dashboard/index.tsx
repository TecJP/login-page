import { Heading, Stack, Button, Text, Container, Flex, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  return (
    <Stack w='100vw' h='100vh' direction='column'>
      <Container maxW='70%' h='100%'>
        <Flex w='100%' mb='2' alignItems='center' justifyContent='center'>
          <Heading maxW='xl' mt='2'>
            Home
          </Heading>
          <Spacer />
          <Button mt='2' colorScheme='teal' onClick={handleSignOut}>
            Sair
          </Button>
        </Flex>
        <Text colorScheme='teal'>
          {user?.name}
        </Text>
        <Text colorScheme='teal'>
          {user?.email}
        </Text>
      </Container>
    </Stack >
  );
}