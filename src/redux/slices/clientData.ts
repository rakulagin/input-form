import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// export const fetchWeatherForecast = createAsyncThunk(
// 	'weatherForecast/fetchWeatherForecast',
// 	async (city: string) => {
// 		const { data } = await getWeatherForecast(city);
// 		return data;
// 	}
// );

const initialState = {
	data: {
		phone: '',
		email: '',
		nickName: '',
		firstName: '',
		surName: '',
		gender: '',

	},
  currentPosition: 1,
};

const clientDataSlice = createSlice({
	name: 'clientsData',
	initialState,
	reducers: {
    addClientData: (state, action) => {
			state.data = action.payload;
		},
    changeCurrentPosition: (state, action) => {
			state.currentPosition = action.payload;
		},
  },

});

export const { addClientData, changeCurrentPosition } = clientDataSlice.actions;
export const clientDataReducer = clientDataSlice.reducer;
