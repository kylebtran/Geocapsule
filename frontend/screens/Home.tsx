import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Dimensions, StatusBar } from 'react-native';
import Prompts from '../components/prompts';

const { width, height } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
      backgroundColor='#0A0B0D'
      />
      <ImageBackground
        source={require('../assets/HomePage.png')}
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

export default Home;
