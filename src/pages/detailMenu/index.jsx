import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextComponent,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import telur from '../../assets/telur.png';
import pasta from '../../assets/pasta.png';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getMenuById} from '../../redux/actions/menu';

const DetailMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  const {data} = useSelector(state => state.getMenuIdReducer);

  useEffect(() => {
    dispatch(getMenuById(id));
  }, []);
  return (
    <View style={style.container}>
      <ScrollView>
        <View>
          <Image source={{uri: data?.data.image}} style={style.imgHeader} />
          <View style={style.position}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={30} />
            </TouchableOpacity>
            <View style={style.title}>
              <Text style={style.textTitle}>{data?.data.title}</Text>
              <Text style={style.subtitle}>By Sheilo</Text>
            </View>
          </View>
          <View>
            <View style={style.header}>
              <Text style={style.ingredients}>Ingredients</Text>
              <View style={style.textIngre}>
                <Text style={style.content}>- {data?.data.ingredients}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // padding: 10,
    flex: 1,
  },

  imgHeader: {
    width: 425,
    height: 500,
  },

  title: {
    // alignItems: 'end'
    marginTop: 300,
  },

  textTitle: {
    color: 'white',
    fontSize: 50,
    width: '70%',
  },

  subtitle: {
    fontSize: 20,
  },

  position: {
    position: 'absolute',
    padding: 20,
  },

  ingredients: {
    color: 'black',
    fontSize: 20,
  },

  header: {
    padding: 20,
  },

  content: {
    color: 'black',
    marginBottom: 5,
  },

  textIngre: {
    padding: 30,
    marginTop: 10,
    backgroundColor: 'rgba(250, 247, 237, 1)',
    borderRadius: 20,
    // lineHeight: 20
  },
});

export default DetailMenu;
