import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react'
interface data_type {
  item: Movie_data;
}
const SearchVideoCard = ({item}: data_type) => {
  const Api_originimg = 'https://image.tmdb.org/t/p/original';

  return (
    <TouchableOpacity style={styles.Container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${Api_originimg}${item.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
};

export default SearchVideoCard

const styles = StyleSheet.create({
  Container: {
    width: 130,
    height: 190,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
  },
  tinyLogo: {
    width: 130,
    height: 190,
    borderRadius: 10,
  },
});