import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='mountain' imageSource={require('../../assets/mountain.jpg')} score={7}/>
            <ImageDetail title='beach' imageSource={require('../../assets/beach.jpg')} score={8}/>
            <ImageDetail title='forest' imageSource={require('../../assets/forest.jpg')} score={9}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;