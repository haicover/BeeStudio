import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, SafeAreaView, ToastAndroid, } from 'react-native';
import COLOR from '../../controller/color';
const CreatPassScreen = () => {
    const [password, setpassword] = useState('')
    const [repassword, setrepassword] = useState('')
    const handleCreate=()=>{
        if(password == repassword){
            console.log("Thanh cong");
        }else{
            console.log("Loi roi");
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}>
                <View style={styles.hinhTron1} />
                <View style={styles.hinhTron2} />
                <View style={{ width: '85%' }}>
                    <Text style={{ fontSize: 35 }}>Create new password</Text>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Your new password must be unique from those previously used.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        placeholderTextColor={"#8391A1"}
                        secureTextEntry
                        onChangeText={txt=>setpassword(txt)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor={"#8391A1"}
                        secureTextEntry
                        onChangeText={txt=>setrepassword(txt)}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleCreate}>
                        <Text style={styles.loginButtonText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <Text>Remember Password?</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#F7B2B7' }}> Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CreatPassScreen;

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
