/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import Cam from './screens/Cam.tsx';
import Album from './screens/Album.tsx';
import Groups from './screens/Groups.tsx';
import Profile from './screens/Profile.tsx';
import Home from './screens/Home.tsx';
import Prompts from './components/prompts.tsx';
import TopFooter from './components/Wrapper.tsx'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.red,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.white,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: Colors.brown,
  };

  return (
    // <View style = {{flex: 1}}>
    //   {/* <Album /> */}
    //   <Cam />
    // </View>
    <NavigationContainer>
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
    tabBarOptions={{
      showLabel: false,
      headerShown: false, // This will hide the labels of the tabs
     // This will remove the top border>
    }}>
        <Tab.Screen
            name="Home"
            component={Home}
        />
        <Tab.Screen
            name="Groups"
            component={Groups}
        />
        <Tab.Screen
            name="Cam"
            component={Cam}
        />
        <Tab.Screen
            name="Album"
            component={Album}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
        />
    </Tab.Navigator>
<TopFooter />
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
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

export default App;
