import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { Formik } from 'formik'
import * as yup from 'yup'
import { styles } from './styles'
import { api } from '@/services/api'
import Header from '@/components/Header'
import React from 'react'

interface IPost {
  id: number,
  title: string,
  content: string,
  teachername: string,
  createddate: string,
}

interface IFormPost {
  title: string,
  author: string,
  content: string
}

interface IOptionsData {
  value: string
  label: string
}

export default function PostForm() {
  const route = useRoute()
  const navigation = useNavigation<any>()
  const { post } = route.params as { post: IPost } || {}
	const [options, setOptions] = useState<IOptionsData[]>([])
	const [error, setError] = useState<string | null>(null)
  let initialValues = { title: '', author: '', content: '' }
  
  if (post) {
    initialValues = {
      title: post.title,
      author: post.teachername,
      content: post.content
    }
  }
  
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get('/teachers');
				const teachers = response.data.map((teacher: { name: any; id: any; }) => ({
					label: teacher.name,
					value: teacher.id
				}))
				setOptions(teachers)

      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchTeachers();
  }, [])

  const updatePost = async (values: IFormPost) => {
    const { title, author, content } = values
		
		try {
			await api.put(`/posts/${post.id}`, {
				title: title,
				teacherId: author,
				content: content
			});
      navigation.navigate('PostsAdmin')

		} catch (error: any) {
			setError(error.message)
		}
  }

  const createPost = async (values: IFormPost) => {
    const { title, author, content } = values
		
		try {
			await api.post('/posts', {
				title: title,
				teacherId: author,
				content: content
			});
			navigation.navigate('PostsList')

		} catch (error: any) {
			setError(error.message)
		}
  }

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required('Por favor, informe um título.'),
    author: yup
      .string()
      .required('Por favor, informe o autor.'),
    content: yup
      .string()
      .max(4000, ({ max }) => `O maximo de caracteres para um post é de ${max}.`)
      .required('Por favor, insira o conteúdo.'),
  })

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

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.title}>{ post ? 'Editar Post' : 'Criar Post' }</Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => post ? updatePost(values) : createPost(values)}
          enableReinitialize
          validateOnBlur={true}
        >
          {({handleChange, setFieldValue, handleBlur, handleSubmit, values, errors, touched, isValid}) => (
            <>
              <Text style={styles.label}>Título</Text>
              <TextInput
                name="title"
                style={styles.input}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                keyboardType='default'
              />
              {touched.title && errors.title &&
                <Text style={styles.errorMessage}>{errors.title}</Text>
              }
              <Text style={styles.label}>Autor</Text>
              <View style={styles.selectContainer}>
                <RNPickerSelect
                  name="author"
                  style={{
                    inputIOS: styles.selectInput,
                    inputAndroid: styles.selectInput
                  }}
                  placeholder={{
                    label: 'Selecione um autor',
                  }}
                  onValueChange={(value) => setFieldValue('author', value)}
                  onBlur={handleBlur('author')}
                  value={values.author}
                  items={options}
                />
              </View>
              {touched.title && errors.author &&
                <Text style={styles.errorMessage}>{errors.author}</Text>
              }
              <Text style={styles.label}>Conteúdo</Text>
              <TextInput
                name="content"
                multiline={true}
                style={[styles.input, styles.contentInput]}
                onChangeText={handleChange('content')}
                onBlur={handleBlur('content')}
                value={values.content}
                keyboardType='default'
              />
              {touched.title && errors.content &&
                <Text style={styles.errorMessage}>{errors.content}</Text>
              }
              <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()} >
                <Text style={styles.submitButtonText}>{ post ? 'Salvar' : 'Criar Post'}</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <View style={styles.bottomContainer}></View>
      </ScrollView>
      
    </>
  )
}