import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black
  });
  if (!fontsLoaded) {
    return <Text>Carregando Fontes...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Descubra a maravilhas do mundo</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.botaoText}>Descubra</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../../assets/motocros.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b7b6b681",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    color: "#2f2f2f",
    fontFamily: "Montserrat_700Bold",
    width: 200,
    marginLeft: -100
    // marginTop: -290
  },
  botao: {
    backgroundColor: "#05b3c3c2",
    padding: 20,
    borderRadius: 50,
    marginLeft: -200,
    marginTop: 30
  },
  botaoText: {
    color: "#fff",
    fontSize: 16
  },
  image: {
    height: 500,
    width: 400,
    resizeMode: "cover",
    marginBottom: -200,
    marginLeft: -95
  }
});
