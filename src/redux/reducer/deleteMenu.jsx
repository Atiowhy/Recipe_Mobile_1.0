const initialState = {
    data: null,
    errorMessage: '',
    isLoading: false,
    isError: false,
  };
  
  const deleteMenuReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'DELETE_MENU_PENDING':
        return {
          ...state,
          isLoading: true,
        };
      case 'DELETE_MENU_SUCCESS':
        return {
          ...state,
          isLoading: false,
          data: payload,
          errorMessage: '',
          isError: false,
        };
      case 'DELETE_MENU_FAILED':
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
  
  export default deleteMenuReducer
  