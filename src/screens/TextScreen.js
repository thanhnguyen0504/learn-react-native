import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const onTextChange = (text) => {
        setName(text);
    };

    return (
        <View>
            <Text>Enter name: </Text>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTextChange} 
                value={name} 
                style={styles.input}
            />
            <Text>My name is {name}</Text>
        </View>
    );
};

export default TextScreen;

const styles = StyleSheet.create({
   input: {
        margin: 15,
        borderColor: 'grey',
        borderWidth: 1
   } 
});