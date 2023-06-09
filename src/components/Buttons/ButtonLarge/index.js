import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function ButtonOutline({ labelButton, onpress }) {

  const [fontLoad] = useFonts({
    Montserrat_700Bold
  });

  if (!fontLoad) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={.7} style={styles.button}
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
    width: 200,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textLabel: {
    color: '#1D7AA7',
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
  }
})