import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'



class Screen1 extends React.Component {
    render() {
        return <Text>Screen1</Text>
    }
}
class Screen2 extends React.Component {
    render() {
        return <Text>Screen2</Text>
    }
}
class Screen3 extends React.Component {
    render() {
        return <Text>Screen3</Text>
    }
}
class Screen4 extends React.Component {
    render() {
        return <Text>Screen4</Text>
    }
}


const Nav = createAppContainer(createDrawerNavigator({
    Screen1,
    Screen2,
    Screen3,
    Screen4
}))

export default class DraverNavigation extends React.Component {

    render() {
        return <Nav />
    }

}