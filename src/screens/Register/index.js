import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Input from '../../components/Input'
import ButtonLarge from '../../components/Buttons/ButtonLarge';
import ButtonOutline from '../../components/Buttons/ButtonOutline';

export function ScreenRegister({ navigation }) {

  function openScreen() {
    navigation.navigate('Login')
  }

  function openScreenTerms() {
    navigation.navigate('Terms')
  }

  const [isSelected, setSelection] = useState(false);

  return (
    <LinearGradient colors={['#7EF29D', '#0F68A9']}
      style={styles.container}>

      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../../assets/img/logobg.png')} />
      </View>

      <View style={styles.containerInputs}>
        <Input placeholder={'Nome'} type={'text'} />
        <Input placeholder={'E-mail'} type={'email'} />
        <Input placeholder={'Senha'} password={true} />
        <Input placeholder={'Confirmar Senha'} password={true} />
      </View>

      <View style={styles.containerTermsAndConditions}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          color={isSelected ? '#44c287' : '#fff'}
        />

        <View style={styles.containerText}>
          <Text style={styles.textStyle} >Aceito os </Text>
          <Text onPress={openScreenTerms} style={styles.underlineTextStyle}>
            termos e condições!
          </Text>


        </View>

      </View>

      <View style={styles.button}>
        <ButtonLarge labelButton={'Criar Conta'} />
        <ButtonOutline labelButton={'Já tenho conta, fazer login'} onpress={openScreen} />
      </View>

    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'white',
    flex: 1,
    backgroundColor: '#3B9FA4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    margin: 50
  },
  logo: {
    width: 150,
    height: 148,
  },
  button: {
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerInputs: {
    alignItems: 'center',
    marginBottom: 40
  },

  containerTermsAndConditions: {
    flexDirection: 'row',
    marginBottom: 40
  },
  containerText: {
    marginLeft: 10,
    flexDirection: 'row'
  },

  underlineTextStyle: {
    color: 'white',
    textDecorationLine: 'underline'
  },
  textStyle: {
    color: 'white',
  }


});