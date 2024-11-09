import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PostsList from '@/app/screens/PostsList'
import PostDetail from '@/app/screens/postDetail'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="PostsList" component={PostsList} />
      <Screen name="PostDetail" component={PostDetail} />
    </Navigator>
  )
}