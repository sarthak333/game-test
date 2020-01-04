import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import globalStyle from 'global/globalstyle'

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            running: true
        };
    }

    render() {
        return (
            <View style={[styles.container, globalStyle.center]}>
							<Text>asdfas</Text>
					  </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
export default Calculator;
