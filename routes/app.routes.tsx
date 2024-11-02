import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PostsList from '@/app/screens/PostsList'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="PostsList" component={PostsList} />
    </Navigator>
  )
}