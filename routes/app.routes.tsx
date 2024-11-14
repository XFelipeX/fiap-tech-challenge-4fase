import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PostsList from '@/app/screens/PostsList'
import PostDetail from '@/app/screens/postDetail'
import Login from '@/app/screens/login'
import PostsAdmin from "@/app/screens/postsAdmin"
import PostForm from "@/app/screens/postForm"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="PostsAdmin" component={PostsAdmin} />
      <Screen name="PostsList" component={PostsList} />
      <Screen name="PostDetail" component={PostDetail} />
      <Screen name="PostForm" component={PostForm} />
    </Navigator>
  )
}