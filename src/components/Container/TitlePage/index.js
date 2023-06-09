import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export function TitlePage({ title }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.text} >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingTop: StatusBar.currentHeight + 5,
    paddingBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Montserrat_400Regular'
  }
})

