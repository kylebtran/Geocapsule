import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
      backgroundColor='#0A0B0D'
      />
      <ImageBackground
        source={require('../assets/ProfilePage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* You can add additional components here that will be displayed over the image */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
  }
});

export default Profile;
