import { ScrollView, Text } from 'react-native'
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

export default function PostsList() {
  const navigation = useNavigation()
  const [search, setSearch] = useState<string>('')
  const [posts, setPosts] = useState<IPost[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useFocusEffect(
    React.useCallback(() => {
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

      setSearch('')
      fetchPosts()
    }, [])
  )

  const handleSearch = (text: string) => {
    setSearch(text)
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
          <Post adminPage={false} key={post.id} post={ post } onPress={() => navigation.navigate('PostDetail', {post: post})}/>
        ))}
      </ScrollView>
    </>
  )
}