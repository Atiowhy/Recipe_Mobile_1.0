import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import profile from '../../assets/profile.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.yellow}>
      <View style={styles.imgProfile}>
        <Image source={profile} />
        <Text style={styles.textProfile}>Mareta Lopeda</Text>
      </View>
      <View style={styles.centeredView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="person-outline"
                  color="rgba(239, 200, 26, 1)"
                  size={30}
                />
                <Text style={styles.editText}>Edit Profile</Text>
                <View style={{marginLeft: 180}}>
                  <Ionicons
                    name="chevron-forward-outline"
                    color="rgba(239, 200, 26, 1)"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('myRecipe')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="ribbon-outline"
                  color="rgba(239, 200, 26, 1)"
                  size={30}
                />
                <Text style={styles.editText}>My Recipe</Text>
                <View style={{marginLeft: 180}}>
                  <Ionicons
                    name="chevron-forward-outline"
                    color="rgba(239, 200, 26, 1)"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('saveLike')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="bookmark-outline"
                  color="rgba(239, 200, 26, 1)"
                  size={30}
                />
                <Text style={styles.editText}>Save Recipe</Text>
                <View style={{marginLeft: 163}}>
                  <Ionicons
                    name="chevron-forward-outline"
                    color="rgba(239, 200, 26, 1)"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('saveLike')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="heart-outline"
                  color="rgba(239, 200, 26, 1)"
                  size={30}
                />
                <Text style={styles.editText}>Like Recipe</Text>
                <View style={{marginLeft: 170}}>
                  <Ionicons
                    name="chevron-forward-outline"
                    color="rgba(239, 200, 26, 1)"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yellow: {
    backgroundColor: 'rgba(239, 200, 26, 1)',
    width: 450,
    height: 350,
  },

  imgProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    height: 350,
    width: 450,
    position: 'absolute',
    // backgroundColor: 'red'
  },

  textProfile: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 420,
    // backgroundColor: 'red',
  },
  modalView: {
    marginBottom: 150,
    backgroundColor: 'white',
    height: 600,
    width: 400,
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // backgroundColor: 'yellow'
  },
  buttonOpen: {
    backgroundColor: 'rgba(239, 200, 26, 1)',
    height: 50,
    marginTop: 300,
    // marginRight: 30,
    // position: 'absolute',
    // justifyContent: 'center'
  },
  buttonClose: {
    marginTop: 270,
    backgroundColor: 'rgba(239, 200, 26, 1)',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    // justifyContent: 'center'
    marginTop: 5,
  },
  editText: {
    marginBottom: 15,
    // alignItems: 'center'
    color: 'rgba(24, 23, 43, 1)',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
  },
});

export default Profile;
