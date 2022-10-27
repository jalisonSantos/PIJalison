import { Button, Text, View } from "react-native";
import { style } from "../lib/style";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text> oi eu sou o Home Screen</Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};
