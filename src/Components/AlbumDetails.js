/* eslint-disable camelcase */
import React from 'react';

import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';

import CardSection from './CardSection';

import Button from './Button';

const AlbumDetails = ({ album }) => {
    const { title, artist, url, image, thumbnail_image } = album;
    const { image_Style, headerTextStyle, thumbnail_Style, headerContentStyle, thumbnail_Container_Style } = styles;
    
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
       
        <CardSection>
       <Image style={image_Style} source={{ uri: image }} />
       </CardSection>

       <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
            {title}
        </Button>
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
                image_Style: {
                    height: 300,
                    flex: 1,
                    width: null,
                },
    };

export default AlbumDetails;
