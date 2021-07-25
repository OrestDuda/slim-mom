import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authentication";
import contactsReducer from "./contacts/contactsReducer";
import { foodReducer } from "./food";
import { userReducer } from "./user";
import { mealsReducer } from "./meals";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authenticationPersistConfig = {
  key: "authentication",
  storage,
  whitelist: ["token"],
};

const userPersistConfig = {
  key: "userInfo",
  storage,
};

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    user: persistReducer(userPersistConfig, userReducer),
    food: foodReducer,
    contacts: contactsReducer,
    authentication: persistReducer(authenticationPersistConfig, authReducer),
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const exportStore = { store, persistor };

export default exportStore;
