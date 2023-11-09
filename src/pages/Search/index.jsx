import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img from '../../assets/telur.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import {Card} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {searchMenu} from '../../redux/actions/menu';
import {useNavigation} from '@react-navigation/native';
// import {FlatList} from 'react-native-gesture-handler'

const Search = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {data, isloading} = useSelector(state => state.searchMenuReducer);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('ASC');

  const btnSort = () => {
    const newSort = sortBy === 'ASC' ? 'DESC' : 'ASC';
    setSortBy(newSort);
    dispatch(searchMenu(search, page, newSort));
  };
  const goPage = pageCount => {
    if (pageCount >= 1 && pageCount <= data?.pagination.totalPage) {
      setPage(pageCount);
    }
  };

  useEffect(() => {
    dispatch(searchMenu(search, page, sortBy));
  }, [search, sortBy, page]);
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.search}>
          <Ionicons name="search-outline" size={30} />
          <TextInput
            onChangeText={value => setSearch(value)}
            placeholder="Search Pasta, Bread, etc"
            placeholderTextColor="rgba(182, 182, 182, 1)"
            style={{color: 'black'}}
          />
        </View>
        <View style={style.sort}>
          <TouchableOpacity
            style={style.btnSort}
            onPress={btnSort}>
            <Text>{`Sort ${sortBy === 'ASC' ? 'ASC' : 'DESC'}`}</Text>
          </TouchableOpacity>
        </View>
        {data?.data.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push('detailMenu', {id: item.id})}>
              <View style={style.icon} key={item.id}>
                <Image source={{uri: item.image}} style={style.img} />
                <View>
                  <Text style={style.textIcon}>{item.title}</Text>
                  <View style={style.titleIcon}>
                    <Ionicons name="star" color="rgba(239, 200, 26, 1)" />
                    <Text style={style.textTitleIcon}>
                      4.3 | {item.category}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={style.pagination}>
          <View style={style.button}>
            <TouchableOpacity
              style={style.btnPrev}
              onPress={() => goPage(page - 1)}>
              <Text style={style.textPrev}>Prev</Text>
            </TouchableOpacity>
            <View style={style.viewPagi}>
              <Text style={style.textPagi}>
                Page {data?.pagination.pageNow} From{' '}
                {data?.pagination.totalPage}
              </Text>
            </View>
            <TouchableOpacity
              style={style.btnNext}
              onPress={() => goPage(page + 1)}>
              <Text style={style.textNext}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  search: {
    // marginBottom: 40,
    // borderColor: 'rgba(239, 200, 26, 1)',
    backgroundColor: 'rgba(239, 239, 239, 1)',
    borderRadius: 15,
    height: 70,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  textIcon: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  titleIcon: {
    flexDirection: 'row',
  },

  textTitleIcon: {
    color: 'black',
    marginLeft: 5,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginEnd: 10,
  },

  pagination: {
    padding: 20,
  },

  button: {
    flexDirection: 'row',
    marginStart: 15,
    marginTop: 50,
    // backgroundColor: 'red',
  },

  btnPrev: {
    // marginEnd: 20,
    padding: 15,
    backgroundColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 10,
  },

  textPrev: {
    color: 'white',
    fontSize: 20,
  },

  btnNext: {
    padding: 15,
    backgroundColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 10,
  },

  textNext: {
    color: 'white',
    fontSize: 20,
  },

  viewPagi: {
    marginHorizontal: 10,
    padding: 15,
  },

  textPagi: {
    fontSize: 20,
  },

  sort: {
    padding: 10,
    flexDirection: 'row',
  },

  btnSort: {
    backgroundColor: 'rgba(239, 200, 26, 1)',
    width: 60,
    padding: 10,
    borderRadius: 10,
    marginEnd: 15,
  },
});

export default Search;
