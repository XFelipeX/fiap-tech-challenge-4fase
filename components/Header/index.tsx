import { View, Text } from 'react-native'
import { styles } from './styles'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.menu}></View>
      <Text style={styles.logo}>Blog TC</Text>
    </View>
  )
}