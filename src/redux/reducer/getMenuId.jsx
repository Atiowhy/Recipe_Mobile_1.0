const initialState = {
    data: null,
    isErrpr: false,
    isSuccess: false,
    message: '',
    isLoading: false,
  };
  
  const getMenuIdReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'GET_MENU_BY_ID_PENDING':
        return {
          ...state,
          isError: false,
          isLoading: true,
          isSuccess: false,
        };
      case 'GET_MENU_BY_ID_SUCCESS':
        return {
          ...state,
          data: payload,
          isError: false,
          isLoading: false,
          isSuccess: true,
        };
      case "GET_MENU_BY_ID_FAILED":
          return{
              ...state,
              message: payload,
              isError: true,
              isSuccess: false,
              isLoading: false
          }
      default:
        return state
    }
  };
  
  export default getMenuIdReducer
  