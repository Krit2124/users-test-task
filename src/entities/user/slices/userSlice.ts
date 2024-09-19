import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser"
import { baseAPI } from "../../../shared/api/baseAPI";

interface UserState {
    users: IUser[];
    usersActive: IUser[];
    usersArchive: IUser[];
    chosenUser: IUser | null;
    isLoading: boolean;
    error: string;
};

const initialState: UserState = {
    users: [],
    usersActive: [],
    usersArchive: [],
    chosenUser: null,
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
    reducers: {
        // Скрытие пользователя
        hideUser: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            state.usersActive = state.usersActive.filter(user => user.id !== userId);
            state.usersArchive = state.usersArchive.filter(user => user.id !== userId);
        },

        // Перемещение пользователя в usersActive
        moveToActive: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            const user = state.usersArchive.find(user => user.id === userId);
            
            if (user) {
                state.usersArchive = state.usersArchive.filter(user => user.id !== userId);
                state.usersActive.push(user);
            }
        },

        // Перемещение пользователя в usersArchive
        moveToArchive: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            const user = state.usersActive.find(user => user.id === userId);

            if (user) {
                state.usersActive = state.usersActive.filter(user => user.id !== userId);
                state.usersArchive.push(user);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending.type, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
                state.users.map((user, index) => {
                    if (index < 6) {
                        state.usersActive.push(user);
                    } else {
                        state.usersArchive.push(user);
                    }
                });
            })
            .addCase(fetchUsers.rejected.type, (state, action: any) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export const { hideUser, moveToActive, moveToArchive } = userSlice.actions;

export default userSlice.reducer;