import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice from "./slices/interface_slice";

export const store = configureStore({
    reducer: {
        interface: interfaceSlice, // Aqui, use o `interfaceSlice.reducer`, não o `interfaceSlice` diretamente
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
