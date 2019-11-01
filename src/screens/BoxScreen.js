import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 250,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100,
        //position: 'absolute',
        alignSelf: "flex-end",
        // left: 10    
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100
    }

});

export default BoxScreen;