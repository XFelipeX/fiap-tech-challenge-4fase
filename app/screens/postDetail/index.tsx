import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import Header from '@/components/Header'

interface IPost {
  id: number,
  title: string,
  content: string,
  teachername: string,
  createddate: string,
}

export default function PostDetail() {
  const navigation = useNavigation()
  const route = useRoute()
  const { post } = route.params as { post: IPost }

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Por: { post.teachername }</Text>
          <Text style={styles.infoText}>{ post.createddate }</Text>
        </View>
        <Text style={styles.title}>{ post.title }</Text>
        <Text style={styles.content}>{'\t'}{ post.content }</Text>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}