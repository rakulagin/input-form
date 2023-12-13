import { combineReducers } from '@reduxjs/toolkit';
import { clientDataReducer } from './slices/clientData';


const rootReducer = combineReducers({
  inputForm: clientDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
