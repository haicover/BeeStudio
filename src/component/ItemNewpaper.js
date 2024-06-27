import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ItemNewpaper = ({ imageSource,author, title, publishTime }) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:imageSource}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>By {author}</Text>
                <Text style={styles.publishTime}>{publishTime}</Text>
            </View>
        </View>
    );
};

export default ItemNewpaper;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderRadius: 15,
        width: 290,
        height: 240
    },
    image: {
        width: '100%',
        height: 170,
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    publishTime: {
        color: 'gray',
    },
});
