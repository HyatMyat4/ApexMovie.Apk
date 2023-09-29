import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const MainFooter = () => {
  const navigation: any | NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const viewportHeight = Dimensions.get('window').height;

  const desiredHeight = (56 / 100) * viewportHeight;
  return (
    <View style={[styles.constainer_2, {height: desiredHeight}]}>
      <View style={styles.btn_container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainScreen')}
          style={styles.Button_Style}>
          <Image
            style={styles.btn_img}
            source={require('../../assets/btn.png')}
          />
          <Text style={styles.main_btn_text}>$4.99 Pre Month</Text>
        </TouchableOpacity>
        <View style={styles.Button_Style}>
          <Image
            style={styles.btn_img}
            source={require('../../assets/btn.png')}
          />
          <Text style={styles.main_btn_text}>$7.99 Pre Month</Text>
        </View>
        <View style={styles.Button_Style}>
          <Image
            style={styles.btn_img}
            source={require('../../assets/btn.png')}
          />
          <Text style={styles.main_btn_text}>$9.99 Pre Month</Text>
        </View>
      </View>

      <Image
        style={styles.liner_img}
        source={require('../../assets/liner_img.png')}
      />
    </View>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  btn_container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 300,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button_Style: {
    activeOpacity: 0.8,
    width: '75%',
    minHeight: 64,
    marginBottom: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  main_btn_text: {
    fontSize: 17,

    color: 'white',
  },
  constainer_2: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 99,
  },
  liner_img: {
    width: '100%',
    resizeMode: 'stretch',
  },
  btn_img: {
    position: 'absolute',
    width: '100%',
    minHeight: 64,
    borderRadius: 15,
    top: 0,
    left: 0,
    button: 0,
    zIndex: -1,
  },
});
