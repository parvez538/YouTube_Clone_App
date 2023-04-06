import { configureStore } from "@reduxjs/toolkit";
import SlideSlice from "../Slices/SlideSlice";

const Store=configureStore({
    reducer:{
        Slide:SlideSlice
    }
});

export default  Store;