import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  useColorScheme,
} from 'react-native';

import img1 from '../assets/test.png';
import img2 from '../assets/test2.png';

function Album(): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor: '#0A0B0D',
  };

  const imgSrc = [img1, img2];

  const imageGrid = () => {
    const images = [];
    for (let i = 0; i < 32; i++) {
      const imgEach = imgSrc[i % imgSrc.length];
      images.push(
        <View key={i} style={styles.imageContainer}>
          <Image source={imgEach} style={styles.image} />
        </View>
      );
    }
    return images;
  };

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
          {imageGrid()}
        </View>
      </ScrollView>
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
