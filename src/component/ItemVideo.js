import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLOR from '../../controller/color'
import FONT_SIZE from '../../controller/font_size'

const ItemVideo = ({ item }) => {
    return (
        <View style={{ width: '100%', backgroundColor: 'white', height: 'auto', justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.white, elevation: 10, shadowColor: COLOR.gray, marginBottom: 10, borderRadius: 20 }}>
            <ImageBackground
                style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 20,
                    justifyContent: 'center', alignItems: 'center'
                }}
                source={
                    {
                        uri: item.image
                    }
                }
            >
                <TouchableOpacity style={{}}>
                    <Image
                        style={{ width: 60, height: 60 }}
                        source={
                            require('../img/play.png')}>
                    </Image>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{ flexWrap: 'nowrap', padding: 10 }}>
                <Text style={{ textAlign: 'center', color: COLOR.mainStream, fontSize: FONT_SIZE.font_size_16, fontWeight: '600' }}>{item.name}</Text>
            </View>
        </View>
    )
}

export default ItemVideo