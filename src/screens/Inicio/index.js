import React from 'react'
import { StyleSheet, View } from 'react-native';

import { TitlePage } from '../../components/Container/TitlePage';
import { LargeContainer } from '../../components/Container/LargeContainer';
import { SmallContainer } from '../../components/Container/SmallContainer';
import { DashContainer } from '../../components/Container/DashContainer';

export function Home() {

  return (
    <View style={styles.ContainerSafeArea}>

      <TitlePage title={'Olá João, seja bem vindo!'} />

      <View style={styles.ContainerInfo}>

        <LargeContainer
          textA={'Faltam'}
          textB={'R$ 2.000,00'}
          textC={'para o seu objetivo mensal'} />

        <View style={styles.twoContainer}>

          <SmallContainer textA={'22'} textB={'realizadas nos últimos 7 dias'} />
          <SmallContainer textA={'R$ 122,00'} textB={'Média de Lucro Diária'} />

        </View>

        <DashContainer />

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
  ContainerInfo: {
    alignItems: 'center',
    height: '86%',
    width: '80%',
    paddingTop: 20
  },
  twoContainer: {
    flexDirection: 'row',
    padding: 50,
    width: '100%',
    height: '28%',
    alignItems: 'center',
    justifyContent: 'center',
  },

})