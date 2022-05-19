import { FormEvent, useState } from 'react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { Button, Link, Flex, Stack, Text } from '@chakra-ui/react';

import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  async function logIn(event: FormEvent) {
    setLoading(true);
    event.preventDefault();
    if (!(email && password)) {
      setLoading(false);
      alert("Preencha os dados para logar!");
      return;
    } else {
      if (!user) {
        await signIn({ email, password });
      }
    }
    setLoading(false);
    navigate("dashboard");
  }

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
        onSubmit={logIn}
      >
        <Stack spacing="2">
          <Input
            name="E-mail"
            type="email"
            label="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            name="Senha"
            type="password"
            label="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Stack>
        <Button isLoading={loading} type="submit" mt="6" colorScheme="teal">Entrar</Button>
        <Text mt="4" alignSelf="center">Não possui uma conta? <Link color="teal.300" as={ReachLink} to="/signup">Criar conta</Link></Text>
      </Flex>
    </Flex>
  )
}