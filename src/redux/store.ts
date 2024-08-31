import { combineReducers, configureStore } from '@reduxjs/toolkit';
 // Import the persisted events reducer
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import loaderReducer from './features/loaderSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({

  loader: loaderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check for persisted state
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };