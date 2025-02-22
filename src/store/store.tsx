import {configureStore} from "@reduxjs/toolkit";
import AdminSlice from "../redux/AdminSlice.ts";

export const store= configureStore({
    reducer: {
        Admin: AdminSlice
    },
});

export type AddDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>