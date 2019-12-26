import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class NavigateScreens extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            screens: [
                {
                    id: 1,
                    name: 'AnimationScreen'
                },{
                    id: 2,
                    name: 'CounterScreen'
                },{
                    id: 3,
                    name: 'DraverNavigation'
                },{
                    id: 4,
                    name: 'HomeScreen'
                },{
                    id: 5,
                    name: 'SwitchNavigation'
                },{
                    id: 6,
                    name: 'TabNavigation'
                },{
                    id: 7,
                    name: 'TodoScreen'
                }
            ]
        }
    }

    itemRender = (item) => {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate(item.name) }} >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Text> Menus</Text>
                <FlatList
                    data={this.state.screens}
                    renderItem={({ item }) => this.itemRender(item)}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({

})