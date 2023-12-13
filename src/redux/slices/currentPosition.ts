import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import { getCities } from '../../hooks/citiesApi';
// import { getCityByCords } from '../../hooks/citiesApi';

interface City {
	data?: any;
}

export const fetchCities = createAsyncThunk(
	'cities/fetchCities',
	async (city: string) => {
		// const { suggestions } = await getCities(city);
		// const filteredCities = suggestions.filter(
		// 	(suggestion: City) => suggestion.data.geo_lat !== null
		// );
		// return filteredCities;
	}
);

export const fetchCityByCords = createAsyncThunk(
	'cities/getCityByCords',
	async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
		// const response = await getCityByCords(latitude, longitude);
		// return response;
	}
);

interface City {
	value: string;
}

interface CitiesState {
	data: City[];
	selectedCity: City;
	status: string;
	location: Location;
}

interface RootState {
	cities: CitiesState;
}

const initialState = {
	cities: {
		data: [],
		selectedCity: {},
		status: 'loading',
		location: {},
	},
};

const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setSelectedCity: (state, action) => {
			state.cities.selectedCity = action.payload;
		},
	},

});

export const { setSelectedCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
