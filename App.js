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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Search from './components/Search';
import FoodSreen from './Screens/FoodSreen';

const topTab = createMaterialTopTabNavigator();

const bottomTab = createMaterialBottomTabNavigator();

const Home = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const foodCategories = [
    {
      title: 'All',
    },
    {
      title: 'Food',
    },
    {
      title: 'Drink',
    },
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <Search />
      <Text style={styles.header}>Category</Text>

      <ScrollView horizontal={true}>
        {foodCategories.map((item, index) => {
          <View style={styles.categoryItems}>
            <Text>{item.title}</Text>
          </View>;
        })}
      </ScrollView>

      <topTab.Navigator screenOptions={{
        tabBarIndicatorStyle: {backgroundColor:'#1FCC79', height: 4 }
      }}>
        <topTab.Screen name={'Left'} component={FoodSreen} options={
          
        } />
        <topTab.Screen name={'Right'} component={FoodSreen} />
      </topTab.Navigator>
    </SafeAreaView>

  );
}

const App = () => {
  
return (
    <bottomTab.Navigator >
      <bottomTab.Screen name= 'Home' component={Home} />
      <bottomTab.Screen name= 'Upload' component={Home} />
      <bottomTab.Screen name= 'Scan' component={Home} />
      <bottomTab.Screen name= 'Notification' component={Home} />
      <bottomTab.Screen name= 'Profile' component={Home} />
    </bottomTab.Navigator>
  )};

const styles = StyleSheet.create({
  categoryItems: {
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    color: '#3E5481',
    fontSize: 18,
    marginVertical: 20,
  },
});

export default App;
