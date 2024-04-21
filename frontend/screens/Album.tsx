import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  useColorScheme,
  Pressable,
  Linking
} from 'react-native';

import img1 from '../assets/test.png';
import img2 from '../assets/test2.png';

function Album(): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor: '#0A0B0D',
  };

  // declare dataz
  const [pictures, setPictures] = useState([]);
  let maybe = true;
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    try {
      const response = await axios.get("https://2b0e-164-67-70-230.ngrok-free.app/pictures");
      setPictures(response.data.urls);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }

  //const imgSrc = [];

  // const imageGrid = () => {
  //   fetchData();

  //   const images = [];
  //   const ex = "Hello";
  //   for (let i = 0; i < pictures.length; i++) {
  //     images.push(<Text onPress={() => Linking.openURL(pictures[i])}>{ex}</Text>);
  //   }
  //   return images;
  // }

      //const imgEach = imgSrc[i % imgSrc.length];

  
        // <View key={i} style={styles.imageContainer}>
        //   <Image source={imgEach} style={styles.image} />
        // </View>

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
      backgroundColor='#0A0B0D'
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        overScrollMode="never">
        <View style={styles.galleryContainer}>
          <Text>DONE</Text>
        </View>
      </ScrollView>
      <Pressable onPress={fetchData} />
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 0, 
  },
  imageContainer: {
    margin: 1,
    width: '32.8%',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Album;
