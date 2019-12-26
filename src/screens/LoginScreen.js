import React from 'react';
import { Animated, Keyboard, Text, StyleSheet, View, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';


export default class LoginScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container} onPress={Keyboard.dismiss} >
                <KeyboardAvoidingView behavior="padding" style={styles.kav} enabled >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                        <Animated.View style={styles.loginCard} >
                            <View style={styles.logo}>
                                <Text>logo</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput style={styles.input}  />
                                <TextInput style={styles.input} />
                            </View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    kav: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
    },
    loginCard: {

    },
    logo: {},
    inputBox: {
    },
    input: {
        margin: 8,
        backgroundColor: 'red'
    },
})
