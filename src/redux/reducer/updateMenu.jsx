const initialState = {
    data: null,
    errorMessage: '',
    isLoading: false,
    isError: false,
  };
  
  const updateMenuReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'UPDATE_MENU_PENDING':
        return {
          ...state,
          isLoading: true,
        };
      case 'UPDATE_MENU_SUCCESS':
        return {
          ...state,
          isLoading: false,
          data: payload,
          errorMessage: '',
          isError: false,
        };
      case 'UPDATE_MENU_FAILED':
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
  
  export default updateMenuReducer
  