import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  isDarkMode: boolean;
  flotCOntainer_Height: number;
}

const MainMiddle = ({isDarkMode, flotCOntainer_Height}: Props) => {
 
  return (
    <View style={[styles.flotContainer]}>
      <Image
        style={styles.logo_img}
        source={require('../../assets/Logo.png')}
      />

      <Text
        style={[
          styles.watchtvshow,
          isDarkMode ? styles.whiteText : styles.darkText,
        ]}>
        Watch Tv Show & Movie
      </Text>
      <Text
        style={[
          styles.watchtvshow,
          isDarkMode ? styles.whiteText : styles.darkText,
        ]}>
        Any Time Any Where
      </Text>
    </View>
  );
};

export default MainMiddle;

const styles = StyleSheet.create({
  darkText: {
    color: 'white',
  },
  whiteText: {
    color: 'black',
  },
  watchtvshow: {
    fontSize: 19,
  },
  flotContainer: {
    position: 'absolute',
    top: 50,
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
    alignItems: 'center',
    zIndex: 110,
    justifyContent: 'flex-end',
  },
  logo_img: {
    width: 135,
    height: 135,
    resizeMode: 'contain',
    padding: 15,
  },
});
