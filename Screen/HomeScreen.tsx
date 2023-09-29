import {View, StyleSheet, Image, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import MainFooter from '../components/Home/MainFooter';
import {useRoute} from '@react-navigation/native';
import MainMiddle from '../components/Home/MainMiddle';
const HomeScreen = () => {
  const route = useRoute();

  const {isDarkMode}: any = route.params;

  const viewportHeight = Dimensions.get('window').height;

  const Img_Height = (77 / 100) * viewportHeight;

  const flotCOntainer_Height = (50 / 100) * viewportHeight;
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Image
        style={[styles.firstScreenImg, {height: Img_Height}]}
        source={require('../assets/FirstScreen.png')}
      />
      <MainFooter />
      <MainMiddle
        isDarkMode={isDarkMode}
        flotCOntainer_Height={flotCOntainer_Height}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#130B2B',
  },
  darkText: {
    color: 'white',
  },
  whiteText: {
    color: 'black',
  },
  firstScreenImg: {
    width: '100%',
    resizeMode: 'stretch',
  },
});
