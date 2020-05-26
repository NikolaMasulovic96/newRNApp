/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import ItemScreen from './src/ItemScreen';
import LoginScreen from './src/LoginScreen';
import CustomDrawerNavigation from './src/CustomDrawerNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';




const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator()
  const Tab = createMaterialBottomTabNavigator();

  //   Home: {
  //     screen: HomeScreen,
  //     navigationOptions: {
  //       title: 'Homepage'
  //     }
  //   },
  
  //   ProfilePage: {
  //     screen: ItemScreen,
  //     navigationOptions: {
  //       title: 'ProfilePage'
  //     }
  //   },
  //   Notifications: {
  //     screen: LoginScreen,
  //     navigationOptions: {
  //       title: 'Notifications'
  //     }
  //   }
  // },
  //   {
  //     drawerPosition: 'left',
  //     contentComponent: CustomDrawerNavigation,
  //     drawerOpenRoute: 'DrawerOpen',
  //     drawerCloseRoute: 'DrawerClose',
  //     drawerToggleRoute: 'DrawerToggle',
  //     drawerWidth: 400
  //   })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen name="Home" component={HomeScreen} 
         options={{
          tabBarLabel: 'Home',
          tabBarIcon:() => (<Icon name="android-home" color={"white"} size={26} />)
        }}></Tab.Screen>
        <Tab.Screen name="Item" component={ItemScreen}></Tab.Screen>
        <Tab.Screen name="Login" component={LoginScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account-box" color={color} size={26} />
          ),
        }}></Tab.Screen>
        </Tab.Navigator>
        </NavigationContainer>
      {/* <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" 
             drawerStyle={{left:2}}
             >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Item" component={ItemScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
