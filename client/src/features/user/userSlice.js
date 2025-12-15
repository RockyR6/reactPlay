import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/axios.js'
import toast from "react-hot-toast";


const initialState = {
    value: null,
}

export const fetchUser = createAsyncThunk (
    'user/fetchUser',
    async(token) => {
        const {data} = await api.get('/api/user/data', {
            headers: {Authorization: `Bearer ${token}`}
        })
        return data.success? data.user : null
    }
)