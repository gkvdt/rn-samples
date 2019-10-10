import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { addTodo } from '../redux/actions/todo'

import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler';


class TodoScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: "",
        }
        this._addTodo = this._addTodo.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <TextInput value={this.state.todo} style={styles.input} onChangeText={e => this.setState({ todo: e })} />
                    <TouchableOpacity onPress={this._addTodo} >
                        <Ionicons name="ios-add" size={42} color="black" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.todos}
                    renderItem={({ item }) => this._renderItem(item)}
                />
            </View>
        )
    }
    _addTodo() {
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ""
        })
    }

    _renderItem = (item) => {
        console.warn(item)
        return (
            <Text>{item}</Text>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputArea: {
        flexDirection: 'row',
        margin: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 1,
        margin: 12

    }
})

mapStateToProps = state => {
    return {
        todos: state.todo
    }
}

mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen)