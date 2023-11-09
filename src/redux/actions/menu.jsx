import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMenu = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('Token Not Found');
    }

    dispatch({
      type: 'GET_MENU_PENDING',
    });
    const result = await axios.get(
      'https://raspberry-binturong-kit.cyclic.app/recipe',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(result);
    dispatch({
      type: 'GET_MENU_SUCCESS',
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'GET_MENU_FAILED',
      payload: error.message,
    });
  }
};

export const getMenuById = id => async dispacth => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('Token Undifined');
    }
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    dispacth({
      type: 'GET_MENU_BY_ID_PENDING',
    });
    const result = await axios.get(
      `https://raspberry-binturong-kit.cyclic.app/recipe/${id}`,
      {headers},
    );
    console.log(result);
    dispacth({
      type: 'GET_MENU_BY_ID_SUCCESS',
      payload: result.data,
    });
  } catch (error) {
    dispacth({
      type: 'GET_MENU_BY_ID FAILED',
      payload: error.message,
    });
    console.log(error);
  }
};

export const searchMenu = (search, page, sortBy) => async dispacth => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('token undifined');
    }
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    dispacth({
      type: 'SEARCH_PENDING',
    });
    const result = await axios.get(
      `https://raspberry-binturong-kit.cyclic.app/search`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          limit: 4,
          searchBy: 'title',
          search: search,
          sortBy: sortBy
        },
      },
    );

    dispacth({
      type: 'SEARCH_MENU_SUCCESS',
      payload: result.data,
    });
  } catch (error) {
    dispacth({
      type: 'SEARCH_MENU_FAILED',
      payload: error.message,
    });
    console.log(error);
  }
};

export const postMenu = (data, navigate) => async dispacth => {
  try {
    //initialitation Token
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('Token Not Found!');
    } else {
      console.log('Your Token Found!');
      console.log(token);
    }

    dispacth({
      type: 'ADD_MENU_PENDING',
    });
    const result = await axios.post(
      'https://raspberry-binturong-kit.cyclic.app/recipe',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(result);
    dispacth({
      type: 'ADD_MENU_SUCCESS',
      payload: result.data,
    });
    setTimeout(() => {
      navigate('MyApp');
    }, [1000]);
  } catch (error) {
    console.log(error);
    dispacth({
      type: 'ADD_MENU_FAILED',
      payload: error.message,
    });
  }
};

export const updateMenu = (data, id, navigate) => async dispacth => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('Token Undifined');
    }

    dispacth({
      type: 'UPDATE_MENU_PENDING',
    });
    const result = await axios.put(
      `https://raspberry-binturong-kit.cyclic.app/recipe/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(result);
    dispacth({
      type: 'UPDATE_MENU_SUCCESS',
      payload: result.data,
    });
    navigate('MyApp');
  } catch (error) {
    dispacth({
      type: 'UPDATE_MENU_FAILED',
      payload: error.message,
    });
    console.log(error);
  }
};

export const destroy = (id, navigate) => async dispacth => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('token undifined');
    }
    dispacth({
      type: 'DELETE_MENU_PENDING',
    });
    const result = await axios.delete(
      `https://raspberry-binturong-kit.cyclic.app/recipe/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(result);
    dispacth({
      type: 'DELETE_MENU_SUCCESS',
      payload: result.data,
    });
    // navigate('MyApp')
  } catch (error) {
    dispacth({
      type: 'DELETE_MENU_FAILED',
      payload: error.message,
    });
    console.log(error);
  }
};
