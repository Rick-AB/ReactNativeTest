import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Search(props) {
  return (
    <View style={styles.container}>
      <Icon name={'search'} color="#3E5481" size={15} />
      <TextInput placeholder={'Search'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Search;
