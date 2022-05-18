import { Link as ReachLink } from 'react-router-dom';
import { Button, Link, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../../components/Input';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

export function SignIn() {
  const [user, error, loading] = useAuthState(auth);

  console.log(user);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="teal.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="2">
          <Input name="E-mail" type="email" label="E-mail" />
          <Input name="Senha" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="teal">Entrar</Button>
        <Link as={ReachLink} to="/signup" mt="4" alignSelf="center">Criar conta</Link>
      </Flex>
    </Flex>
  )
}