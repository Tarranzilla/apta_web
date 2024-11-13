import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InterfaceState {
    intro_active: boolean;
}

const initialState: InterfaceState = {
    intro_active: true,
};

export const interfaceSlice = createSlice({
    name: "interface",
    initialState,
    reducers: {
        set_intro_active: (state, action: PayloadAction<boolean>) => {
            state.intro_active = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { set_intro_active } = interfaceSlice.actions;

export default interfaceSlice.reducer;
