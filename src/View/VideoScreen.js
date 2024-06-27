import { View, Text, SafeAreaView, Image, ScrollView, Button, FlatList, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FONT_SIZE from '../../controller/font_size'
import ItemProduct from '../component/ItemProduct'
import Slider from '../component/Slider'
import ItemAlbum from '../component/ItemAlbum'
import ItemWeddingDress from '../component/ItemWeddingDress'
import ItemNews from '../component/ItemNews'
import ItemVideo from '../component/ItemVideo'
import RegisterService from '../component/RegisterService'
import COLOR from '../../controller/color'
import RenderFlatList from '../component/RenderFlatList'

const VideoScreen = () => {
    const [data, setData] = useState([
        {
            id: "1",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/04/phong-cach-chup-hinh-cuoi.jpg",
            describe: "Khám phá bộ ảnh cưới Nha Trang với phong cách độc đáo, tạo nên những hình ảnh đẹp lung linh và ấn tượng. Chú rể và dâu cùng nhau tạo nên những khoảnh khắc không thể quên trong ngày trọng đại."
        },
        {
            id: "2",
            name: "Bộ ảnh cưới Nha Trang độc đáo",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/04/concept-chup-hinh-cuoi-o-da-lat-phong-cach-nong-dan.jpg",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
        {
            id: "3",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
        {
            id: "4",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
    ])
    // const RenderFlatList = (data, renderItemComponent, isHorizontal) => (
    //     <FlatList
    //         horizontal={isHorizontal}
    //         style={{ flex: 1, marginTop: 10 }}
    //         data={data}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => renderItemComponent(item)}
    //     />
    // );
    const CustomsButton = ({ children, onPress, styleContainer, styleChildren }) => (
        <TouchableOpacity
            onPress={onPress}
            style={styleContainer}>
            <Text style={styleChildren}>
                {children}
            </Text>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.centerScreen}>
                    <Slider />
                </View>
                {/**Video nổi bật*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title}>
                        Video nổi bật
                    </Text>
                    <RenderFlatList
                        data={data}
                        isHorizontal={false}
                        renderItemComponent={(item) => <ItemVideo item={item} />}
                    />
                </View>
                {/**Register*/}
                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <RegisterService />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    centerScreen: {
        justifyContent: 'center', alignItems: 'center'
    },
    container: {
        width: '100%',
        height: '100%'
    },
    content: {
        fontSize: 15, lineHeight: 30, fontWeight: '500', marginTop: 10, color: COLOR.black, flexWrap: 'wrap'
    },
    title: {
        fontSize: FONT_SIZE.font_size_25, fontWeight: 'bold', color: COLOR.mainStream
    },
    viewItems: { padding: 10, width: '100%' },
    customsButton: {
        width: 100, height: 40, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.mainStream
    }
})

export default VideoScreen