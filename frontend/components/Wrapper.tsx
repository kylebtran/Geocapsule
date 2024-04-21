import React from 'react';
import { View, Dimensions, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('window');

const TopFooter = () => {
  return (
    <View style={{
      position: 'absolute',
      bottom: -190,
      width: width,
      justifyContent: 'flex-end', // Align content at the bottom
      alignItems: 'center',
      pointerEvents: 'none', // Make the footer not intercept touch events
    }}
    pointerEvents='none'>

      <Image
        source={require('../assets/Navbar.png')}
        style={{
          width: '100%',
          resizeMode: 'contain',
          
        }}
      />
    </View>
  );
};

export default TopFooter;
