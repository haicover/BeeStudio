// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Chitiet_dichvu = () => {
//   return (
//     <View>
//       <Text>Chitiet_dichvu</Text>
//     </View>
//   )
// }

// export default Chitiet_dichvu

// const styles = StyleSheet.create({})
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Pressable, TextInput, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Chitiet_dichvu = ({ route, navigation }) => {
    const { album } = route.params;

    return (
        <ScrollView>
            <ImageBackground source={require('../img/gai.jpg')} style={styles.imageBackground}>
                {/* Icon trên cùng */}
                <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image source={require('../img/back.png')} style={{ width: 40, height: 40, margin: 20 }} />
                    </TouchableOpacity>
                    <Image source={require('../img/tim.png')} style={{ width: 40, height: 40, margin: 20 }} />
                </View>
                <View style={styles.overlay}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20, marginLeft: 20, color: "#fff" }}>Chụp ảnh cưới tam đảo chọn gói chỉ với 14tr300k ảnh đẹp như mơ</Text>
                    <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Tây Nguyên _Tam Đảo </Text>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={{ marginLeft: 20 }}>Giá bán:</Text>
                            <Text style={{ color: "#fff" }}>{album.price} VND</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={{ marginLeft: 20 }}>Giá thuê:</Text>
                            <Text style={{ color: "#fff" }}>{album.price} VND</Text>
                        </View>
                    </View>
                </View>
                {/* Phần hiển thị chi tiết dịch vụ */}
            </ImageBackground>
            <Text style={{ margin: 20, fontWeight: "bold" }}>Mô tả </Text>
            {album && (
                <View style={styles.albumItem}>
                    <Image source={{ uri: album.image[0] }} style={styles.albumImage} />
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/service.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>Tên: {album.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/ao.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>Price: {album.price}</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/top.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>describe: {album.describe}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/bay.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>location: {album.location}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/cham.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>utilities: {album.utilities}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/block.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>time: {album.time}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../img/card.png')} style={{ width: 20, height: 20 }} />
                        <Text style={styles.albumText}>result: {album.result}</Text>
                    </View>





                </View>
            )}
            {/* Form đăng ký */}
            <Text style={{ fontSize: 22, color: "black", fontWeight: "bold", fontStyle: 'italic', textAlign: "center", marginTop: 20 }}>Đăng ký liền tay - nhận ngay ưu đãi</Text>
            <Text style={{ marginLeft: 50 }}>Họ Và Tên </Text>
            <TextInput style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 300, marginLeft: 50 }} />
            <Text style={{ marginLeft: 50 }}>Số điện thoại  </Text>
            <TextInput style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 300, marginLeft: 50 }} />
            <Text style={{ marginLeft: 50 }}>Thông tin đăng ký   </Text>
            <View style={{ width: 300, marginLeft: 50, height: 100, backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                {/* Hiển thị thông tin đã đăng ký ở đây */}
            </View>
            <Pressable style={{ width: 350, marginLeft: 20, height: 40, backgroundColor: "#f3d9dc", marginTop: 20, marginBottom: 100 }}>
                <Text style={{ textAlign: "center", lineHeight: 40, fontWeight: "bold", color: "#fff" }}>Đăng ký  </Text>
            </Pressable>
        </ScrollView>
    );
};

export default Chitiet_dichvu;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 420,
    },
    albumItem: {
        flexDirection: 'column',
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    albumImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    albumText: {
        marginLeft: 10,
        fontSize: 16,
        marginBottom: 5,
    },
    overlay: {
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        marginTop: 190,
        borderTopLeftRadius: 20, // Bo tròn góc bên trái phía trên
        borderTopRightRadius: 20, // Bo tròn góc bên phải phía trên
    },
});
