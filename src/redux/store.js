import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { foodReducer } from './food';
import { userReducer } from './user';
import { mealsReducer } from './meals';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const userPersistConfig = {
  key: 'userInfo',
  storage,
  whitelist: ['token', 'publicUser'],
};

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    user: persistReducer(userPersistConfig, userReducer),
    food: foodReducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const exportStore = { store, persistor };

export default exportStore;
