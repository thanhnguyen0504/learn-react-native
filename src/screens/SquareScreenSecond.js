import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounterSecond';

const reducer = (state, action) => {
    // state = { red: number, green: number, blue: number }
    // action = {type: 'change_red' || 'change_green' || 'change_blue', payload: number }
    const { red, green, blue } = state;
    const { type, payload } = action;

    switch (type) {
        case 'change_red':
            return red + payload > 255 || red + payload < 0 
                ? state 
                : {...state, red: red + payload};
        case 'change_green':
            return green + payload > 255 || green + payload < 0 
                ? state
                : {...state, green: green + payload}
        case 'change_blue':
            return blue + payload > 255 || blue + payload < 0
                ? state
                : {...state, blue: blue + payload};
        default:
            return state;
    }

};

const SquareScreenSecond = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue} = state;

    const adjustColor = (colorChange, amount) => dispatch({type: colorChange, payload: amount});

    return (
        <View>
            <View>
                <ColorCounter color='red' adjustColor={adjustColor}/>
                <ColorCounter color='green' adjustColor={adjustColor}/>
                <ColorCounter color='blue' adjustColor={adjustColor}/>
            </View>
            <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SquareScreenSecond;