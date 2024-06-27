import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import COLOR from '../../controller/color';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
      fetch('https://beeserver-1.onrender.com/users/data')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          let checkLogin = data.some(item => item.email == email && item.password == password)
          if (checkLogin) {
            ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
            navigation.navigate("MyDrawer")
          } else {
            ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
          }
        })
    } catch (error) {
      console.error('Lỗi:', error);
    }
  };
  const handleForgotPass = () => {
    navigation.navigate("forget")
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.hinhTron1} />
        <View style={styles.hinhTron2} />
        <Text style={{ fontSize: 25, fontWeight: 600 }}>WELCOME</Text>
        <Text style={{ fontSize: 40, color: COLOR.mainStream, fontWeight: "bold", marginBottom: 10 }}>Bee Studio</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={"#8391A1"}
            keyboardType="email-address"
            onChangeText={(txt) => setEmail(txt)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={"#8391A1"}
            secureTextEntry
            onChangeText={(txt) => setPassword(txt)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPass}>
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.orLoginWithContainer}>
            <View style={styles.line} />
            <Text style={styles.orLoginWithText}>Or Login with</Text>
          </View>
          <View style={styles.methodLogin}>
            <TouchableOpacity style={styles.loginMethodButton}>
              <Image source={require('../img/facebook.png')} style={styles.iconLogin} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginMethodButton}>
              <Image source={require('../img/google.png')} style={styles.iconLogin} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginMethodButton}>
              <Image source={require('../img/apple.png')} style={styles.iconLogin} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
          <Text style={{ color: '#F7B2B7' }}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
  },
  input: {
    borderColor: '#E8ECF4',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 8,
    padding: 15
  },
  loginButton: {
    backgroundColor: '#F7B2B7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgetPasswordText: {
    color: '#6A707C',
    textAlign: 'right',
    marginTop: 10,
    fontSize: 14
  },
  orLoginWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center'
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#E8ECF4',
  },
  orLoginWithText: {
    color: '#6A707C',
    fontSize: 14,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  hinhTron1: {
    height: 543,
    width: 543,
    borderRadius: 543,
    opacity: 0.5,
    backgroundColor: COLOR.mainStream,
    position: 'absolute',
    top: -400,
    alignSelf: 'flex-end',
    left: -100
  },
  hinhTron2: {
    height: 392,
    width: 392,
    opacity: 0.5,
    borderRadius: 392,
    backgroundColor: COLOR.mainStream,
    position: 'absolute',
    top: -190,
    right: -200,
  },
  methodLogin: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%'
  },
  loginMethodButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    width: '32%',
    borderColor: '#E8ECF4',
    borderWidth: 1
  },
  iconLogin: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20 // Khoảng cách giữa footer và bottom của màn hình
  }
});
