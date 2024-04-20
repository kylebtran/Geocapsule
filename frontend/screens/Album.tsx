import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import img1 from '../assets/test.png';
import img2 from '../assets/test2.png';

function Album(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imgSrc = [img1, img2];
  const backgroundStyle = { backgroundColor: '#0A0B0D' };

  const imageGrid = () => {
    return Array.from({ length: 32 }, (_, i) => {
      const imgEach = imgSrc[i % imgSrc.length];
      return (
        <TouchableOpacity
          key={i}
          style={styles.imageContainer}
          activeOpacity={1}
          onPress={() => {
            setSelectedImage(imgEach);
            setModalVisible(true);
          }}
        >
          <Image source={imgEach} style={styles.image} />
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor="#0A0B0D" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        overScrollMode="never"
      >
        <View style={styles.galleryContainer}>
          {imageGrid()}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.fullScreenImageContainer}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <Image source={selectedImage} style={styles.fullScreenImage} />
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  fullScreenImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0B0D',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Album;
