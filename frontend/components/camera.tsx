import React, { Component, useRef } from 'react';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const camera = () => {
    
  const cameraObject = useRef<Camera>(null)



  const capturePhoto = async () => {
    console.warn('Hello World');
    const photo = await cameraObject.current?.takePhoto();
    // const result = await fetch('file://${photo.path}');

    var formData = new FormData();
    formData.append('files', {
      name: 'photo?.jpg',
      uri: photo?.path,
      type: 'image/jpeg'
    });

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      if (response.ok) {
        console.log('Uploaded successfully');
      } else {
        console.error('Error');
      }
    })
    .catch(error => {
      console.log(error);
    })
    console.log(photo);

  }

  const { hasPermission, requestPermission } = useCameraPermission()

  while(!hasPermission) {
    requestPermission()
  }

  while(!hasPermission) {
    return <ActivityIndicator/>
  }

  const device = useCameraDevice('back');


  if(device == null) {
    return (<Text>Camera not found</Text>)
  }
  
  return (
    <View style = {{flex: 1}}>
      <Camera
        ref={cameraObject}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Pressable
        onPress={capturePhoto}
        style={{position: 'absolute', bottom: 50, width: 75, height: 75, backgroundColor: 'white', alignSelf: 'center', borderRadius: 75}}
      />
    </View>
  );
}
export default camera;