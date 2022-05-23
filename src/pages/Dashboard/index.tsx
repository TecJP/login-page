import { Heading, Stack, Button, Text, Container } from "@chakra-ui/react"
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export function Dashboard() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  return (
    <Stack direction='column'>
      <Container maxW='xl'>
        <Heading maxW='xl' mb="6">
          Home
        </Heading>
        <Text colorScheme="teal">
          {user?.name}
        </Text>
        <Text colorScheme="teal">
          {user?.email}
        </Text>
        <Button width='100%' mt="6" colorScheme="teal" onClick={handleSignOut}>
          Sair
        </Button>
      </Container>
    </Stack>
  );
}