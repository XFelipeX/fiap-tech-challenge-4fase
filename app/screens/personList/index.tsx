import { ScrollView, View, Text, TouchableOpacity  } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import Header from '@/components/Header'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

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
        <TouchableOpacity style={styles.addPerson} onPress={() => navigation.navigate('PersonForm', {isTeacher: isTeacher})}>
          <Ionicons name="add" size={30} color="white" />
          <Text style={styles.addPersonText}>{isTeacher ? "Adicionar Professor" : "Adicionar Aluno"}</Text>
        </TouchableOpacity>
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