import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TextComponent,
  Text,
} from 'react-native';

function FoodSreen(props) {
  const foodData = [
    {
      id: 0,
      author: 'Calum Lewis',
      authorImage: require('../images/person1.png'),
      foodImage: require('../images/food1.png'),
      foodName: 'Pancake',
      category: 'Food',
      minutes: '60 mins',
    },
    {
      id: 1,
      author: 'Eilif Sonas',
      authorImage: require('../images/person2.png'),
      foodImage: require('../images/food2.png'),
      foodName: 'Salad',
      category: 'Food',
      minutes: '60 mins',
    },
    {
      id: 2,
      author: 'Elena Shelby',
      authorImage: require('../images/person3.png'),
      foodImage: require('../images/food1.png'),
      foodName: 'Pancake',
      category: 'Food',
      minutes: '60 mins',
    },
    {
      id: 3,
      author: 'John Priyadi',
      authorImage: require('../images/person4.png'),
      foodImage: require('../images/food2.png'),
      foodName: 'Pancake',
      category: 'Food',
      minutes: '60 mins',
    },
  ];
  return (
    <FlatList
      numColumns={2}
      data={foodData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        return (
          <View style={styles.root}>
            <View style={styles.authorRoot}>
              <Image style={styles.authorImage} source={item.authorImage} />
              <Text>{item.author}</Text>
            </View>
            ;
            <ImageBackground style={styles.image} source={item.foodImage}>
              <View></View>
            </ImageBackground>
            <Text style={styles.foodName}>{item.foodName}</Text>
            <View style={styles.foodCategory}>
              <Text>{item.category}</Text>
              <Text>{`>${item.minutes}`}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  authorRoot: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  authorImage: {
    borderRadius: 8,
    height: 35,
    resizeMode: 'cover',
    width: 35,
  },
  container: {},
  foodCategory: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  foodName: {
    color: '#3E5481',
    fontSize: 18,
  },
  image: {
    borderRadius: 8,
    height: 155,
    resizeMode: 'cover',
    width: 155,
  },
  root: {
    marginBottom: 20,
  },
});

export default FoodSreen;
