const initialState = {
  data: null,
  errorMessage: '',
  isLoading: false,
  isError: false,
};

const addMenuReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_MENU_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: payload,
        errorMessage: '',
        isError: false,
      };
    case 'ADD_MENU_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
        isError: true,
        data: null,
      };

    default:
      return state
  }
};

export default addMenuReducers
