import {createSlice} from '@reduxjs/toolkit';

export interface Account {
  token: string;
  userProfile: any;
}

const initialAccountState: Account = {
  token: '',
  userProfile: null,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setAccount: (state, action) => {
      const {token, userProfile} = action.payload || {};
      state.token = token || state.token;
      state.userProfile = userProfile || state.userProfile;
    },
    logOut: state => {
      state.userProfile = null;
    },
  },
});
export const {setAccount, logOut} = accountSlice.actions;

export default accountSlice;
