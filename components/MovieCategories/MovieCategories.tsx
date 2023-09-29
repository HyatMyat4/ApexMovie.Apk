import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Videocard from '../../util/Videocard';
import HorizontalVideoCntainer from '../../util/HorizontalVideoCntainer';
import SearchVideoCard from '../../util/SearchVideoCard';
interface data_type {
  item: Movie_data;
}

interface Props {
  Popular_data?: Movie_data[];
  isDarkMode: boolean;
  Search_input: string;
  Popular_tv_data?: Movie_data[];
  TodayTrending?: Movie_data[];
  AnimeMovies?: Movie_data[];
  Search_Movie?: Movie_data[];
}

const MovieCategories = ({
  Popular_data,
  isDarkMode,
  Popular_tv_data,
  AnimeMovies,
  TodayTrending,
  Search_Movie,
  Search_input,
}: Props) => {
  return (
    <View style={styles.VideocategoryContainer}>
      {Search_Movie?.length && Search_input?.length ? (
        <FlatList
          style={styles.searchContainer}
          numColumns={3}
          data={Search_Movie}
          renderItem={({item}: data_type) => <SearchVideoCard item={item} />}
          keyExtractor={(item: any) => item.id}
          horizontal={false}
        />
      ) : (
        <ScrollView
          style={styles.VerticalScroll}
          showsVerticalScrollIndicator={false} // Optional: Hide vertical scroll indicator
        >
          <View style={styles.VerticalScrollcontainer}>
            <HorizontalVideoCntainer
              Movie={Popular_data}
              isDarkMode={isDarkMode}
              CategoriesName={'Popular Movie'}
            />
            <HorizontalVideoCntainer
              Movie={AnimeMovies}
              isDarkMode={isDarkMode}
              CategoriesName={'Anime'}
            />
            <HorizontalVideoCntainer
              Movie={TodayTrending}
              isDarkMode={isDarkMode}
              CategoriesName={'Today Trending'}
            />
            <HorizontalVideoCntainer
              Movie={Popular_tv_data}
              isDarkMode={isDarkMode}
              CategoriesName={'Popular Tv Show'}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieCategories;

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
  categoryText_Margin: {
    fontSize: 18,
    marginVertical: 13,
  },
  ScrollViewHorizontal: {
    width: '100%',
    height: '100%',
  },
  VideocategoryContainer: {
    width: '100%',
    height: '80%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  VideorowContainer: {
    width: '100%',
    height: 226,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  ScrollViewContainer: {
    width: '100%',
    height: 190,
  },
  VerticalScroll: {
    width: '100%',
    height: '100%',
  },
  VerticalScrollcontainer: {
    paddingBottom: 40,
  },
  searchContainer: {
    flex: 1,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
