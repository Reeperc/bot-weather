export interface WeatherData {
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
    city: string;
}

export interface BotResponse {
    status: string;
    message: string;
    data?: WeatherData;
}