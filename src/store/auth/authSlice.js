import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', //"not-authenticated, authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) =>{
    },
    logout: (state, payload) =>{

    },
    chekingCredentials: (state, action) =>{

    }
    
  }
});

export const { login, logout, chekingCredentials  } = authSlice.actions

