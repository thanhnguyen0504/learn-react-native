import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  let [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Button title='Increase' onPress={Increase}/>
      <Button title='Decrease' onPress={Decrease}/>
      <Text>Current Count: {count}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default CounterScreen;
