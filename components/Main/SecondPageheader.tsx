import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

interface Props {
  isDarkMode: boolean;
}

const SecondPageheader = ({isDarkMode}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Choose Movie
      </Text>
      <Image
        style={styles.rightIcons}
        source={require('../../assets/user.jpg')}
      />
    </View>
  );
};

export default SecondPageheader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
  },
  darkText: {
    color: 'white',
  },
  whiteText: {
    color: 'black',
  },
  rightIcons: {
    width: 43,
    height: 43,
    borderRadius: 20,
  },
});
