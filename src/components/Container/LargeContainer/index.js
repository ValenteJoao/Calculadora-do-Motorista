import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function LargeContainer({ textA, textB, textC }) {
  return (
    <View style={styles.LargeContainer}>
      <Text style={styles.text}>{textA}</Text>
      <Text style={styles.textBold}>{textB}</Text>
      <Text style={styles.text}>{textC}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  LargeContainer: {
    padding: 50,
    marginBottom: 20,
    width: '100%',
    height: '32%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    shadowColor: "#000",
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    width: 160,
    fontFamily: 'Montserrat_400Regular'
  },
  textBold: {
    textAlign: 'center',
    fontSize: 38,
    fontFamily: 'Montserrat_700Bold'
  }
})