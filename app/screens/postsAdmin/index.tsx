import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useState } from 'react'
import { styles } from './styles'
import { api } from '@/services/api'
import Header from '@/components/Header'
import Post from '@/components/Post'
import SearchBar from '@/components/SearchBar'
import React from 'react'

interface IPost {
  id?: number
  teachername: string
  title: string
  content: string
  createddate: string
}

export default function PostsAdmin() {
  const navigation = useNavigation<any>()
  const [search, setSearch] = useState<string>('')
  const [posts, setPosts] = useState<IPost[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await api.get('/posts');
      setPosts(response.data.posts);

    } catch (error: any) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      setSearch('')
      fetchPosts()
    }, [])
  )

  const handleSearch = (text: string) => {
    setSearch(text)
  }

  const handleDelete = async (postId: number) => {
    if (postId === undefined) return;

    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este post?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              console.log('Excluindo post: ', postId);
              await api.delete(`/posts/${postId}`);
              fetchPosts();
              Alert.alert('Sucesso', 'Post excluído com sucesso');

            } catch (error: any) {
              setError(error.message);
              Alert.alert('Erro', 'Não foi possível excluir o post');
            }
          },
        },
      ]
    );
  }

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
  )

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
  if (filteredPosts.length == 0) {
    return (
      <>
        <Header/>
        <ScrollView style={styles.container}>
          <SearchBar onSearch={handleSearch}/>
          <Text style={styles.feedBackMessage}>Nenhum resultado encontrado</Text>
        </ScrollView>
      </>
    )
  }

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        <SearchBar onSearch={handleSearch}/>

        {filteredPosts.map(post => (
          <>
          <Post adminPage={true} key={post.id} post={ post } onPress={() => navigation.navigate('PostDetail', {post: post})}/>
          <ScrollView contentContainerStyle={styles.containerButtons}>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('PostForm', {post: post})}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(post.id)}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </ScrollView>
          </>
        ))}
        <View style={styles.bottomContainer}></View>
      </ScrollView>
    </>
  )
}