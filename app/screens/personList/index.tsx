import { ScrollView, View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import { styles } from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { api } from '@/services/api'

interface IPerson {
  id: number
  email: string
  name: string
  teachername: string
  teacherid: number
  password: string
}

export default function PersonList({ route }) {
  const navigation = useNavigation()
  const isTeacher = route.params?.isTeacher
  const [people, setPeople] = useState<IPerson[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  function redirectPersonForm(selectedPerson) {
    if (isTeacher) navigation.navigate('PersonForm', {person: selectedPerson, isTeacher: isTeacher});
    else navigation.navigate('PersonForm', {person: selectedPerson, isTeacher: isTeacher});
  }

  const fetchTeachers = async () => {
    setLoading(true)
    try {
      const response = await api.get('/users');
      setPeople(response.data.users)

    } catch (error: any) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  const fetchStudents = async () => {
    setLoading(true)
    try {
      const response = await api.get('/students');
      setPeople(response.data.students);

    } catch (error: any) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  const refreshList = () => {
    if (isTeacher) {
      fetchTeachers()

    } else {  
      fetchStudents()
    }  
  }

  useFocusEffect(
    React.useCallback(() => {
      refreshList()
    }, [isTeacher])
  )

  const deletePerson = async (id: number) => {
    if (id === undefined) return;

    if (isTeacher) {
      Alert.alert(
        'Confirmar exclusão',
        'Tem certeza que deseja excluir este professor?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Excluir',
            style: 'destructive',
            onPress: async () => {
              try {
                const response = await api.get('/users');
                const user = response.data.users.filter((item: { teacherid: number }) => item.teacherid == id)
                await api.delete(`/users/${user[0].id}`)

                await api.delete(`/teachers/${id}`)

                fetchTeachers()
                Alert.alert('Sucesso', 'Professor excluído com sucesso');
  
              } catch (error: any) {
                setError(error.message);
                Alert.alert('Erro', 'Não foi possível excluir o professor');
              }
            },
          },
        ]
      );

    } else {
      Alert.alert(
        'Confirmar exclusão',
        'Tem certeza que deseja excluir este aluno?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Excluir',
            style: 'destructive',
            onPress: async () => {
              try {
                await api.delete(`/students/${id}`)
                fetchStudents()
                Alert.alert('Sucesso', 'Aluno excluído com sucesso');
  
              } catch (error: any) {
                setError(error.message);
                Alert.alert('Erro', 'Não foi possível excluir o aluno');
              }
            },
          },
        ]
      );
    }
  }

  if (loading) {
    return (
      <>
        <Header/>
        <ScrollView style={styles.container}>
          <Text style={styles.feedBackMessage}>Carregando...</Text>
        </ScrollView>
      </>
    )
  }
  if(error) {
    return (
      <>
        <Header/>
        <ScrollView style={styles.container}>
          <Text style={styles.feedBackMessage}>Error: {error}</Text>
        </ScrollView>
      </>
    )
  }

  const renderUser = (item: IPerson) => (
      <View style={styles.personContainer} key={item.id}>
        <Text style={styles.personName}>{isTeacher ? item.teachername : item.name }</Text>
        <View style={styles.lineStyle}></View>

        <View style={styles.buttonDiv}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText} onPress={() => redirectPersonForm(item)}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deletePerson(isTeacher ? item.teacherid : item.id)}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
  )

  return (
    <>
      <Header/>
      <FlatList
        style={styles.container}
        data={people}
        renderItem={({item}) => renderUser(item)}
        ListHeaderComponent={(
          <TouchableOpacity style={styles.addPerson} onPress={() => navigation.navigate('PersonForm', {isTeacher: isTeacher})}>
            <Ionicons name="add" size={30} color="white" />
            <Text style={styles.addPersonText}>{isTeacher ? "Adicionar Professor" : "Adicionar Aluno"}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={(
          <View style={styles.bottomContainer}></View>
        )}
      />
    </>
  )
}