import { Heading, Stack, Button } from "@chakra-ui/react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../services/firebase";

export function Dashboard() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [user] = useAuthState(auth);

  console.log(user);

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  return (
    <Stack>
      <Heading>
        Home
      </Heading>
      <Button colorScheme="teal" onClick={handleSignOut}>Sair</Button>
    </Stack>
  );
}