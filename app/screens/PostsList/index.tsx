import { ScrollView } from 'react-native'
import { styles } from './styles'
import Header from '@/components/Header'
import Post from '@/components/Post'
import SearchBar from '@/components/SearchBar'

export default function PostsList() {

  const postsMock = [
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

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        <SearchBar/>

        {postsMock.map(post => (
          <Post key={post.id} post={ post }/>
        ))}
      </ScrollView>
    </>
  )
}