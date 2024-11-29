import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { styles } from './styles'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import React from 'react'

interface IPerson {
  id: number,
  email: string,
  name: string,
  password: string
}

export default function PersonForm({ route }) {
  const person = route.params?.person as IPerson || undefined;
  const isTeacher = route.params?.isTeacher
  const [personType, setPersonType] = useState('')

  const getInitialValues = () => {
    if (!person) {
      return { email: '', name: '', password: '', confirmPassword: '' }

    } else {
      if (isTeacher) {
        return { email: person.email, name: person.name, password: person.password, confirmPassword: '' }
  
      } else {
        return { email: person.email, name: person.name }
      }
    }
  }

  const getValidationSchema = () => {
    if (isTeacher) {  
      return yup.object().shape({
        email: yup
          .string()
          .email('Por favor, insira um email válido.')
          .required('Por favor, informe um email.'),
        name: yup
          .string()
          .required('Por favor, informe o nome do professor.'),
        password: yup
          .string()
          .min(8, ({ min }) => `A senha precisa ter pelo menos ${min} caracteres.`)
          .required('Por favor, insira a senha.'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais.')
          .required('Por favor, confirme a senha.'),
      })

    } else {  
      return yup.object().shape({
        email: yup
          .string()
          .email('Por favor, insira um email válido.')
          .required('Por favor, informe um email.'),
        name: yup
          .string()
          .required('Por favor, informe o nome do aluno.')
      })
    }
  }
  
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
        <Text style={styles.title}>
          { person ? `Editar ${personType}` : `Adicionar ${personType}` }
        </Text>
        <Formik
          validationSchema={getValidationSchema()}
          initialValues={getInitialValues()}
          onSubmit={(values) => person ? updatePerson(values) : createPerson(values)}
          enableReinitialize
          validateOnBlur={true}
        >
          {({handleChange, setFieldValue, handleBlur, handleSubmit, values, errors, touched}) => (
            <>
              <Text style={styles.label}>Email</Text>
              <TextInput
                name="email"
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />
              {touched.email && errors.email &&
                <Text style={styles.errorMessage}>{errors.email}</Text>
              }
              <Text style={styles.label}>Nome</Text>
              <TextInput
                name="name"
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                keyboardType='default'
              />
              {touched.name && errors.name &&
                <Text style={styles.errorMessage}>{errors.name}</Text>
              }
              {isTeacher && (
                <>
                  <Text style={styles.label}>Senha</Text>
                  <TextInput
                    name="password"
                    style={[styles.input, styles.input]}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                  {touched.password && errors.password &&
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  }
                  <Text style={styles.label}>Confirmar senha</Text>
                  <TextInput
                    name="confirmPassword"
                    style={[styles.input, styles.input]}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry
                  />
                  {touched.confirmPassword && errors.confirmPassword &&
                    <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
                  }
                </>
              )}
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