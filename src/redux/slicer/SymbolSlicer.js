import { createSlice } from "@reduxjs/toolkit"

const initialState={
    dataArr:[]
}
const SymbolSlicer=createSlice({
    name:"Symbol",
    initialState,
    reducers:{
        getData:(state,action)=>{
            const {fetchdata}=action.payload
            state.dataArr=fetchdata
        }
    }
})

export const {
    getData
}= SymbolSlicer.actions;

export default SymbolSlicer.reducer