import { useState, FormEvent } from 'react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { Button, Link, Flex, Stack } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase';

import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';


export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { createUserWithFirebase } = useAuth();

  async function CreateUser(event: FormEvent) {
    event.preventDefault();
    if (!(name && email && password)) {
      alert("Preencha todos os campos");
    }
    await createUserWithFirebase({
      name,
      email,
      password,
    });
    navigate('/dashboard');
  }

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

        <Button type="submit" mt="6" colorScheme="teal">Criar</Button>
        <Link as={ReachLink} to="/" alignSelf="center" mt="4" >Página de SignIn</Link>
      </Flex>
    </Flex>
  )
}