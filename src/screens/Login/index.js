import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ButtonLarge from '../../components/Buttons/ButtonLarge';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import Input from '../../components/Input'

export function Screenlogin({ navigation }) {
  function openScreen() {
    navigation.navigate('Register', { name: 'Joao Valente' })
  }

  function openHome() {
    navigation.navigate('Home')
  }

  return (
    <LinearGradient colors={['#7EF29D', '#0F68A9']}
      style={styles.container}>

      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../../assets/img/logobg.png')} />
      </View>

      <View style={styles.containerInputs}>
        <Input placeholder={'E-mail'} type={'email'} />
        <Input placeholder={'Senha'} password={true} />
      </View>

      <View style={styles.containerButtons}>
        <ButtonLarge onpress={openHome} labelButton={'Entrar'} />
        <View style={styles.containerButton}>
          <ButtonOutline labelButton={'Não tenho conta'} onpress={openScreen} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B9FA4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    margin: 100
  },
  containerButtons: {
    alignItems: 'center',
    marginBottom: 65
  },
  containerButton: {
    paddingTop: 70
  },
  containerInputs: {
    alignItems: 'center',
    marginBottom: 40
  },
  logo: {
    width: 150,
    height: 148,
  },

});