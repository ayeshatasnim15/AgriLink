import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, StyleSheet, Dimensions, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState("Farmer");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const logoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();

    Animated.spring(logoAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Video
        source={require('../assets/videos/register_background.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />

      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Animated.Text style={[styles.logo, { transform: [{ scale: logoAnim }] }]}>
          🚜 AgriLink
        </Animated.Text>

        <View style={styles.card}>
          <TextInput placeholder="Full Name" style={styles.input} placeholderTextColor="#DDD" />
          <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" placeholderTextColor="#DDD" />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor="#DDD" />

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select Role</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedRole}
                onValueChange={(itemValue) => setSelectedRole(itemValue)}
                style={styles.picker}
                dropdownIconColor="#FFFFFF"
                mode="dropdown"
              >
                <Picker.Item label="Farmer" value="Farmer" />
                <Picker.Item label="Virtual Gardener" value="Virtual Gardener" />
              </Picker>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  backgroundVideo: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  logo: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 25,
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#C8E6C9',
    fontSize: 16,
    color: '#fff',
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5,
  },
  pickerWrapper: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  picker: {
    color: Platform.OS === 'android' ? '#fff' : undefined,
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginText: {
    marginTop: 15,
    fontSize: 15,
    color: '#eee',
    textAlign: 'center',
  },
  loginLink: {
    color: '#C8E6C9',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
