import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    memory: 0
};
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: initialState,
    reducers: {
        getAppInfo(state, action) {
            
        }
    }
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;