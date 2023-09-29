import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useState , useEffect} from 'react';

const colorWithOpacity = 'rgba(118, 118, 128, 0.3)';

interface Props {
  Search_input?: string;
  setSearch_input: (value: string) => void;
  handleSearch: () => void;
}

const SearchBar = ({Search_input, setSearch_input, handleSearch }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.Searchbarcontainer}>
        <View style={styles.inputContainer}>
          <Svg
            width={24}
            height={24}
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            /* @ts-ignore */
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </Svg>
          <TextInput
            style={styles.input}
            onChangeText={text => setSearch_input(text)}
            value={Search_input}
            onSubmitEditing={() => handleSearch()}
            placeholder="Search Movie"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        </View>
        <Svg
          width={24}
          height={24}
          fill="none"
          /*@ts-ignore*/
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="crgba(255, 255, 255, 0.5)"
          class="w-6 h-6">
          <Path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
          />
        </Svg>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  Searchbarcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 53,
    backgroundColor: colorWithOpacity,
    paddingHorizontal: 13,
    borderRadius: 10,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 53,
    border: 'none',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 10,
  },
});
