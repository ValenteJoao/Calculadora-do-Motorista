import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function ButtonGoogle({ labelButton, onpress }) {

  const [fontLoad] = useFonts({
    Montserrat_700Bold
  });

  if (!fontLoad) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}
      onPress={onpress}>
      <Text style={styles.textLabel}>
        {labelButton}
      </Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F5F5F5",
    width: 300,
    height: 65,
    borderRadius: 50,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLabel: {
    color: '#1D7AA7',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  }
})