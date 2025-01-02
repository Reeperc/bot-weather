import { Client, GatewayIntentBits, Message } from 'discord.js';
import WeatherService from './services/weatherService';
import { API_KEY, BASE_URL, UNITS } from './config/config';
import { WeatherData } from './types/types';
import 'dotenv/config';

// Initialisation du client Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Initialisation du service météo
const weatherService = new WeatherService(API_KEY, BASE_URL, UNITS);

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', async (message: Message) => {
    // Ignorer les messages envoyés par le bot lui-même
    if (message.author.bot) return;

    // Commande pour obtenir la météo
    if (message.content.toLowerCase().startsWith('!weather')) {
        const args = message.content.split(' ');
        const city = args[1]; // La ville spécifiée par l'utilisateur

        if (!city) {
            await message.reply('❗ Please specify a city. Example: `!weather Paris`');
            return;
        }

        try {
            const weatherData: WeatherData = await weatherService.getCurrentWeather(city);
            const response = `🌤️ Weather in ${weatherData.city}:\n` +
                `- 🌡️ Temperature: ${weatherData.temperature}°C\n` +
                `- ☁️ Condition: ${weatherData.description}\n` +
                `- 💧 Humidity: ${weatherData.humidity}%\n` +
                `- 🌬️ Wind Speed: ${weatherData.windSpeed} m/s`;

            await message.reply(response);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            await message.reply('⚠️ Sorry, I could not fetch the weather information for that city.');
        }
    }
});

// Connexion au bot avec le token
client.login(process.env.BOT_TOKEN);
