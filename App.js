import { NavigationContainer } from "@react-navigation/native";
import { RootNavegation, RootNavigation } from "./src/Navigation";

export default function App() {
  return (
    //inicia o container de navegação
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
