import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

function Prompts(): React.JSX.Element {

    const backgroundStyle = {
      backgroundColor: '#0A0B0D',
    };
  
    // declare data
    const [prmpt, setPrmpt] = useState([]);
    useEffect(() => {
      fetchData();
    }, [])
  
    
    const fetchData = async() => {
      try {
        const response = await axios.get("https://2b0e-164-67-70-230.ngrok-free.app/prompt");
        setPrmpt(response.data.prompts);
      } catch (error) {
        console.log('Error: ' + error);
      }
    }
  
    const promptData = () => {
  
      const geminiPrompts = [];
  
      for (let i = 0; i < prmpt.length; i++) {
        geminiPrompts.push(
          <View key={i} style={styles.textContainer}>
            <Text>{prmpt[i]}</Text>
          </View>
        );
        console.log(geminiPrompts[i]);
      }


      return geminiPrompts;
    }
  
   
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
        backgroundColor='#0A0B0D'
        />
          <View style={styles.galleryContainer}>
            {promptData()}
          </View>
          <Pressable onPress={fetchData} 
          style={{position: 'absolute', bottom: 50, width: 1, height: 1, backgroundColor: 'white', alignSelf: 'center', borderRadius: 75}} />
        
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
    textContainer: {
      margin: 1,
      width: '90%',
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
  
  export default Prompts;
  