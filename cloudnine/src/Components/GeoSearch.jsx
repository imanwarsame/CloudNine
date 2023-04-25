import React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AsyncPaginate } from 'react-select-async-paginate';

const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export default function GeoSearch({ onSearchChange }) {
	const [search, setSearch] = useState('');
	const theme = useTheme();

	const loadOptions = (inputValue) => {
		return fetch(
			`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			});
	};

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};


	// Custom styles
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			borderRadius: '5px',
			border: 'none',
			margin: '10px',
			minWidth: '50vw',
			background: theme.palette.background.paper,
			boxShadow: state.isFocused ? '0 0 0 2px' : null,
		}),
		singleValue:(provided) => ({
			...provided,
			color: theme.palette.text,
		}),
		option: (provided, state) => ({
			...provided,
			background: state.isFocused ? 'rgba(33, 42, 62, 0.2)' : theme.palette.background.paper,
			backgroundColor: theme.palette.secondary.main,
			color: state.isFocused ? theme.palette.secondary.main : null,
		}),
		menu: (provided) => ({
			...provided,
			boxShadow: 'none',
			borderRadius: '5px',
			border: '2px solid',
			borderColor: theme.palette.secondary.main,
			overflow: 'hidden'
		}),
		menuList: (provided) => ({
			...provided,
			background: theme.palette.background.paper,
			boxShadow: '0px',
		}),
	};

	return (
		<AsyncPaginate
			placeholder="Search for city"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
			styles={customStyles}
		/>
	);
}