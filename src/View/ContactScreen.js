import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={styles.title}>Contact Bee Studio</Text>
          <Text>Any question or remarks?</Text>
          <Text>
            Just write us a message!
          </Text>
        </View>
        <View style={styles.contactInfoContainer}>
          <View style={styles.containerForm}>
            <Text style={styles.contactInfoTitle}>Contact Information</Text>
            <Text style={styles.contactInfoSubtitle}>Say something to start a live chat!</Text>
            <View>
              <View style={styles.contactItem}>
                <Image source={require('../img/phone-call.png')} style={styles.icon} />
                <Text style={styles.contactText}>+1012 3456 789</Text>
              </View>
              <View style={styles.contactItem}>
                <Image source={require('../img/mail.png')} style={styles.icon} />
                <Text style={styles.contactText}>demo@gmail.com</Text>
              </View>
              <View style={styles.contactItem}>
                <Image source={require('../img/placeholder.png')} style={styles.icon} />
                <Text style={styles.contactText}>132 New York, 02156 United States</Text>
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#999"
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#999"
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#999"
            multiline
          />
          <TextInput
            style={[styles.input, { paddingVertical: 30 }]}
            placeholder="Content"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  contactInfoContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
  },
  containerForm: {
    backgroundColor: '#011C2A',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  contactInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  contactInfoSubtitle: {
    fontSize: 11,
    marginBottom: 20,
    color: '#C9C9C9',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contactText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  sendButton: {
    backgroundColor: '#F7B2B7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
