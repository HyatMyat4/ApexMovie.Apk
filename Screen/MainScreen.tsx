import {Image, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import SecondPageheader from '../components/Main/SecondPageheader';
import SearchBar from '../components/Main/SearchBar';
import ChooseMovie from '../components/Main/ChooseMovie';
import LinearGradient from 'react-native-linear-gradient';
import {
  useGetPopularMoviesQuery,
  useGettvPopularMoviesQuery,
  useGetTodayTrendingQuery,
  useSearchMovieDefaultQuery,
  useSearchMovieQuery,
} from '../Api/Endpoint';
import { useState , useEffect } from 'react';
const MainScreen = () => {
  const route = useRoute();

    const [Popular_data, setPopular_data] = useState<Movie_data[]>();
    const [Popular_tv_data, setPopular_tv_data] = useState<Movie_data[]>();
    const [TodayTrending, setTodayTrending] = useState<Movie_data[]>();
    const [AnimeMovies, setAnime] = useState<Movie_data[]>();
    const [SearchMovie, setSearchMovie] = useState<Movie_data[]>();
    const [Search_input, setSearch_input] = useState<string>("");

    const search_query = 'naruto';


    const pageId = 1;
    const {data} = useGettvPopularMoviesQuery(1);

    const {data: Up_Coming_Movie_data} = useGetPopularMoviesQuery(1);

    const {data: DefaultSearch} = useSearchMovieDefaultQuery({pageId,search_query});
    
    const {data: TodayTrendingData, error: err} = useGetTodayTrendingQuery(1);
    
    const {data: Search_Movie} = useSearchMovieQuery({pageId, Search_input});



    // useEffect(() => {
    //   handleSearch();
    // }, [Search_input]);
    
    

    const handleSearch = () => {
      if (Search_input.length){
         setSearchMovie(Search_Movie?.results);
      } else {
        setSearchMovie([]);
      }
      console.log(Search_input, ' Search_input');
      // console.log( '--------------------------------------------------------' , JSON.stringify(Search_Movie, null, 2) , '--------------------------------------------------------');
    } 



    useEffect(() => {
      setPopular_data(Up_Coming_Movie_data?.results);
      setPopular_tv_data(data?.results);
      setTodayTrending(TodayTrendingData?.results);
      setAnime(DefaultSearch?.results);
    }, [data, TodayTrendingData, Up_Coming_Movie_data, DefaultSearch]);

  const {isDarkMode}: any = route.params;

  const viewportHeight = Dimensions.get('window').height;

  const Img_Height = (100 / 100) * viewportHeight;

  return (
    <LinearGradient
      colors={['#2E1371', '#130B2B']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      {/* Your content goes here */}
      <SafeAreaView style={styles.background}>
        <SecondPageheader isDarkMode={isDarkMode} />
        <SearchBar
          Search_input={Search_input}
          setSearch_input={setSearch_input}
          handleSearch={handleSearch}
        />
        <ChooseMovie
          isDarkMode={isDarkMode}
          Popular_data={Popular_data}
          Popular_tv_data={Popular_tv_data}
          TodayTrending={TodayTrending}
          AnimeMovies={AnimeMovies}
          Search_Movie={SearchMovie}
          Search_input={Search_input}
        />
        <Image
          style={[styles.backgroundImage, {height: Img_Height}]}
          source={require('../assets/Background.png')}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
});
