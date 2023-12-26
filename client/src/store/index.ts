import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
