# 🚜 AgriLink

AgriLink is a modern mobile application built using **React Native** and **Expo**. It aims to serve as a digital bridge between **Farmers** and **Virtual Gardeners** through a smooth, animated UI and user-friendly experience.

This app currently supports user registration, login, navigation between screens, and displays a list of sample users. It uses animations and video backgrounds to enhance user engagement.

---

## ✨ Features

- 🔐 **User Authentication**
  - Register with full name, email, password, and confirm password.
  - Login with email and password.
  - Basic validation for required fields.

- 🌱 **Role-Based Dropdown**
  - Select between `Farmer` or `Virtual Gardener` during registration.

- 🎥 **Animated Screens with Video Backgrounds**
  - Login and Register screens feature stylish background video loops.

- 👥 **Users List Page**
  - Navigate to a screen displaying a sample list of registered users.

- 🔄 **Smooth Navigation**
  - Seamless stack navigation between screens using React Navigation.

---

## 📱 Screens Implemented

- **Login Screen**
  - Email & password fields
  - Background video
  - Animated logo
  - Links to Register and View Users

- **Register Screen**
  - Fields: Full Name, Email, Password, Confirm Password
  - Role dropdown selector
  - Background video
  - Navigation to Login screen

- **Home Screen**
  - Simple landing page after successful login

- **Users List Screen**
  - FlatList displaying sample users with role and email
  - Back button to navigate to Login

---

## 🛠️ Tech Stack

- **React Native (Expo)**
- **React Navigation**
- **Animated API**
- **expo-av** – for playing background videos
- **@react-native-picker/picker** – for role selection dropdown

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI (install using `npm install -g expo-cli`)

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/agrilink.git
cd agrilink

Install dependencies

npm install

Run the app

npx expo start
Scan the QR code in Expo Go app on your mobile to preview.
```

### 🙋‍♀️ Developed By
Ayesha Tasnim
Final Year B.Tech CSE Student
ITER, SOA University, Bhubaneswar

### 📜 License
This project is licensed under the MIT License.