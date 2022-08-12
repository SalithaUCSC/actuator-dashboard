import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../features/DashboardSlice";

const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer
    }
});

export default store;