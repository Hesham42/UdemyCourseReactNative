import React from 'react';

import { Text, View, Image } from 'react-native';

import Card from './Card';

import CardSection from './CardSection';

const AlbumDetails = ({ album }) => {
    const { title, artist, url, image, thumbnail_image } = album;
    return (
        <Card>
        <CardSection>
           <View>
           <Image style={styles.thumbnail_Style} source={{ uri: thumbnail_image }} />
           </View>
           <View style={styles.headerContentStyle}>
             <Text > {title} </Text>
             <Text > {artist} </Text>
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

                }
    };

export default AlbumDetails;
