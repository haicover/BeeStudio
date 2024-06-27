import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import ItemNewpaper from '../component/ItemNewpaper';

const NewsScreen = ({navigation}) => {
    const [data, setdata] = useState([])
    const getData= ()=>{
        try {
             fetch("https://beeserver-1.onrender.com/news/data").then(res=>res.json()).then(data=> {
                setdata(data)
                console.log(data);
             }).catch(err =>console.log(err))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    const newsData = [
        { id: 1, title: 'Title 1', author: "Kid", imageSource: require('../img/anh2.png'), publishTime: 'March 28, 2024' },
        { id: 2, title: 'Title 2', author: "Kid", imageSource: require('../img/anh2.png'), publishTime: 'March 27, 2024' },
        { id: 3, title: 'Title 3', author: "Kid", imageSource: require('../img/anh2.png'), publishTime: 'March 27, 2024' },
        { id: 4, title: 'Title 4', author: "Kid", imageSource: require('../img/anh2.png'), publishTime: 'March 27, 2024' },
    ];

    const categoryData = [
        { id: 1, name: 'Tất cả' },
        { id: 2, name: 'Giá cưới' },
        { id: 3, name: 'Váy cưới' },
        { id: 4, name: 'Tư vấn' },
        { id: 5, name: 'Giá chụp' },
    ];

    const newsDetailsData = [
        { id: 1, author: 'Tống doanh chính', publishDate: 'Jan 4, 2023', title: 'Trọn gói ngày cưới giá bao nhiêu? Chụp hình tiệc cưới 2024', imageSource: require('../img/anh2.png') },
        { id: 2, author: 'Bee Studio', publishDate: 'Jan 4, 2023', title: 'Tổng hợp ảnh cưới đẹp xu hướng 2024', imageSource: require('../img/anh1_slide.jpg') },
        { id: 3, author: 'Hải', publishDate: 'Jan 4, 2023', title: 'Tổng hợp ảnh cưới đẹp xu hướng 2024', imageSource: require('../img/anh2.png') },
    ];

    const renderItemTitle = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderNewsDetailsItem = ({ item }) => (
        <TouchableOpacity style={styles.newsItem} onPress={() => navigation.navigate('details', { itemId: item.id })}>
            <Image source={item.imageSource} style={styles.newsImage} />
            <View style={styles.newsTextContainer}>
                <View style={styles.authorContainer}>
                    <Text style={styles.author}>By {item.author}</Text>
                    <Text style={styles.publishDate}>{item.publishDate}</Text>
                </View>
                <Text style={styles.newsTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#999"
                />
                <Image source={require('../img/notification.png')} style={styles.icon} />
            </View>
            <View style={styles.content}>
                <Text style={styles.heading}>Tin tức</Text>
                <FlatList
                style={{height:240}}
                    data={data}
                    renderItem={({ item }) => (
                        <ItemNewpaper author={item.source} imageSource={item.image} title={item.title} publishTime={item.date} />
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.separator} />
                <FlatList
                    data={categoryData}
                    renderItem={renderItemTitle}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <FlatList
                    data={newsDetailsData}
                    renderItem={renderNewsDetailsItem}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'white'
    },
    searchBar: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10
    },
    icon: {
        height: 20,
        width: 20,
    },
    content: {
        flex: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        padding: 8,
        marginHorizontal: 5,
        backgroundColor: '#F5F6FA',
        borderRadius: 5,
        marginVertical:15
    },
    name: {
        fontSize: 16,
    },
    separator: {
        borderBottomWidth: 0.5,
        width: '99%',
        marginTop: 15,
        borderColor: '#E0E0E0',
        alignSelf: 'center',
    },
    newsItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    newsImage: {
        width: 100,
        height: 80,
        borderRadius: 8,
    },
    newsTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    authorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    author: {
        fontWeight: 'bold',
    },
    publishDate: {
        color: '#666',
    },
    newsTitle: {
        fontWeight: 'bold',
    },
});

export default NewsScreen;
