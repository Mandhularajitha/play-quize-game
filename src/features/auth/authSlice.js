import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  token: undefined,
  status: "idle",
  error: true,
};

const saveUserDataInLocalStorage = (userData) => {
  console.log(userData);
  localStorage.setItem("userData", JSON.stringify(userData.user));
  localStorage.setItem("token", JSON.stringify(userData.token));
};

export const removeUserData = () =>{
  localStorage.removeItem("userData")
}
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({email,password}) => {
    console.log(email);
    console.log(password);
    try {
        const response = await axios.post("/api/auth/login", {email,password});
            console.log(response,"response");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSignUp = createAsyncThunk(
  "auth/sign",
  async({firstName,lastName,username,password})=>{
      console.log(firstName,lastName,username,password,"2323")
    try { 
      const response = await axios.post("/api/auth/signup", {firstName,lastName,username,password});
        console.log(response);
     const userData = {
      token: response.data.encodedToken,
      user: response.data.createdUser,
    }
    saveUserDataInLocalStorage(userData)
    return userData
    } catch (error) {
      console.log(error);
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state) => {
      removeUserData();
      state.user = {};
    }
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.user = payload.data.foundUser;
      state.token = payload.data.encodedToken;
      localStorage.setItem("token", JSON.stringify(payload.data.encodedToken));
      localStorage.setItem("user", JSON.stringify(payload.data.foundUser));
      state.status = "succed";
    },
    [userLogin.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    },
    [userSignUp.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = "succed";
    },
    [userSignUp.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    }
  },
});

export  const {userLogout} = authSlice.actions;
export default authSlice.reducer;


