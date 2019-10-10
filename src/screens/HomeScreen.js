import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  screens = [
    {
      id: 1,
      screen: "CounterScreen"
    }, {
      id: 2,
      screen: "TodoScreen"
    }
  ]


  constructor(props) {
    super(props)
  }
  render() {

    return (
      <View>
        <FlatList
          data={this.screens}
          renderItem={({ item }) => { return this.listRenderer(item) }}
        />
      </View >
    );
  }
  listRenderer = (item) => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate(item.screen) }}>
        <Text> {item.screen} </Text>
      </TouchableOpacity>
    )
  }
}




