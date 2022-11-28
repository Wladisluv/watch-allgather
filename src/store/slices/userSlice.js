import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  email: localStorage.getItem('email'),
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id')
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = localStorage.removeItem('email');
      state.token = localStorage.removeItem('token');
      state.id = localStorage.removeItem('id');
    }
  }
})


export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;