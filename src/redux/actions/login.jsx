import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message';

const loginAction = (form, navigation) => async dispatch => {
  try {
    dispatch({
      type: 'AUTH_LOGIN_PENDING',
    });
    const result = await axios.post(
      `https://raspberry-binturong-kit.cyclic.app/auth/login`,
      form,
    );
    AsyncStorage.setItem('token', result.data.data.token);
    console.log('token disimpan');
    // console.log(result.data.data.token);
    // console.log('Login Success', result.data);
    dispatch({
      type: 'AUTH_LOGIN_SUCCESS',
      payload: result.data,
    });
    navigation.navigate('MyApp');
    // Toast.show({
    //   type: 'success',
    //   text1: 'Login Succes!',
    // });
  } catch (error) {
    dispatch({
      type: 'AUTH_LOGIN_FAILED',
      payload: error.message,
    });
    console.log(error);
  }
};

export default loginAction;
