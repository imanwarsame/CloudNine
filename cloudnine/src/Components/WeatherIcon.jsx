import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as ThunderstormsDay } from '../Assets/weather_icons/thunderstorms.svg';
import { ReactComponent as ThunderstormsNight } from '../Assets/weather_icons/thunderstorms-night.svg';
import { ReactComponent as ThunderstormsRainDay } from '../Assets/weather_icons/thunderstorms-day-rain.svg';
import { ReactComponent as ThunderstormsRainNight } from '../Assets/weather_icons/thunderstorms-night-rain.svg';
import { ReactComponent as DrizzleDay } from '../Assets/weather_icons/drizzle.svg';
import { ReactComponent as DrizzleNight } from '../Assets/weather_icons/partly-cloudy-night-drizzle.svg';
import { ReactComponent as RainDay } from '../Assets/weather_icons/rain.svg';
import { ReactComponent as RainNight } from '../Assets/weather_icons/partly-cloudy-night-rain.svg';
import { ReactComponent as SnowDay } from '../Assets/weather_icons/snow.svg';
import { ReactComponent as SnowNight } from '../Assets/weather_icons/partly-cloudy-night-snow.svg';
import { ReactComponent as Mist } from '../Assets/weather_icons/mist.svg';
import { ReactComponent as SmokeDay } from '../Assets/weather_icons/smoke.svg';
import { ReactComponent as SmokeNight } from '../Assets/weather_icons/partly-cloudy-night-smoke.svg';
import { ReactComponent as HazeDay } from '../Assets/weather_icons/haze-day.svg';
import { ReactComponent as HazeNight } from '../Assets/weather_icons/haze-night.svg';
import { ReactComponent as DustWind } from '../Assets/weather_icons/dust-wind.svg';
import { ReactComponent as DustDay } from '../Assets/weather_icons/dust-day.svg';
import { ReactComponent as DustNight } from '../Assets/weather_icons/dust-night.svg';
import { ReactComponent as FogDay } from '../Assets/weather_icons/fog-day.svg';
import { ReactComponent as FogNight } from '../Assets/weather_icons/fog-night.svg';
import { ReactComponent as Wind } from '../Assets/weather_icons/wind.svg';
import { ReactComponent as Tornado } from '../Assets/weather_icons/tornado.svg';
import { ReactComponent as CloudyDay } from '../Assets/weather_icons/partly-cloudy-day.svg';
import { ReactComponent as CloudyNight } from '../Assets/weather_icons/partly-cloudy-night.svg';
import { ReactComponent as ClearDay } from '../Assets/weather_icons/clear-day.svg';
import { ReactComponent as ClearNight } from '../Assets/weather_icons/clear-night.svg';

export default function WeatherIcon({ weatherID, dayTime }) {

	const weatherSVG = () => {
		if (dayTime === true) {
			if (weatherID > 200 && weatherID < 300) {
				if (weatherID >= 210 && weatherID <= 221) {
					return <ThunderstormsDay/>;
				} else {
					return <ThunderstormsRainDay/>;
				}
			} else if (weatherID > 300 && weatherID < 400) {
				return <DrizzleDay/>;
			} else if (weatherID > 500 && weatherID < 600) {
				return <RainDay/>;
			} else if (weatherID > 600 && weatherID < 700) {
				return <SnowDay/>;
			} else if (weatherID === 701) {
				return <Mist/>;
			} else if (weatherID === 711) {
				return <SmokeDay/>;
			} else if (weatherID === 721) {
				return <HazeDay/>;
			} else if (weatherID === 731 || weatherID === 751) {
				return <DustWind/>;
			} else if (weatherID === 741) {
				return <FogDay/>;
			} else if (weatherID === 761 || weatherID === 762) {
				return <DustDay/>;
			} else if (weatherID === 771) {
				return <Wind/>;
			} else if (weatherID === 781) {
				return <Tornado/>;
			} else if (weatherID > 800) {
				return <CloudyDay/>;
			} else {
				return <ClearDay/>; //Default value is clear
			}
		} else {
			if (weatherID > 200 && weatherID < 300) {
				if (weatherID >= 210 && weatherID <= 221) {
					return <ThunderstormsNight/>;
				} else {
					return <ThunderstormsRainNight/>;
				}
			} else if (weatherID > 300 && weatherID < 400) {
				return <DrizzleNight/>;
			} else if (weatherID > 500 && weatherID < 600) {
				return <RainNight/>;
			} else if (weatherID > 600 && weatherID < 700) {
				return <SnowNight/>;
			} else if (weatherID === 701) {
				return <Mist/>;
			} else if (weatherID === 711) {
				return <SmokeNight/>;
			} else if (weatherID === 721) {
				return <HazeNight/>;
			} else if (weatherID === 731 || weatherID === 751) {
				return <DustWind/>;
			} else if (weatherID === 741) {
				return <FogNight/>;
			} else if (weatherID === 761 || weatherID === 762) {
				return <DustNight/>;
			} else if (weatherID === 771) {
				return <Wind/>;
			} else if (weatherID === 781) {
				return <Tornado/>;
			} else if (weatherID > 800) {
				return <CloudyNight/>;
			} else {
				return <ClearNight/>; //Default value is clear
			}
		}
	};

	return (
		<SvgIcon sx={{ fontSize: '200px' }}>
			{weatherSVG()}
		</SvgIcon>
	);
}