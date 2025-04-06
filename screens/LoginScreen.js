import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
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

  const handleViewUsers = () => {
    try {
      navigation.navigate('UsersList');
    } catch (error) {
      Alert.alert("Navigation Error", "The 'UsersList' screen is not registered.");
    }
  };

  return (
    <View style={styles.wrapper}>
      <Video
        source={require('../assets/videos/login_background.mp4')}
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

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#DDD"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#DDD"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Don't have an account?
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            {' '}Sign Up
          </Text>
        </Text>

        <TouchableOpacity style={styles.viewUsersButton} onPress={handleViewUsers}>
          <Text style={styles.viewUsersText}>👥 View Users</Text>
        </TouchableOpacity>
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
    marginBottom: 35,
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  input: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '90%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  registerText: {
    marginTop: 15,
    fontSize: 15,
    color: '#eee',
  },
  registerLink: {
    color: '#C8E6C9',
    fontWeight: '600',
  },
  viewUsersButton: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  viewUsersText: {
    fontSize: 16,
    color: '#E8F5E9',
    fontWeight: '600',
  },
});

export default LoginScreen;
