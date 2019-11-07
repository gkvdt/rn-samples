import { createStackNavigator, createAppContainer } from 'react-navigation'
import CounterScreen from '../screens/CounterScreen'
import HomeScreen from '../screens/HomeScreen'
import TodoScreen from '../screens/TodoScreen'
import AnimationScreen from '../screens/AnimationScreen'
import TabNavigaion from '../screens/TabNavigation'
import DraverNavigation from '../screens/DraverNavigation'
import SwitchNavigation from '../screens/SwitchNavigation'

const stackNavigator = createStackNavigator({
    SwitchNavigation,
    DraverNavigation,
    TabNavigaion,
    HomeScreen,
    CounterScreen,
    TodoScreen,
    AnimationScreen,
})
const RootNavigator = createAppContainer(stackNavigator);
export default RootNavigator;