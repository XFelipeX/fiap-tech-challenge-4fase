import { ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { styles } from './styles'
import Header from '@/components/Header'
import Post from '@/components/Post'
import SearchBar from '@/components/SearchBar'

export default function PostsList() {
  const navigation = useNavigation()
  const [search, setSearch] = useState<string>('')

  const posts = [
    {
      id: 1,
      title: 'Desenvolvimento humano e a evolução das sociedades',
      content: 'O desenvolvimento humano é uma das áreas mais fascinantes e complexas da ciência e da filosofia. Desde os primórdios da nossa espécie, temos evoluído e nos adaptado a uma infinidade de ambientes e desafios, o que nos transformou na espécie dominante no planeta. A jornada de evolução e adaptação que nos trouxe até aqui é marcada por inúmeros avanços e descobertas, seja em termos de tecnologia, medicina, ou organização social, e cada avanço nos impulsionou a buscar ainda mais conhecimento e aprimoramento.\n\nA civilização, como a conhecemos hoje, é fruto de milênios de desenvolvimento intelectual e cultural. Desde as sociedades tribais até as grandes metrópoles modernas, o ser humano tem utilizado suas habilidades de comunicação e inteligência para criar e manter estruturas sociais complexas. A linguagem, por exemplo, desempenha um papel crucial na coesão das sociedades, permitindo que ideias, crenças e conhecimentos sejam transmitidos e aperfeiçoados ao longo do tempo. O surgimento da escrita foi um marco fundamental nesse processo, pois possibilitou o registro e a preservação de informações de uma geração para outra, acelerando o progresso da civilização.\n\nA Revolução Agrícola, que ocorreu há cerca de 10.000 anos, foi um divisor de águas na história da humanidade. Esse período marcou a transição das sociedades nômades de caçadores-coletores para comunidades sedentárias baseadas na agricultura. A domesticação de plantas e animais permitiu o desenvolvimento de excedentes de alimentos, o que, por sua vez, facilitou o crescimento das populações e a formação das primeiras cidades. Com o tempo, essas sociedades agrícolas começaram a se organizar em estruturas políticas e religiosas mais complexas, dando origem às primeiras civilizações, como a Mesopotâmia, o Egito Antigo e o Vale do Indo.\n\nO desenvolvimento tecnológico é outro pilar essencial na evolução da sociedade humana. Desde as ferramentas de pedra utilizadas pelos primeiros hominídeos até os computadores quânticos atuais, o avanço da tecnologia tem transformado profundamente a maneira como vivemos e interagimos com o mundo. A Revolução Industrial, que começou no século XVIII, trouxe inovações como a máquina a vapor, o motor de combustão interna e a eletricidade, impulsionando uma nova era de produção em massa e urbanização. Essa revolução não apenas aumentou a eficiência na produção de bens, mas também alterou drasticamente a estrutura social, com a migração em massa para as cidades e o surgimento de uma nova classe trabalhadora.\n\nNo século XX, a Revolução Digital trouxe uma nova onda de transformações, à medida que computadores e a internet passaram a integrar o cotidiano das pessoas. A digitalização da informação e a conectividade global possibilitaram a criação de uma sociedade baseada no conhecimento, em que o acesso a dados e a capacidade de processá-los são fundamentais para o sucesso. A tecnologia da informação facilitou o surgimento de novas formas de trabalho, comunicação e entretenimento, conectando pessoas de diferentes partes do mundo e permitindo uma troca de ideias e culturas sem precedentes.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 2,
      title: 'Título do post de exemplo 2',
      content: 'O desenvolvimento humano é uma das áreas mais fascinantes e complexas da ciência e da filosofia. Desde os primórdios da nossa espécie, temos evoluído e nos adaptado a uma infinidade de ambientes e desafios, o que nos transformou na espécie dominante no planeta. A jornada de evolução e adaptação que nos trouxe até aqui é marcada por inúmeros avanços e descobertas, seja em termos de tecnologia, medicina, ou organização social, e cada avanço nos impulsionou a buscar ainda mais conhecimento e aprimoramento.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 3,
      title: 'Título do post de exemplo 3',
      content: 'O desenvolvimento humano é uma das áreas mais fascinantes e complexas da ciência e da filosofia. Desde os primórdios da nossa espécie, temos evoluído e nos adaptado a uma infinidade de ambientes e desafios, o que nos transformou na espécie dominante no planeta. A jornada de evolução e adaptação que nos trouxe até aqui é marcada por inúmeros avanços e descobertas, seja em termos de tecnologia, medicina, ou organização social, e cada avanço nos impulsionou a buscar ainda mais conhecimento e aprimoramento.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    },
    {
      id: 4,
      title: 'Título do post de exemplo 4',
      content: 'O desenvolvimento humano é uma das áreas mais fascinantes e complexas da ciência e da filosofia. Desde os primórdios da nossa espécie, temos evoluído e nos adaptado a uma infinidade de ambientes e desafios, o que nos transformou na espécie dominante no planeta. A jornada de evolução e adaptação que nos trouxe até aqui é marcada por inúmeros avanços e descobertas, seja em termos de tecnologia, medicina, ou organização social, e cada avanço nos impulsionou a buscar ainda mais conhecimento e aprimoramento.',
      teacherName: 'Ana azevedo',
      createdDate: '11:00 - 24/09/24',
    }
  ]

  const handleSearch = (text: string) => {
    setSearch(text)
  }

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
          <Post key={post.id} post={ post } onPress={() => navigation.navigate('PostDetail', {post: post})}/>
        ))}
      </ScrollView>
    </>
  )
}