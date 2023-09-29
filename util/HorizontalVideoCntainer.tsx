import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Videocard from '../util/Videocard';
interface data_type {
  item: Movie_data;
}

interface Props {
  Movie?: Movie_data[];
  isDarkMode: boolean;
  CategoriesName: string;
}

const HorizontalVideoCntainer = ({
  Movie,
  isDarkMode,
  CategoriesName,
}: Props) => {
  return (
    <View style={styles.VideorowContainer}>
      <Text
        style={[
          isDarkMode ? styles.whiteText : styles.darkText,
          styles.categoryText_Margin,
        ]}>
        {CategoriesName}
      </Text>
      <View style={styles.ScrollViewContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.ScrollViewHorizontal}>
          {Movie?.length ? (
            <FlatList
              horizontal={true}
              data={Movie}
              renderItem={({item}: data_type) => <Videocard item={item} />}
              keyExtractor={(item: any) => item.id}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default HorizontalVideoCntainer;

const styles = StyleSheet.create({
  darkText: {
    color: 'white',
  },
  whiteText: {
    color: 'black',
  },
  VideorowContainer: {
    width: '100%',
    height: 240,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop : 10,
  },
  categoryText_Margin: {
    marginLeft : 18,
    fontSize: 18,
    marginVertical: 13,
  },
  ScrollViewContainer: {
    width: '100%',
    height: 200,
  },
  ScrollViewHorizontal: {
    width: '100%',
    height: '100%',
  },
});
