import React from 'react';
import { Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'



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



const Nav = createAppContainer(createSwitchNavigator({
    Screen1,
    Screen2,
    Screen3,
}));

class SwitchNavigation extends React.Component {
    render() {
        return (
            <Nav />
        )
    }
}

export default SwitchNavigation