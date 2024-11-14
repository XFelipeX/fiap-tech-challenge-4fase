import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PostsList from '@/app/screens/PostsList'
import PostDetail from '@/app/screens/postDetail'
import Login from '@/app/screens/login'
import PersonList from '@/app/screens/personList'
import PersonForm from '@/app/screens/personForm'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="PostsList" component={PostsList} />
      <Screen name="PostDetail" component={PostDetail} />
      <Screen name="PersonList" component={PersonList} />
      <Screen name="PersonForm" component={PersonForm} />
    </Navigator>
  )
}