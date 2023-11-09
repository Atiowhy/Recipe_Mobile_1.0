import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import like from '../../assets/like.png'
import save from '../../assets/save.png'

const SaveLike = ({navigation}) => {
  return (
    <View>
      <ScrollView>
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
            <Text style={style.textRecipe}>Save & Like</Text>
          </View>
        </View>
        <View style={style.modalView}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Image source={icon1} />
              <View style={style.textProduct}>
                <View>
                  <Text style={style.textChik}>Chickend</Text>
                  <Text style={style.spicy}>Spicy</Text>
                </View>
                <View style={style.button}>
                  <TouchableOpacity style={style.saveButton}>
                    <Image source={like}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.deleteButton}>
                    <Image source={save}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.modalView}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Image source={icon2} />
              <View style={style.textProduct}>
                <View>
                  <Text style={style.textChik}>Chickend</Text>
                  <Text style={style.spicy}>Spicy</Text>
                </View>
                <View style={style.button}>
                  <TouchableOpacity style={style.saveButton}>
                    <Image source={save}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.deleteButton}>
                    <Image source={like}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.modalView}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Image source={icon3} />
              <View style={style.textProduct}>
                <View>
                  <Text style={style.textChik}>Chickend</Text>
                  <Text style={style.spicy}>Spicy</Text>
                </View>
                <View style={style.button}>
                  <TouchableOpacity style={style.saveButton}>
                    <Image source={like}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.deleteButton}>
                    <Image source={save}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.modalView}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Image source={icon4} />
              <View style={style.textProduct}>
                <View>
                  <Text style={style.textChik}>Chickend</Text>
                  <Text style={style.spicy}>Spicy</Text>
                </View>
                <View style={style.button}>
                  <TouchableOpacity style={style.saveButton}>
                    <Image source={save}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.deleteButton}>
                    <Image source={like}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: 100,
    width: 400,
    borderRadius: 20,
    padding: 20,
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
    flexDirection: 'row'
  },

  textChik: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },

  spicy: {
    color: 'black',
  },

  button: {
    flexDirection: 'row'
  },

  saveButton: {
    marginEnd: 10
  }


});

export default SaveLike;
