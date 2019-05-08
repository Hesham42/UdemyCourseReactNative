import React from 'react';

import { Text, TouchableOpacity } from 'react-native';


const Button = () => {

    return (
        <TouchableOpacity onPress={() => console.log('pressed')} style={styles.buttonStyle}>
        <Text style={styles.TextStyle}>Click Me !!!!</Text>
        </TouchableOpacity>
    );
}; 

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,

},
    TextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,

    },

};
export default Button;
