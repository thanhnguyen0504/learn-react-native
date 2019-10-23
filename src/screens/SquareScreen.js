import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const adjustColor = (color, change) => {
        // change = -15, +15
        switch (color) {
            case 'Red':
                if (red + change > 255 || red + change < 0 ) {
                    break;
                } else {
                    setRed(red + change);
                }
                break;
            case 'Green':
                if (green + change > 255 || green + change < 0 ) {
                    break;
                } else {
                    setGreen(green + change);
                }
                break;
            case 'Blue':
                if (blue + change > 255 || blue + change < 0 ) {
                    break;
                } else {
                    setBlue(blue + change);
                }
                break;
            default:
                break;
        }
        console.log(`rgb(${red}, ${green}, ${blue})`);

    }

    return (
        <View>
            <View>
                <ColorCounter color='Red' adjustColor={adjustColor}/>
                <ColorCounter color='Green' adjustColor={adjustColor}/>
                <ColorCounter color='Blue' adjustColor={adjustColor}/>
            </View>
            <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SquareScreen;