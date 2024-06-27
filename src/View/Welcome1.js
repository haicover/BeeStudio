import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.hinhTron1} />
        <View style={styles.hinhTron2} />
        <View style={styles.viewAnh}>
          <Image source={{ uri: 'https://aocuoimailisa.vn/wp-content/uploads/2023/06/mailisa-chup-hinh-cuoi-tot-nhat-tphcm.jpg' }} style={styles.anhSlide} />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.title}>
            Bee Studio
          </Text>
          <Text style={{textAlign:'center'}}>
            🌟 Chào mừng bạn đến với Bee Studio
            nơi mọi ước mơ cưới bắt đầu
          </Text>
        </View>
      </View>
      <View style={styles.footer}> 
        <View style={{flex:1}}>

        </View>
        <View style={{flex:1,backgroundColor:'yellow',justifyContent:'space-between',paddingHorizontal:'4%',flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity>
            <Text>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7B2B7',
  },
  content: {
    height: '74%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hinhTron1: {
    height: 543,
    width: 543,
    borderRadius: 543,
    backgroundColor: '#FDF0F1',
    position: 'absolute',
    top: -400,
    alignSelf: 'flex-end',
  },
  hinhTron2: {
    height: 392,
    width: 392,
    borderRadius: 392,
    backgroundColor: '#FDF0F1',
    position: 'absolute',
    top: -190,
    right: -200,
  },
  viewAnh:{
    height:'60%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  anhSlide: {
    height:"80%",
    width: "50%",
  },
  viewText:{
    width:"60%",
    marginTop:'2%'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    color:'#F7B2B7',
  },
  footer:{
    flex:1,
    backgroundColor:'red',
    
  }
})
