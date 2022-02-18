import React, { useRef } from 'react'
import { View, Animated, PanResponder, PanResponderInstance, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  ball: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 40
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});


export default function PanResponderBall() {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.ball} />
      </Animated.View>
    </View>
  )
}