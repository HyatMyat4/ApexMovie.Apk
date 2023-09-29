import {StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import React from 'react';
interface data_type {
  item: Movie_data;
}

const Api_originimg = 'https://image.tmdb.org/t/p/original';

const Videocard = ({item}: data_type) => {

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

export default Videocard;

const styles = StyleSheet.create({
  Container: {
    width: 140,
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    marginLeft: 15,
  },
  tinyLogo: {
    width: 140,
    height: 200,
  },
});
