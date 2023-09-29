import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import MainFooter from './MainFooter';
import React from 'react';
import MovieCategories from '../MovieCategories/MovieCategories';
interface Props {
  isDarkMode: boolean;
  Search_input: string;
  Popular_data?: Movie_data[];
  Popular_tv_data?: Movie_data[];
  TodayTrending?: Movie_data[];
  AnimeMovies?: Movie_data[];
  Search_Movie?: Movie_data[];
}
interface data_type {
  item: Movie_data;
}

const ChooseMovie = ({
  isDarkMode,
  Popular_data,
  Popular_tv_data,
  TodayTrending,
  AnimeMovies,
  Search_Movie,
  Search_input,
}: Props) => {
  const viewportHeight = Dimensions.get('window').height;

  const Height = (80 / 100) * viewportHeight;

  return (
    <View style={[styles.container, {height: Height}]}>
      <MovieCategories
        Popular_data={Popular_data}
        Popular_tv_data={Popular_tv_data}
        TodayTrending={TodayTrending}
        AnimeMovies={AnimeMovies}
        isDarkMode={isDarkMode}
        Search_Movie={Search_Movie}
        Search_input={Search_input}
      />
      <MainFooter />
    </View>
  );
};

export default ChooseMovie;

const styles = StyleSheet.create({
  darkText: {
    color: 'white',
  },
  whiteText: {
    color: 'black',
  },
  categoryText: {
    fontSize: 18,
    marginBottom: 15,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  VideocategoryContainer: {
    paddingHorizontal: 15,
    width: '100%',
    height: '80%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  ScrollViewHorizontal: {
    width: '100%',
    height: '100%',
  },
  ScrollViewContainer: {
    width: '100%',
    height: 210,
  },
});
