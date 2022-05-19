import { useState, FormEvent } from 'react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { Button, Link, Flex, Stack, Text } from '@chakra-ui/react';

import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';


export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { createUserWithFirebase } = useAuth();
  const navigate = useNavigate();

  async function CreateUser(event: FormEvent) {
    setLoading(true);
    event.preventDefault();
    if (!(name && email && password)) {
      alert("Preencha todos os campos");
    }
    await createUserWithFirebase({
      name,
      email,
      password,
    });
    setLoading(false);
    navigate('/dashboard');
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
        onSubmit={CreateUser}
      >
        <Stack spacing="2">
          <Input
            name="Nome"
            type="text"
            label="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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

        <Button isLoading={loading} type="submit" mt="6" colorScheme="teal">Criar</Button>
        <Text alignSelf="center" mt="4">Já possui conta? <Link as={ReachLink} to="/" color="teal.300">Entrar</Link></Text>
      </Flex>
    </Flex>
  )
}