import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

function Input({ type, placeholder, password }) {

  const [fontLoad] = useFonts({
    Montserrat_400Regular
  });

  if (!fontLoad) {
    return null;
  }
  return (
    <TextInput style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="white"
      secureTextEntry={password}
      keyboardType={type} />


  )
}

const styles = StyleSheet.create({
  input: {
    color: '#F5F5F5',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    height: 50,
    width: 260,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
  },
})

export default Input