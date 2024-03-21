import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function locais(props) {
  return (
    <View>
      <TouchableOpacity>
        <Image style={styles.img} source={props.img} />
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 15,
            alignItems: "center"
          }}
        >
          <Entypo name="location-pin" size={20} color="black" /> {props.texto}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 250,
    width: 170,
    borderRadius: 20,
    margin: 10
  }
});
