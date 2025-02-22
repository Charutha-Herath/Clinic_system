import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import{DoctorModel} from "../model/DoctorModel.ts";


const initialState: DoctorModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3003/admin"
});


export const saveDoctor = createAsyncThunk("admin/saveDoctor",
    async (doctor:DoctorModel)=>{
    try {
        const response = await api.post("/add",doctor);
        return response.data;
    }catch (err){
        console.log(err);
        throw err;
    }
    }
)

const AdminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(saveDoctor.pending,()=>{
                console.log("Pending save doctor");
            })

            .addCase(saveDoctor.fulfilled,(state, action)=>{
                console.log("Doctor save fulfilled");
                state.push(action.payload);
            })

            .addCase(saveDoctor.rejected, () => {
                console.log("Doctor save rejected");
            })
    }
})

export default AdminSlice.reducer;