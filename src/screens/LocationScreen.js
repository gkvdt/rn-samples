import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import * as TaskManager from 'expo-task-manager'

import * as firebase from 'firebase';

// Initialize Firebase
export class LocationScreen extends Component {

    constructor(props) {
        super(props);
        const firebaseConfig =  {
            apiKey: "AIzaSyCZAwyyOw1O1zpecUgJz7LoL4zH9biaHiw",
            databaseURL: "https://testt-de2ce.firebaseio.com/",
        };

        firebase.initializeApp(firebaseConfig);
    }
    state = {
        location: null,
        errorMessage: null,
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }



    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        Location.startLocationUpdatesAsync('tt',{
            showsBackgroundLocationIndicator :true,
            foregroundService :{
                notificationTitle :'Hello',
                notificationBody :'Location'
            }
        })

        this.setState({ location });
    };


    render() {
        console.warn('render')
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
        );
    }
}

TaskManager.defineTask('tt', ({ data, error }) => {
    if (error) {
        // Error occurred - check `error.message` for more details.
        return;
    }
    if (data) {
        const { locations } = data;
        console.log(data)
        writeData(data);
    }
});

function writeData(data) {
    const a = Math.floor((Math.random() * 1000) + 1);
  firebase.database().ref('/').set(data);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default LocationScreen
