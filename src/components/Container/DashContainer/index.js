import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function DashContainer() {
  return (

    <View style={styles.container}>

      <Text style={styles.textTitle}>
        Resumo do Mês de Maio de 2023
      </Text>

      <View style={styles.containerB}>
        <View style={styles.borderContainer}>

          <Text style={styles.textInfo}>
            Rendimento
          </Text>

          <Text style={styles.textCash}>
            1.500,00
          </Text>

        </View>

        <View style={styles.borderContainer}>

          <Text style={styles.textInfo}>
            Recebimentos
          </Text>

          <Text style={styles.textCash}>
            3.000,00
          </Text>

        </View>

        <View>
          <Text style={styles.textInfo}>
            Despesas
          </Text>

          <Text style={styles.textCash}>
            1.500,00
          </Text>

        </View>

      </View>

      <View style={styles.ButtonDetalhe} >
        <Text style={styles.textButton}>
          Toque para ver mais detalhes
        </Text>
      </View>


    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 40,
    shadowColor: 'black',
    elevation: 5
  },
  containerB: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  borderContainer: {
    borderRightColor: '#2222',
    borderRightWidth: 1,
    paddingRight: 20
  },
  ButtonDetalhe: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#1D7AA7',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  textTitle: {
    marginTop: 40,
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold'
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold'
  },
  textCash: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold'
  },
  textInfo: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular'
  }

})
