import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const COLOR_INCREMENT = 15;

const ColorCounter = ({ color, adjustColor }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={ () => { adjustColor(color, COLOR_INCREMENT) } }/>
            <Button title={`Decrease ${color}`} onPress={ () => { adjustColor(color, -1 * COLOR_INCREMENT) } }/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ColorCounter;