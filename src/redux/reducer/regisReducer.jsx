const initialState = {
  data: null,
  isError: false,
  message: '',
  isLoading: false,
  isSuccess: false,
};

const authRegisReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'AUTH_REGIS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'AUTH_REGIS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: payload.data,
        message: '',
      };
    case 'AUTH_REGIS_FAILED':
      return {
        ...state,
        isError: true,
        isLoading: false,
        // isSuccess: false,
        message: payload,
      };
    default:
      return state;
  }
};

export default authRegisReducer
