import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function ButtonLarge({ labelButton, onpress }) {

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
    backgroundColor: "transparent",
    width: 260,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F5F5F5',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderEndWidth: 2,
    borderStartWidth: 2
  },
  textLabel: {
    color: '#F5F5F5',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  }
})