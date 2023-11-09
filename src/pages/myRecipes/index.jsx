import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import telur from '../../assets/telur.png';
import {useDispatch, useSelector} from 'react-redux';
import {getMenu} from '../../redux/actions/menu';
import {destroy} from '../../redux/actions/menu';
// import { useNavigation } from '@react-navigation/native';

const MyRecipe = ({navigation}) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const {data} = useSelector(state => state.getMenuReducer);

  const deleteBtn = async itemId => {
    try {
      dispatch(destroy(itemId));
      setDeleteItem(itemId);
      navigation.navigate('MyApp');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (deleteItem) {
      const delay = setTimeout(() => {
        setDeleteItem(null);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [deleteItem]);

  useEffect(() => {
    dispatch(getMenu());
  }, []);
  return (
    <View>
      <View style={{flexDirection: 'row', padding: 30}}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            color="rgba(239, 200, 26, 1)"
            onPress={() => navigation.navigate('Profile')}
          />
        </TouchableOpacity>
        <View style={style.Recipe}>
          <Text style={style.textRecipe}>MY RECIPE</Text>
        </View>
      </View>

      <View>
        <ScrollView>
          {data?.data.map((item, index) => {
            return (
              <View style={style.modalView} key={item.id}>
                <TouchableOpacity style={style.position}>
                  <View style={{marginBottom: 5}}>
                    <Image
                      source={{uri: item.image}}
                      style={style.imgProduct}
                    />
                  </View>
                  <View style={style.titleIcon}>
                    <Text style={style.textChik}>{item.title}</Text>
                    <View>
                      <Ionicons name="star" color="rgba(239, 200, 26, 1)" />
                      <Text style={style.textChik}>4.3 |{item.category}</Text>
                    </View>
                    <View style={style.position}>
                      <TouchableOpacity
                        style={style.btnEdit}
                        onPress={() =>
                          navigation.push('editMenu', {id: item.id})
                        }>
                        <Text style={style.textIcon}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={style.btndelete}
                        onPress={() => deleteBtn(item.id)}>
                        <Text style={style.textIcon}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textRecipe: {
    color: 'rgba(239, 200, 26, 1)',
    fontSize: 30,
    fontWeight: 'bold',
  },

  Recipe: {
    marginHorizontal: 80,
  },

  modalView: {
    marginBottom: 30,
    backgroundColor: 'white',
    height: 130,
    width: 400,
    borderRadius: 20,
    // padding: 20,
    marginHorizontal: 10,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textProduct: {
    padding: 5,
    marginVertical: 3,
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },

  textChik: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },

  spicy: {
    color: 'black',
  },

  editButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 20,
    borderRadius: 5,
    marginVertical: 5,
  },

  editButtonText: {
    color: 'white',
    fontSize: 15,
    // alignItems: 'center',
    // justifyContent: 'center'
    marginLeft: 10,
  },

  deleteButton: {
    backgroundColor: 'red',
    width: 50,
    height: 20,
    borderRadius: 5,
    marginVertical: 5,
  },

  deleteButtonText: {
    color: 'white',
    fontSize: 15,
    // alignItems: 'center',
    // justifyContent: 'center'
    marginLeft: 5,
  },

  imgProduct: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginTop: 15,
    marginStart: 15,
  },

  position: {
    flexDirection: 'row',
  },

  titleIcon: {
    marginTop: 10,
    marginStart: 10,
  },

  textIcon: {
    color: 'white',
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 20,
    marginEnd: 20,
  },

  btnEdit: {
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  btndelete: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginStart: 10,
  },
});

export default MyRecipe;
