import { View, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'

export default function SearchBar({ onSearch }: { onSearch: (text: string) => void}) {
  const handleInputChange = (text: string) => {
    onSearch(text)
  }

  return (
    <View style={styles.searchBarContainer}>
      <Ionicons name="search" size={25} color="white" />
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        placeholder='Pesquisar Post'
        placeholderTextColor='#B3B3B3'
      />
    </View>
  )
}