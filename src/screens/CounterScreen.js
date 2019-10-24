import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {

  switch (action.type) {
    case 'increase':
      return {...state, count: state.count + action.payload };
    case 'decrease':
      return {...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  const Increase = () => {
    dispatch({type: 'increase', payload: 1});
  };

  const Decrease = () => {
    dispatch({type: 'decrease', payload: 1});
  };

  return (
    <View>
      <Button title='Increase' onPress={Increase}/>
      <Button title='Decrease' onPress={Decrease}/>
      <Text>Current Count: {state.count}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default CounterScreen;
