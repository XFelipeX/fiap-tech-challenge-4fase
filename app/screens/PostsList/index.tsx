import { ScrollView, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import Header from '@/components/Header'
import Post from '@/components/Post'
import SearchBar from '@/components/SearchBar'

export default function PostsList() {

  const [search, setSearch] = useState<string>('')

  const handleSearch = (text: string) => {
    setSearch(text)
  }

  const posts = [
    {
      id: 1,
      title: 'Título do post de exemplo 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 2,
      title: 'Título do post de exemplo 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 3,
      title: 'Título do post de exemplo 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 4,
      title: 'Título do post de exemplo 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 5,
      title: 'Título do post de exemplo 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 6,
      title: 'Título do post de exemplo 6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor, congue vestibulum eus et dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum purus non feugiat. In tincidunt erat leo, eget bibendum nunc varius eget. Pellentesque ipsum tortor.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    }
  ]

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
  )
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
          <Post key={post.id} post={ post }/>
        ))}
      </ScrollView>
    </>
  )
}