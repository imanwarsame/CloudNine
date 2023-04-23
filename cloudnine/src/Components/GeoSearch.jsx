import React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AsyncPaginate } from 'react-select-async-paginate';

const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae913679bcmshd4c53807be171ecp191696jsn7e4b4eb15630',
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
			border: '2px solid #ccc',
			margin: '10px 0px',
			minWidth: '75vw',
			boxShadow: state.isFocused ? '0 0 0 2px #654E92' : null,
		}),
		option: (provided, state) => ({
			...provided,
			// backgroundColor: state.isFocused ? theme.palette.secondary.main : null,
			background: state.isFocused ? 'rgba(33, 42, 62, 0.2)' : null,
			color: state.isFocused ? theme.palette.secondary.main : null,
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