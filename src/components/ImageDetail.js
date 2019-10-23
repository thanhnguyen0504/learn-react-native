import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const ImageDetail = (props) => {
    const { title, imageSource, score } = props;
    return (
        <View>
            <Image source={imageSource}/>
            <Text>Image {title}</Text>
            <Text>Score {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageDetail;