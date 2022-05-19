import { Heading, Stack, Button, Text } from "@chakra-ui/react"
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
    <Stack>
      <Heading mb="6">
        Home
      </Heading>
      <Text colorScheme="teal">
        {user?.name}
      </Text>
      <Text colorScheme="teal">
        {user?.email}
      </Text>
      <Button mt="6" colorScheme="teal" onClick={handleSignOut}>
        Sair
      </Button>
    </Stack>
  );
}