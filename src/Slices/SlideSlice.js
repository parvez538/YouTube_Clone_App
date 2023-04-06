import { createSlice } from "@reduxjs/toolkit";

const SlideSlice=createSlice({
    name:"Slide",
    initialState :{
        IsSlideOpen :true
    },
    reducers:{
        OnClickSlide:(state)=>{

            state.IsSlideOpen=!state.IsSlideOpen;
           
            
    
        }
    }
})

  

export const {OnClickSlide}=SlideSlice.actions;
export default SlideSlice.reducer;