// https://rallycoding.herokuapp.com/api/music_albums
import React, { Component } from 'react';

import { Text, View } from 'react-native';

// const AlbumList = () => {
class AlbumList extends Component {
    componentWillMount() {   
        console.log('componentWillMount in AlbumList');
        debugger;
    }

    render() {
    return (
         <View>
            <Text>AlbumList</Text>
         </View>
        );
}
    
}

export default AlbumList;
