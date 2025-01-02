import fetch from 'node-fetch';
import { WeatherData } from '../types/types';

class WeatherService {
    private apiKey: string;
    private baseUrl: string;
    private units: string;

    constructor(apiKey: string, baseUrl: string, units: string = 'metric') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.units = units;
    }

    async getCurrentWeather(city: string): Promise<WeatherData> {
        const response = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=${this.units}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return this.formatWeatherResponse(data);
    }

    private formatWeatherResponse(data: any): WeatherData {
        const { main, weather, name, wind } = data;
        return {
            temperature: main.temp,
            description: weather[0].description,
            humidity: main.humidity,
            windSpeed: wind.speed,
            city: name,
        };
    }
}

export default WeatherService;
