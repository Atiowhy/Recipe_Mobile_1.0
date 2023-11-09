import {combineReducers} from 'redux';
import authLoginReducers from './loginReducer';
import authRegisReducer from './regisReducer';
import searchMenuReducer from './searchMenu';
import getMenuReducer from './getMenu';
import addMenuReducers from './addMenu';
import getMenuIdReducer from './getMenuId';
import updateMenuReducer from './updateMenu';
import deleteMenuReducer from './deleteMenu';
const appReducers = combineReducers({
  authLoginReducers,
  authRegisReducer,
  searchMenuReducer,
  getMenuReducer,
  addMenuReducers,
  getMenuIdReducer,
  updateMenuReducer,
  deleteMenuReducer,
});

export default appReducers;
