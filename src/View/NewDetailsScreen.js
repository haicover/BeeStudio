import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NewDetailsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../img/left-arrow.png')} style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#999"
                />
                <TouchableOpacity>
                    <Image source={require('../img/notification.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Image source={require('../img/anh2.png')} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <View style={styles.info}>
                        <Text style={styles.author}>By Tống Doanh Chính</Text>
                        <Text style={styles.publishDate}>Jan 1, 2021</Text>
                    </View>
                    <Text style={styles.title}>
                        Trọn gói ngày cưới giá bao nhiêu? Chụp hình tiệc cưới 2024
                    </Text>
                    <Text style={styles.description}>
                        Chụp hình tiệc cưới là một trong những phần quan trọng
                        và đặc biệt trong ngày cưới của bạn. Đây là cơ hội để
                        ghi lại những khoảnh khắc đầy cảm xúc và niềm vui cùng
                        với người thân yêu và bạn bè. Mailisa studio hiểu tầm
                        quan trọng của những khoảnh khắc này nên đã cho ra đời
                    </Text>
                    <Text style={styles.description}>
                        Ngày cưới là một trong những sự kiện quan trọng
                        nhất trong cuộc đời. Việc lưu giữ những khoảnh khắc
                        đáng nhớ trong ngày đặc biệt này là điều vô cùng
                        quan trọng. Chính vì vậy, chúng tôi cam kết mang
                        đến cho bạn gói dịch.
                        Ngày cưới là một trong những sự kiện quan trọng
                        nhất trong cuộc đời. Việc lưu giữ những khoảnh khắc
                        đáng nhớ trong ngày đặc biệt này là điều vô cùng
                        quan trọng. Chính vì vậy, chúng tôi cam kết mang
                        đến cho bạn gói dịch
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    icon: {
        height: 20,
        width: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 10,
    },
    detailsContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    publishDate: {
        color: '#666',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    description: {
        marginBottom: 10,
        fontSize: 16
    },
});
