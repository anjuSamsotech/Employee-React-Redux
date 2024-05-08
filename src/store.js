import employee_Reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
    {
        reducer: {
            employee: employee_Reducer
        }
    }
);
export default store;