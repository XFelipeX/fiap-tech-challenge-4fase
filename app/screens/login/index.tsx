import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Header from '@/components/Header'
export default function Login() {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = () => {
    alert('Login realizado com sucesso!')
    navigation.navigate('PostsList')
  }

  return (
    <>
    <Header/>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>
        Usuário
      </Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
      <Text style={styles.label}>
        Senha
      </Text>
      <TextInput style={[styles.input]}  value={password} onChangeText={setPassword} secureTextEntry/>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  )
}