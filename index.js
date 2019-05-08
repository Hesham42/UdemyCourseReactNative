import React from 'react';

import { AppRegistry, View } from 'react-native';

import Header from './src/Components/header';
import AlbumList from './src/Components/AlbumList';


// Create a component 
const Apps = () => (
        <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
        </View>
        
);

// Render it to the decvice 

AppRegistry.registerComponent('UdemyCourse', () => Apps);
