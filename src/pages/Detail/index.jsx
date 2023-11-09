import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const Detail = ({navigation}) => {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <View style={style.search}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons
                name="chevron-back-outline"
                size={30}
                color="rgba(239, 200, 26, 1)"
              />
            </TouchableOpacity>
          </View>
          <View style={style.textHeader}>
            <Text
              style={{
                fontSize: 25,
                color: 'rgba(239, 200, 26, 1)',
                fontWeight: 'bold',
              }}>
              Detail Popular Menu
            </Text>
          </View>
        </View>
        <View style={style.modalView}>
          <View style={style.icon}>
            <Image source={icon1} />
            <View style={{marginLeft: 15}}>
              <Text style={style.textIcon}>Ramen</Text>
              <View style={style.titleIcon}>
                <Ionicons name="star" color="rgba(239, 200, 26, 1)" />
                <Text style={style.textTitleIcon}>4.3 seafood</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.modalView}>
          <View style={style.icon}>
            <Image source={icon2} />
            <View style={{marginLeft: 15}}>
              <Text style={style.textIcon}>Ramen</Text>
              <View style={style.titleIcon}>
                <Ionicons name="star" color="rgba(239, 200, 26, 1)" />
                <Text style={style.textTitleIcon}>4.3 seafood</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.modalView}>
          <View style={style.icon}>
            <Image source={icon3} />
            <View style={{marginLeft: 15}}>
              <Text style={style.textIcon}>Ramen</Text>
              <View style={style.titleIcon}>
                <Ionicons name="star" color="rgba(239, 200, 26, 1)" />
                <Text style={style.textTitleIcon}>4.3 seafood</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.modalView}>
          <View style={style.icon}>
            <Image source={icon4} />
            <View style={{marginLeft: 15}}>
              <Text style={style.textIcon}>Ramen</Text>
              <View style={style.titleIcon}>
                <Ionicons name="star" color="rgba(239, 200, 26, 1)" />
                <Text style={style.textTitleIcon}>4.3 seafood</Text>
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
    padding: 10,
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textHeader: {
    marginHorizontal: 30,
  },

  search: {
    backgroundColor: 'rgba(239, 239, 239, 1)',
    borderRadius: 15,
    height: 70,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: 60,
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

  modalView: {
    marginBottom: 30,
    backgroundColor: 'white',
    height: 100,
    width: 400,
    borderRadius: 20,
    // padding: 20,
    marginHorizontal: 1,
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
});

export default Detail;
