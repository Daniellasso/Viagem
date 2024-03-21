import { Image, ScrollView, StyleSheet, StatusBar, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Locais from "../../components/locais/locais";

export default function Search() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <StatusBar backgroundColor="#05b3c3c2" barStyle="light-content" />
      <View style={{ flexDirection: "row" }}>
        <Locais
          img={require("../../assets/praia.jpg")}
          texto=" santa catarina"
        />
        <Locais
          img={require("../../assets/natacao.jpg")}
          texto=" Florianópolis"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Locais
          img={require("../../assets/escalada.jpg")}
          texto=" Capitólio "
        />
        <Locais img={require("../../assets/neve.jpg")} texto=" Bariloche " />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Locais
          img={require("../../assets/caiaque.jpg")}
          texto=" Santa Branca"
        />
        <Locais
          img={require("../../assets/bicicleta.jpg")}
          texto=" Parque Ibirapuera"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Locais
          img={require("../../assets/sarfe.jpg")}
          texto=" Barra da Tijuca"
        />
        <Locais
          img={require("../../assets/relaxamento.jpg")}
          texto=" Lapônia "
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
