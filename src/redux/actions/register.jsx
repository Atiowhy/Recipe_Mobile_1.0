import axios from 'axios';

const registerAction = (form, navigation) => async dispatch => {
  try {
    dispatch({
      type: 'AUTH_REGISTER_PENDING',
    });
    const result = await axios.post(
      'https://raspberry-binturong-kit.cyclic.app/auth/register',
      form,
    );
    console.log(result);
    dispatch({
      type: 'AUTH_REGISTER_SUCESS',
      payload: result.data,
    });
    navigation.navigate('login');
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'AUTH_REGISTER_FAILED',
      payload: error.message,
    });
  }
};

export default registerAction;
