/* eslint-disable camelcase */
import React from 'react';

import { Text, View, Image } from 'react-native';

import Card from './Card';

import CardSection from './CardSection';

const AlbumDetails = ({ album }) => {
    const { title, artist, url, image, thumbnail_image } = album;
    const { headerTextStyle, thumbnail_Style, headerContentStyle, thumbnail_Container_Style } = styles;
    
    return (
        <Card>
        <CardSection>
           <View style={thumbnail_Container_Style}>
           <Image style={thumbnail_Style} source={{ uri: thumbnail_image }} />
           </View>
           <View style={headerContentStyle}>
             <Text style={headerTextStyle}> {title} </Text>
             <Text style={headerTextStyle} > {artist} </Text>
           </View>
        </CardSection>
       </Card>
      
    );
};
    

 const styles = {
                headerContentStyle: {
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                },
                thumbnail_Style: {
                    height: 50,
                    width: 50,

                },
                thumbnail_Container_Style: {
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                },
                headerTextStyle: {
                    fontSize: 18,
                },
    };

export default AlbumDetails;
