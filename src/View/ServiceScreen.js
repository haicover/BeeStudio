import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images = [
  'https://tuart.net/wp-content/uploads/2020/08/Banner-web-super-combo-4-scaled.jpg',
  'https://tuart.net/wp-content/uploads/2020/03/banner-web-tuart-3.jpg',
  'https://tuart.net/wp-content/uploads/2020/08/Banner-web-super-combo-4-scaled.jpg',
  'https://linhnga.vn/wp-content/uploads/2023/02/Untitled-design-1400x700.png',
];

const ServiceScreen = (props) => {
  const { navigation } = props;
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://beeserver-1.onrender.com/service');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleItemClick = (item) => {
    navigation.navigate('Chitiet_dichvu', { album: item });
  };

  const [imgAtic, setImgAtic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Run every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide !== imgAtic) {
        setImgAtic(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          contentOffset={{ x: imgAtic * WIDTH, y: 0 }}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode='stretch'
              style={{ width: WIDTH, height: HEIGHT * 0.25 }}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text key={e} style={imgAtic === index ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <View>
        <Text style={styles.collectionTitle}>Bộ sưu tập mới nhất</Text>
        <ScrollView style={styles.albumContainer}>
          <FlatList
            horizontal
            data={albums}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleItemClick(item)}>
                <View style={styles.albumItem}>
                  <Image source={{ uri: item.image[0] }} style={styles.albumImage} />
<Text style={styles.albumText}>Tên: {item.name}</Text>
                  <Text style={styles.albumText}>Price: {item.price}</Text>
                  <Text style={styles.albumText}>location: {item.location}</Text>
             
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
          <Text style={{marginTop:500}}></Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center"
  },
  dotActive: {
    margin: 3,
    color: "black"
  },
  dot: {
    margin: 3,
    color: "#fff"
  },
  collectionTitle: {
    color: "#f7b2b7",
    margin: 10,
    fontWeight: "bold",
    fontSize: 20
  },
  albumContainer: {
    height: "100%"
  },
  albumItem: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#fff",
    width:173,
    height:350,
  },
  albumImage: {
    width: 150,
    height: 200,
    borderRadius: 20,
  },
  albumText: {
    color: "black"
  }
});

export default ServiceScreen;