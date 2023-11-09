import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img from '../../assets/telur.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import {Card} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {getMenu} from '../../redux/actions/menu';
import { useNavigation } from '@react-navigation/native';
// import

const Home = () => {
  const dispacth = useDispatch();
  const navigation = useNavigation()
  const {data} = useSelector(state => state.getMenuReducer);

  useEffect(() => {
    dispacth(getMenu());
  }, []);
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.search}>
          <Ionicons
            name="search-outline"
            size={30}
            color="rgba(182, 182, 182, 1)"
          />
          <TextInput
            placeholder="Search Pasta, Bread, etc"
            placeholderTextColor="rgba(182, 182, 182, 1)"
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={style.textPopular}>Popular Recipe</Text>
            <Text style={style.popularCheck}>Popular Check</Text>
          </TouchableOpacity>
          <View style={style.imgContainer}>
            <ScrollView horizontal={true}>
              <View>
                <Text style={style.textImg}>SandWich Egg</Text>
                <Image source={img} style={style.img} />
              </View>
              <View>
                <Text style={style.textImg}>SandWich Egg</Text>
                <Image source={img} style={style.img} />
              </View>
              <View>
                <Text style={style.textImg}>SandWich Egg</Text>
                <Image source={img} style={style.img} />
              </View>
              <View>
                <Text style={style.textImg}>SandWich Egg</Text>
                <Image source={img} style={style.img} />
              </View>
            </ScrollView>
          </View>
        </View>
        <View>
          <View style={style.new}>
            <TouchableOpacity>
              <Text style={style.textNew}>New Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.info}>More Info</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <TouchableOpacity>
              <View style={style.imgNew}>
                <Image source={icon1} style={style.pictNew} />
                <Text style={style.titleNew}>Soup</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.imgNew}>
                <Image source={icon2} style={style.pictNew} />
                <Text style={style.titleNew}>Chicken</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.imgNew}>
                <Image source={icon3} style={style.pictNew} />
                <Text style={style.titleNew}>Seafood</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.imgNew}>
                <Image source={icon4} style={style.pictNew} />
                <Text style={style.titleNew}>Dessert</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          <Text style={style.textNew}>Popular For You</Text>

          <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
            {data?.data.map((item, index) => {
              return (
                <TouchableOpacity key={item.id} onPress={() => navigation.push('detailMenu', {id: item.id})}>
                  <View style={style.product}>
                    <Text style={style.textImg}>{item.title}</Text>
                    <Image source={{uri: item.image}} style={style.img} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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

  textPopular: {
    color: 'rgba(63, 58, 58, 1)',
    fontSize: 20,
    marginTop: 40,
  },

  popularCheck: {
    color: 'rgba(102, 102, 102, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
  },

  imgContainer: {
    padding: 15,
    flexDirection: 'row',
  },

  img: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginEnd: 30,
  },

  textImg: {
    position: 'absolute',
    color: 'white',
    zIndex: 3,
    fontSize: 30,
    padding: 10,
    marginTop: 150,
  },

  new: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  textNew: {
    color: 'rgba(63, 58, 58, 1)',
    fontSize: 20,
    marginBottom: 20,
  },

  info: {
    color: 'rgba(109, 97, 242, 1)',
    fontSize: 20,
  },

  imgNew: {
    padding: 10,
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  pictNew: {
    width: 80,
    height: 80,
  },

  titleNew: {
    color: 'rgba(24, 23, 43, 1)',
    fontSize: 20,
    marginLeft: 5,
  },

  product: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
});

export default Home;
