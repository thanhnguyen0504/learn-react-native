import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  let [colors, setColors] = useState([]);

  const AddColor = () => {
    setColors([...colors, randomRgb()]);
  };

  const renderItemFnc = ({ item }) => {
    return <View style={{height: 100, width: 100, backgroundColor: item}} />;
  };

  return (
    <View>
      <Button title='Add a color' onPress={AddColor}/>
      <FlatList
        keyExtractor={(item) => { return item }}
        data={colors}
        renderItem={renderItemFnc}
      />
    </View>
  )
};

const randomRgb =() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
  
});

export default ColorScreen;
