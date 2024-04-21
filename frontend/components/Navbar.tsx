import * as React from 'react';
import { Image } from 'react-native';
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

  // Screens
import HomeScreen from '../screens/Home';
import GroupsScreen from '../screens/Groups';
import AlbumScreen from '../screens/Album';
import ProfileScreen from '../screens/Profile';
import { Link } from 'react-router-dom'

// Screen Names
const homeName = 'Home';
const groupsName = 'Groups';
const goName = 'Go';
const albumName = 'Album';
const profileName = 'Profile';

const MainNavigation = () => {
    return(
        <h1 className="main-navigation__title">
            <Link to="/">
            </Link>
        </h1>
    )
}