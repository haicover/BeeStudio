import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList, Pressable, TextInput, ImageBackground } from 'react-native';
import axios from 'axios';

const Chitiet_aocuoi = ({navigation}) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get('https://beeserver-1.onrender.com/dress/data');
                setAlbums(response.data);
                console.log(Chitiet_aocuoi);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <ScrollView>
            <ImageBackground source={require('../img/sp.jpg')} style={styles.imageBackground}>
                <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image source={require('../img/back.png')} style={{ width: 40, height: 40, margin: 20 }} />
                    </TouchableOpacity>
                    <Image source={require('../img/tim.png')} style={{ width: 40, height: 40, margin: 20 }} />
                </View>
                <View style={styles.overlay}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20, marginLeft: 20, color: "black" }}>Mã số:AT092</Text>
                    <Text style={{ marginLeft: 20, fontSize: 19, color: "#fff" }}>váy cưới mới AT092 </Text>
                </View>
            </ImageBackground>

            <View style={{ position: 'relative' }}>
                <View style={{ width: 357, height: 379, backgroundColor: "#f3d9dc", marginTop: 15, borderRadius: 20, marginLeft: 20 }}>
                    {/* Render các album ở đây */}
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                    <View style={{ width: 130, height: 50, backgroundColor: "#ed008c", borderRadius: 10, marginLeft: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Mô tả sản phẩm</Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
                        <Image source={{ uri: albums[0]?.image[0] }} style={styles.albumImage} />
                        <Text style={styles.albumText}>Tên: {albums[0]?.name}</Text>
                        <Text style={styles.albumText}>Price: {albums[0]?.price}</Text>
                        <Text style={styles.albumText}>Describe: {albums[0]?.describe}</Text>
                        <Text style={styles.albumText}>Rental Price: {albums[0]?.rental_price}</Text>
                        <Text style={styles.albumText}>Size: {albums[0]?.size}</Text>
                        <Text style={styles.albumText}>Color: {albums[0]?.color.join(', ')}</Text>
                        <Text style={styles.albumText}>Material: {albums[0]?.material}</Text>
                        <Text style={styles.albumText}>Style: {albums[0]?.style}</Text>
                        <Text style={styles.albumText}>Quantity: {albums[0]?.quantity}</Text>
                        <Text style={styles.albumText}>__V: {albums[0]?.__v}</Text>
                    </View>

                </View>
            </View>
            <Pressable style={{ width: 300, height: 40, backgroundColor: "#f3d9dc", marginLeft: 50, marginTop: 20, borderRadius: 20 }}>
                <Text style={{ textAlign: "center", lineHeight: 40, fontWeight: "bold", color: "#fff" }}>LIÊN HỆ </Text>
            </Pressable>
            <Text style={{ fontSize: 22, color: "black", fontWeight: "bold", fontStyle: 'italic', textAlign: "center", marginTop: 20 }}>Đăng ký liền tay - nhận ngay ưu đãi</Text>
            {/* Phần form đăng ký */}
            <Text style={{ marginLeft: 20 }}>Họ Và Tên </Text>
            <TextInput style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 350, marginLeft: 20 }} />
            <Text style={{ marginLeft: 20 }}>Số điện thoại  </Text>
            <TextInput style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 350, marginLeft: 20 }} />
            <Text style={{ marginLeft: 20 }}>Thông tin đăng ký   </Text>
            <View style={{ width: 350, marginLeft: 20, height: 100, backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                {/* Hiển thị thông tin đã đăng ký ở đây */}
            </View>
            <Pressable style={{ width: 350, marginLeft: 20, height: 40, backgroundColor: "#f3d9dc", marginTop: 20, marginBottom: 80 }}>
                <Text style={{ textAlign: "center", lineHeight: 40, fontWeight: "bold", color: "#fff" }}>Đăng ký  </Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 420,
    },
    overlay: {
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        marginTop: 240,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    albumImage: {
        width: 100,
        height: 100,
        margin: 10,
    },
    albumText: {
        marginLeft: 20,
        color: "black",
    },
});

export default Chitiet_aocuoi;
