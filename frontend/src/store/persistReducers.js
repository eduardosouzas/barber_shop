import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistReducer = persistReducer({
    key: 'root',
    
  });
}