import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser"
import { baseAPI } from "../../../shared/api/baseAPI";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
};

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
};

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await baseAPI.get('/users');
            const users = response.data.map((user: any) => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                city: user.address.city,
                phone: user.phone,
                company: user.company.name,
            }));
            return users;
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending.type, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected.type, (state, action: any) => {
                console.log(action.error);
                
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;