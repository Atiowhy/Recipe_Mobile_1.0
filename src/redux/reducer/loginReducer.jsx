import {darkColors} from '@rneui/base';

const initialState = {
  data: null,
  isError: false,
  message: '',
  isLoading: false,
  isSuccess: false,
};

const authLoginReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'AUTH_LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'AUTH_LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        message: '',
      };
    case 'AUTH_LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
      };
    default:
        return state
  }
};

export default authLoginReducers
