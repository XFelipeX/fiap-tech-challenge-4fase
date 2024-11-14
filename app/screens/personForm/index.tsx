import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { styles } from './styles'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'

interface IPerson {
  id: number,
  email: string,
  name: string,
  password: string
}

export default function PersonForm({ route }) {
  const person = route.params?.person as { post: IPerson } || {}
  alert(JSON.stringify(person))
  const isTeacher = route.params?.isTeacher
  const [personType, setPersonType] = useState('')

  useEffect(() => {
    setPersonType(isTeacher ? 'Professor' : 'Aluno')
  });

  const updatePerson = (values: IPerson) => {
    console.log('Atualizando professor? ' + isTeacher);
    console.log(values)
  }

  const createPerson = (values: IPerson) => {
    console.log('Criando professor? ' + isTeacher);
    console.log(values)
  }

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.title}>{ person ? `Editar ${personType}` : `Criar ${personType}` }</Text>
        <Formik
          initialValues={{ email: '', name: '', password: '' }}
          onSubmit={(values) => person ? updatePerson(values) : createPerson(values)}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <Text style={styles.label}>Email</Text>
              <TextInput
                name="email"
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='default'
              />
              <Text style={styles.label}>Nome</Text>
              <TextInput
                name="name"
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                keyboardType='default'
              />
              <Text style={styles.label}>Senha</Text>
              <TextInput
                name="password"
                multiline={true}
                style={[styles.input, styles.contentInput]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                keyboardType='default'
              />
              <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
                <Text style={styles.submitButtonText}>{ person ? `Salvar` : `Adicionar ${personType}`}</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <View style={styles.bottomContainer}></View>
      </ScrollView>
      
    </>
  )
}