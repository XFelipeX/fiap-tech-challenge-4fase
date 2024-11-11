import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

interface PostProps {
  post: {
    id: number,
    title: string,
    content: string,
    teacherName: string,
    createdDate: string,
  },
  onPress: () => void
}

export default function Post({ post, onPress }: PostProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.postContainer}>
      <Text style={styles.title}>{ post.title }</Text>
      <Text numberOfLines={5} style={styles.content}>{'\t'}{ post.content }</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{ post.teacherName }</Text>
        <Text style={styles.infoText}>{ post.createdDate }</Text>
      </View>
    </TouchableOpacity>
  )
}