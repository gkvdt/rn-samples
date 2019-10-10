import { createStackNavigator, createAppContainer } from 'react-navigation'
import CounterScreen from '../screens/CounterScreen'
import HomeScreen from '../screens/HomeScreen'
import TodoScreen from '../screens/TodoScreen'

const stackNavigator = createStackNavigator({
    HomeScreen,
    CounterScreen,
    TodoScreen
})
const RootNavigator = createAppContainer(stackNavigator);
export default RootNavigator;