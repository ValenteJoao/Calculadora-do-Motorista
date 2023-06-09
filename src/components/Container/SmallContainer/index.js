import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export function SmallContainer({ textA, textB }) {
  return (
    <View style={styles.SmallContainer}>
      <Text style={styles.textBold} >{textA}</Text>
      <Text style={styles.text}>{textB}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  SmallContainer: {
    borderRadius: 40,
    backgroundColor: 'white',
    width: '65%',
    margin: '2.5%',
    height: '200%',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    elevation: 5,
  }, text: {
    textAlign: 'center',
    fontSize: 18,
    width: 160,
    fontFamily: 'Montserrat_400Regular'
  },
  textBold: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold'
  }
})
