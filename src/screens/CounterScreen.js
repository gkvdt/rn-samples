import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { increase, descrease } from '../redux/actions/counter'

class CounterScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.descrease}><Text>-</Text></TouchableOpacity>
                <Text>{this.props.count}</Text>
                <TouchableOpacity onPress={this.props.increase}><Text>+</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
        descrease: () => dispatch(descrease())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen)



