import { View, Text } from "react-native";
import { styles } from './styles'

export default function Post({ post }: any) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.title}>{ post.title }</Text>
      <Text numberOfLines={5} style={styles.content}>{'\t'}{ post.content }</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{ post.teacherName }</Text>
        <Text style={styles.infoText}>{ post.createdDate }</Text>
      </View>
    </View>
  )
}