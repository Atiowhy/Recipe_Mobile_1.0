import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {postMenu} from '../../redux/actions/menu';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getMenuById} from '../../redux/actions/menu';
import {updateMenu} from '../../redux/actions/menu';
const EditMenu = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const {id} = route.params;
  const {data} = useSelector(state => state.getMenuIdReducer);
  const navigation = useNavigation();
  const [SelectedImage, setSelectedImage] = useState(null);
  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: '1',
    image: '',
  });

  const getMenuId = () => {
    dispatch(getMenuById(id));
  };

  const showCamera = async () => {
    let option = {
      storageOption: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(option, res => {
      if (res.assets && res.assets.length > 0) {
        setSelectedImage(res.assets[0]);
      }
    });
  };

  const showGallery = async () => {
    let options = {
      storageOption: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchImageLibrary(options, res => {
      if (res.assets && res.assets.length > 0) {
        setSelectedImage(res.assets[0]);
      }
    });
  };

  const onChange = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  const update = async () => {
    let formData = new FormData();
    formData.append('title', inputData?.title);
    formData.append('ingredients', inputData?.ingredients);
    formData.append('category_id', inputData?.category_id);

    if (SelectedImage && SelectedImage.uri) {
      formData.append('image', {
        uri: SelectedImage.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    } else if (inputData.image) {
      formData.append('image', {
        uri: inputData.image,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }
    dispatch(updateMenu(formData, id, navigation.navigate));
  };

  useEffect(() => {
    getMenuId();
  }, []);

  useEffect(() => {
    if (data) {
      setInputData({
        title: inputData?.title,
        ingredients: inputData?.ingredients,
        category_id: inputData?.category_id,
        image: inputData?.image
        
      });
    }
  }, [data]);

  return (
    <View>
      <View style={style.containerAdd}>
        <Text style={style.addText}>Edit Your Recipe</Text>
      </View>
      <View style={style.title}>
        <Ionicons
          name="book-outline"
          size={30}
          color="rgba(182, 182, 182, 1);"
        />
        <TextInput
          placeholder="Title"
          placeholderTextColor="rgba(182, 182, 182, 1);"
          style={{marginLeft: 10, color: 'black'}}
          onChangeText={value => onChange('title', value)}
          value={inputData?.title}
          // style={{}}
        />
      </View>
      <View style={style.ingredients}>
        <Ionicons
          name="bookmarks-outline"
          size={30}
          color="rgba(182, 182, 182, 1);"
        />
        <TextInput
          placeholder="Ingredients"
          placeholderTextColor="rgba(182, 182, 182, 1);"
          style={{marginLeft: 10, color: 'black'}}
          onChangeText={value => onChange('ingredients', value)}
          value={inputData?.ingredients}
        />
      </View>
      <View style={style.category}>
        <Ionicons
          name="list-outline"
          size={30}
          color="rgba(182, 182, 182, 1);"
        />
        <TextInput
          placeholder="category"
          placeholderTextColor="rgba(182, 182, 182, 1);"
          style={{marginLeft: 10, color: 'black'}}
          onChangeText={value => onChange('category_id', value)}
          value={inputData?.category_id}
        />
      </View>
      <View style={style.photo}>
        {SelectedImage ? (
          <Image
            resizeMode="cover"
            style={{height: '100%', width: '100%', borderRadius: 10}}
            source={{uri: SelectedImage?.uri}}
          />
        ) : (
          <Text style={{color: 'rgba(182, 182, 182, 1)'}}>Photo</Text>
        )}
      </View>
      <View style={style.cameraOption}>
        <TouchableOpacity style={style.camera} onPress={() => showCamera()}>
          <Text
            style={{
              color: 'rgba(182, 182, 182, 1);',
              justifyContent: 'center',
              display: 'flex',
            }}>
            Camera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.camera} onPress={() => showGallery()}>
          <Text
            style={{
              color: 'rgba(182, 182, 182, 1);',
              justifyContent: 'center',
              display: 'flex',
            }}>
            Galery
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={update}>
        <View
          //
          style={{
            backgroundColor: 'rgba(239, 200, 26, 1)',
            width: 250,
            marginLeft: 80,
            height: 70,
            alignItems: 'center',
            borderRadius: 15,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text>Post</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  containerAdd: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    padding: 40,
  },

  addText: {
    color: 'rgba(239, 200, 26, 1)',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  title: {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 15,
    borderWidth: 2,
    height: 70,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },

  ingredients: {
    marginTop: 20,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 15,
    borderWidth: 2,
    // height: 100,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
  },

  photo: {
    marginTop: 20,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 15,
    borderWidth: 2,
    height: 300,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
  },

  category: {
    marginTop: 20,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 15,
    borderWidth: 2,
    height: 70,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cameraOption: {
    // backgroundColor: 'red',
    marginTop: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // paddingHorizontal: 15,
  },

  camera: {
    // marginTop: 20,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderColor: 'rgba(239, 200, 26, 1)',
    borderRadius: 15,
    borderWidth: 2,
    height: 70,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default EditMenu;
