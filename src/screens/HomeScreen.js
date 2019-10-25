import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const { navigate } = navigation;

  const buttonPress = () => {
    navigate('Component');
  };

  const touchablePress = () => {
    navigate('List');
  };

  const gotoImageList = () => {
    navigate('ImageList');
  };

  const gotoCounter = () => {
    navigate('CounterScreen');
  };

  const gotoColorScreen = () => {
    navigate('ColorScreen');
  };

  const gotoSquareScreen = () => {
    navigate('SquareScreen');
  };

  const gotoSquareScreenSecond = () => {
    navigate('SquareScreenSecond');
  };

  const gotoTextScreen = () => {
    navigate('TextScreen');
  };
  
  const gotoBoxScreen = () => {
    navigate('BoxScreen');
  };  

  return (
    <View>
      <Text>Home</Text>
      <Button styles={styles.buttonStyle} onPress={buttonPress} title="Go to component demo "/>
      <Button styles={styles.buttonStyle} onPress={touchablePress} title="Go to list demo "/>
      <Button styles={styles.buttonStyle} onPress={gotoImageList} title="Go to image list "/>
      <Button styles={styles.buttonStyle} onPress={gotoCounter} title="Go to counter screen "/>
      <Button styles={styles.buttonStyle} onPress={gotoColorScreen} title="Go to color screen "/>
      <Button styles={styles.buttonStyle} onPress={gotoSquareScreen} title="Go to square screen "/>
      <Button styles={styles.buttonStyle} onPress={gotoSquareScreenSecond} title="Go to square 2nd "/>
      <Button styles={styles.buttonStyle} onPress={gotoTextScreen} title="Go to text screen "/>
      <Button styles={styles.buttonStyle} onPress={gotoBoxScreen} title="Go to box screen "/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    marginVertical: 15
  }
});

export default HomeScreen;
