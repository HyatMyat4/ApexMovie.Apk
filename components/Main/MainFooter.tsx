import {StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';

const MainFooter = () => {
  return (
    <LinearGradient
      colors={['rgba(59, 21, 120, 0.2)', 'rgba(59, 21, 120, 0.5)']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.buttomNavigater}>
      <TouchableOpacity>
        <Svg
          width={40}
          height={40}
          /* @ts-ignore */
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255, 255, 255, 0.8)"
          class="w-6 h-6">
          <Path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <Path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity>
        <Svg
          width={38}
          height={38}
          /* @ts-ignore */
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255, 255, 255, 0.8)"
          class="w-6 h-6">
          <Path
            fill-rule="evenodd"
            d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
            clip-rule="evenodd"
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity>
        <Svg
          width={40}
          height={40}
          /* @ts-ignore */
          xmlns="http://www.w3.org/2000/svg"
          fill="rgba(255, 255, 255, 0.8)"
          class="bi bi-ticket-perforated-fill"
          viewBox="0 0 16 16">
          <Path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4-1v1h1v-1H4Zm1 3v-1H4v1h1Zm7 0v-1h-1v1h1Zm-1-2h1v-1h-1v1Zm-6 3H4v1h1v-1Zm7 1v-1h-1v1h1Zm-7 1H4v1h1v-1Zm7 1v-1h-1v1h1Zm-8 1v1h1v-1H4Zm7 1h1v-1h-1v1Z" />
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity>
        <Svg
          width={38}
          height={38}
          /* @ts-ignore */
          xmlns="http://www.w3.org/2000/svg"
          fill="rgba(255, 255, 255, 0.8)"
          class="bi bi-person-fill"
          viewBox="0 0 16 16">
          <Path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </Svg>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  buttomNavigater: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '101%',
    height: '20%',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(76, 66, 117, 0.5)',
  },
});
