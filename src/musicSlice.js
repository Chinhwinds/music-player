import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSong: null,
  isPlaying: false,
  // Add other relevant state properties like playlist, volume, etc.
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    // Add other reducers for controlling playback, volume, playlist, etc.
  },
});

export const { setCurrentSong, togglePlayPause } = musicSlice.actions;
export default musicSlice.reducer;