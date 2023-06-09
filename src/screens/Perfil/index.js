import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { TitlePage } from '../../components/Container/TitlePage';

export function Profile() {

  return (
    <View style={styles.ContainerSafeArea}>

      <TitlePage title={'Perfil'} />

      <View style={styles.ContainerInfo}>

        <View style={styles.LargeContainer}>
          <Text style={styles.text} >Faltam</Text>
          <Text style={styles.textBold}>R$ 2.000,00</Text>
          <Text style={styles.text}>para o seu objetivo mensal</Text>
        </View>

        <View style={styles.twoContainer}>

          <View style={styles.SmallContainer}>
            <Text style={styles.textBold} >22</Text>
            <Text style={styles.text} >corridas realizadas nos últimos 7 dias</Text>
          </View>

          <View style={styles.SmallContainer}>
            <Text style={styles.textBoldSmall} >R$ 122,00</Text>
            <Text style={styles.text} >Média de Lucro Diária</Text>
          </View>

        </View>

        <View style={styles.LargeContainer}>
          <Text style={styles.textBold} >R$ 550,00</Text>
          <Text style={styles.text}>Lucro total da semana</Text>
        </View>

      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  ContainerSafeArea: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    width: '100%',
    alignItems: 'center',

  },
  ContainerWelcome: {
    paddingTop: StatusBar.currentHeight + 5,
    paddingBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    elevation: 5,
  },
  ContainerInfo: {
    alignItems: 'center',
    height: '90%',
    width: '80%'
  },
  LargeContainer: {
    padding: 50,
    margin: 20,
    width: '100%',
    height: '28%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    shadowColor: "#000",
    elevation: 5,
  },
  twoContainer: {
    flexDirection: 'row',
    padding: 50,
    width: '100%',
    height: '28%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SmallContainer: {
    borderRadius: 40,
    backgroundColor: 'white',
    width: '62.5%',
    margin: '2.5%',
    height: '160%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    width: 160,
    fontFamily: 'Montserrat_400Regular'
  },
  textBold: {
    textAlign: 'center',
    fontSize: 42,
    fontFamily: 'Montserrat_700Bold'
  },
  textBoldSmall: {
    width: 160,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold',
  }
})