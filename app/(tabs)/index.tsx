import Button from "@/components/Button";
import Typo from "@/components/Typo";
import ScreenWrapper from "@/components/ScreenWrapper";
import { auth } from "@/config/firebase";
import { colors } from "@/constants/theme";
import { useAuth } from "@/contexts/authContext";
import { signOut } from "firebase/auth";
import { Text, View } from "react-native";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button>
    </ScreenWrapper>
  );
};

export default Home;
