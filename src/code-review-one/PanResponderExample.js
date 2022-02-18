import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ball from "./Ball";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const PanResponderExample = () => {
  React.useEffect(() => {
    setInterval(() => {
      for (let i = 0; i < 6000; i++) {
        console.log("Busy!");
      }
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
};

export default PanResponderExample;
