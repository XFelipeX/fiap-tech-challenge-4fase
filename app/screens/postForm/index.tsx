import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Formik } from 'formik'
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
  const { post } = route.params as { post: IPost } || {}

  const updatePost = (values: IFormPost) => {
    console.log('Atualizando post')
    console.log(values)
  }

  const createPost = (values: IFormPost) => {
    console.log('Criando post')
    console.log(values)
  }

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.title}>{ post ? 'Editar Post' : 'Criar Post' }</Text>
        <Formik
          initialValues={{ title: '', author: '', content: '' }}
          onSubmit={(values) => post ? updatePost(values) : createPost(values)}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
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
              <Text style={styles.label}>Autor</Text>
              <TextInput
                name="author"
                style={styles.input}
                onChangeText={handleChange('author')}
                onBlur={handleBlur('author')}
                value={values.author}
                keyboardType='default'
              />
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
              <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
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