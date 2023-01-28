import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  localMute: false,
};

const muteSlice = createSlice({
  name: 'mute',
  initialState,
  reducers: {
    setMuteUsers: (state, action) => ({
      ...state,
      users: [...action.payload],
    }),
    setMute: (state, action) => {
      const newUsers = [];
      for (let i = 0; i < state.users.length; i += 1) {
        if (state.users[i].socketID !== action.payload.socketID)
          newUsers.push({ ...state.users[i] });
        else newUsers.push({ ...state.users[i], isMuted: action.payload.isMuted });
      }
      return {
        ...state,
        users: newUsers,
        // users: state.users.filter((v) =>
        //   v.socketID !== action.payload.socketID
        //     ? { ...v }
        //     : { ...v, isMuted: action.payload.isMuted },
        // ),
      };
    },
    setLocalMute: (state, action) => ({
      ...state,
      localMute: action.payload,
    }),
    clearMute: (state) => ({
      users: [],
      localMute: false,
    }),
  },
  extraReducers: {},
});

export const { setMuteUsers, setMute, setLocalMute } = muteSlice.actions;
export default muteSlice.reducer;
