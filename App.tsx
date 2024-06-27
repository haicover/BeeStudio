import React from 'react'
import {View, Text, Button, Modal, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/View/HomeScreen';
import LoginScreen from './src/View/LoginScreen';
import ContactScreen from './src/View/ContactScreen';
import PhotoPrintScreen from './src/View/PhotoPrintScreen';
import NewsScreen from './src/View/NewsScreen';
import NewDetailsScreen from './src/View/NewDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/View/RegisterScreen';
import ForgotPassScreen from './src/View/ForgotPassScreen';
import SendOTPScreen from './src/View/SendOTPScreen';
import CreatPassScreen from './src/View/CreatePassScreen';
import ServiceScreen from './src/View/ServiceScreen';
import Chitiet_dichvu from './src/View/Chitiet_dichvu';
import Ao_cuoi from './src/View/Ao_cuoi';
import Chitiet_aocuoi from './src/View/Chitiet_aocuoi';
import VideoScreen from './src/View/VideoScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Trang chủ" >
      <Drawer.Screen name="Trang chủ" component={HomeScreen} />
      <Drawer.Screen name="Liên hệ" component={ContactScreen} />
      <Drawer.Screen name="In ảnh" component={PhotoPrintScreen} />
      <Drawer.Screen name="Tin tức" component={NewsScreen} />
      <Drawer.Screen name='Dịch vụ' component={ServiceScreen}/>
      <Drawer.Screen name='Áo cưới' component={Ao_cuoi}/>
      <Drawer.Screen name='Video' component={VideoScreen}/>
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name='MyDrawer' component={MyDrawer}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='forget' component={ForgotPassScreen}/>
        <Stack.Screen name='send' component={SendOTPScreen}/>
        <Stack.Screen name='create' component={CreatPassScreen}/>
        <Stack.Screen name='details' component={NewDetailsScreen}/>
        <Stack.Screen name='Chitiet_dichvu' component={Chitiet_dichvu}/>
        <Stack.Screen name='Ao_cuoi' component={Ao_cuoi}/>
        <Stack.Screen name='Chitiet_aocuoi' component={Chitiet_aocuoi}/>
        <Stack.Screen name='Video' component={VideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <LoginScreen />
    // <NavigationContainer>
    //   <MyDrawer/>
    // </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
})
