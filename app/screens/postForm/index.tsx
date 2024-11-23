import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { styles } from './styles'
import Header from '@/components/Header'

interface IPost {
  id: number,
  title: string,
  content: string,
  teacherName: string,
  createdDate: string,
}

interface IFormPost {
  title: string,
  author: string,
  content: string
}

export default function PostForm() {
  const route = useRoute()
  const navigation = useNavigation<any>()
  const { post } = route.params as { post: IPost } || {}
  let initialValues = { title: '', author: '', content: '' }

  if (post) {
    initialValues = {
      title: post.title,
      author: post.teacherName,
      content: post.content
    }
  } 

  const updatePost = (values: IFormPost) => {
    console.log('Atualizando post')
    console.log(values)
  }

  const createPost = (values: IFormPost) => {
    console.log('Criando post')
    console.log(values)
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

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.title}>{ post ? 'Editar Post' : 'Criar Post' }</Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => post ? updatePost(values) : createPost(values)}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
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
              {errors.title &&
                <Text style={styles.errorMessage}>{errors.title}</Text>
              }
              <Text style={styles.label}>Autor</Text>
              <TextInput
                name="author"
                style={styles.input}
                onChangeText={handleChange('author')}
                onBlur={handleBlur('author')}
                value={values.author}
                keyboardType='default'
              />
              {errors.author &&
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
              {errors.content &&
                <Text style={styles.errorMessage}>{errors.content}</Text>
              }
              <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()} disabled={!isValid}>
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