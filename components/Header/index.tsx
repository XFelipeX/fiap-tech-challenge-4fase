import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { useState } from 'react'

export default function Header() {
  const navigation = useNavigation()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  function navigateToPage(pageName: string) {
    setIsOpen(!isOpen)
    if (pageName == 'posts') navigation.navigate('PostsList');
    if (pageName == 'createPosts') navigation.navigate('PostForm');
    if (pageName == 'postsAdmin') navigation.navigate('PostsAdmin');
    if (pageName == 'teachersAdmin') navigation.navigate('PersonList', {isTeacher: true});
    if (pageName == 'studentsAdmin') navigation.navigate('PersonList', {isTeacher: false});
  }

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu} onPress={() => toggleMenu()}>
          <Image style={styles.menuIcon} source={require('@/assets/images/menu.png')} />
        </TouchableOpacity>
        <Text style={styles.logo}>Blog TC</Text>
      </View>

      {isOpen ?
        <View style={styles.sidebar}>
          <Text style={styles.sidebarItems} onPress={() => toggleMenu()}>X</Text>
          <Text style={styles.sidebarItems} onPress={() => navigateToPage('posts')}>Posts</Text>
          <Text style={styles.sidebarItems} onPress={() => navigateToPage('createPosts')}>Criar Posts</Text>
          <Text style={styles.sidebarItems} onPress={() => navigateToPage('postsAdmin')}>Administrar Posts</Text>
          <Text style={styles.sidebarItems} onPress={() => navigateToPage('teachersAdmin')}>Administrar Professores</Text>
          <Text style={styles.sidebarItems} onPress={() => navigateToPage('studentsAdmin')}>Administrar Alunos</Text>
        </View>
        :
        <View></View>
      }
    </View>
  )
}