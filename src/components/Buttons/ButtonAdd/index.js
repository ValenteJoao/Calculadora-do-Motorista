import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export function ButtonAdd({ color, size }) {
  return (
    <View >
      <Ionicons style={styles.icon} name='add-circle' size={90} color={'#28C578'} />
    </View>
  )
}
const styles = StyleSheet.create({
  icon: {
    height: 100,
    position: 'relative',
    bottom: 30,
  }
})

