import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'


class Screen1 extends React.Component {

    render() {
        return (
            <View>
                <Text>screen 1 </Text>
            </View>
        )
    }
}

class Screen2 extends React.Component {

    render() {
        return (
            <View>
                <Text>screen 2 </Text>
            </View>
        )
    }
}
class Screen3 extends React.Component {

    render() {
        return (
            <View>
                <Text>screen 3 </Text>
            </View>
        )
    }
}



const Nav = createAppContainer(createBottomTabNavigator({
    Screen1,
    Screen2,
    Screen3,
}));

class TabNavigation extends Component {
    render() {
        return (
            <Nav />
        )
    }
}
export default TabNavigation;