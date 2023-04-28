import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import dummyWeatherData from './src/Tests/TestData.json';
import WeatherCard from '../Components/WeatherCard';

describe('Weather card', () => {
	const weatherCard = <WeatherCard data={dummyWeatherData} city='London'/>;

	it('Weather card should show city inputted', () => {
		render(weatherCard);

		expect(screen.getByText(/London/i)).toBeDefined(); //Substring match, ignore case
	});

	it('Correct weather data should show', () => {
		render(weatherCard);

		expect(screen.getByText(/10°C/i)).toBeDefined(); //Substring match, ignore case
		expect(screen.getByText(/Sunrise: 05:41/i)).toBeDefined(); //Substring match, ignore case
		expect(screen.getByText(/Sunset: 20:16/i)).toBeDefined(); //Substring match, ignore case
		expect(screen.getByText(/Description: Mist/i)).toBeDefined(); //Substring match, ignore case
		expect(screen.getByText(/Humidity: 92%/i)).toBeDefined(); //Substring match, ignore case
		expect(screen.getByText(/Wind speed: 11mph/i)).toBeDefined(); //Substring match, ignore case
		expect(screen.getByText(/Direction: 100°/i)).toBeDefined(); //Substring match, ignore case
	});
});