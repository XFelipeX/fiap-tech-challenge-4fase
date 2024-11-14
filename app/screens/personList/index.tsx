import { ScrollView, View, Text, TouchableOpacity  } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import Header from '@/components/Header'

export default function PersonList({ route }) {
  const navigation = useNavigation()
  const isTeacher = route.params?.isTeacher

  function redirectPersonForm(selectedPerson) {
    if (isTeacher) navigation.navigate('PersonForm', {person: selectedPerson, isTeacher: isTeacher});
    else navigation.navigate('PersonForm', {person: selectedPerson, isTeacher: isTeacher});
  }

  const persons = [
    {
      id: 1,
      email: 'felipe@fiap.com.br',
      name: 'Felipe',
      password: 'senha@123',
    },
    {
      id: 2,
      email: 'sergio@fiap.com.br',
      name: 'Sérgio',
      password: 'senha@123',
    },
    {
      id: 3,
      email: 'thiago@fiap.com.br',
      name: 'Thiago',
      password: 'senha@123',
    },
  ]

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        {persons.map(person => (
          <View style={styles.personContainer} key={person.id}>
            <Text style={styles.personName}>{ person.name }</Text>
            <View style={styles.lineStyle}></View>

            <View style={styles.buttonDiv}>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.buttonText} onPress={() => redirectPersonForm(person)}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  )
}