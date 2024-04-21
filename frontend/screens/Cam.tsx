import React, { Component, useRef } from 'react';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import axios from 'axios';
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

const Cam = () => {
    
  const cameraObject = useRef<Camera>(null)



  const capturePhoto = async () => {
    const photo = await cameraObject.current?.takePhoto();
    // const result = await fetch('file://${photo.path}');


    var formData = new FormData();
    formData.append('filename', {
      name: 'photo?.jpg',
      uri: "file://"+photo?.path,
      type: 'image/jpg'
    });

    axios.post('https://2b0e-164-67-70-230.ngrok-free.app/upload', formData, {
       headers: {"content-type": "multipart/form-data"}
    })    
    .then(response => {
        console.log('Uploaded successfully');
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
export default Cam;