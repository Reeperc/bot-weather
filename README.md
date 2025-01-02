# Weather Bot

This project is a bot that provides real-time weather information for any city. It fetches data from a weather API and formats it for user-friendly output.

## Project Structure

```
weather-bot
├── src
│   ├── bot.ts               # Entry point for the bot
│   ├── services
│   │   └── weatherService.ts # Service for fetching and formatting weather data
│   ├── config
│   │   └── config.ts         # Configuration constants for the bot
│   └── types
│       └── types.ts         # Type definitions for weather data and bot responses
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Documentation for the project
```

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Reeperc/bot-weather
   ```

2. **Navigate to the project directory:**
   ```bash
   cd weather-bot
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file at the root of the project:**
   - Add your Discord Bot Token:
     ```
     BOT_TOKEN=your_discord_bot_token
     ```

   - **How to get your BOT_TOKEN:**
     1. Visit the [Discord Developer Portal](https://discord.com/developers/applications).
     2. Create a new application or select an existing one.
     3. Go to the **Bot** tab and click **Reset Token** to generate a new token.
     4. Copy the token and paste it into your `.env` file.

5. **Configure your API key in `src/config/config.ts`:**
   - Open the file and replace `your_openweather_api_key` with your actual API key from OpenWeather:
     ```typescript
     export const API_KEY = 'your_openweather_api_key';
     export const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
     export const UNITS = 'metric'; // Use 'imperial' for Fahrenheit
     ```

   - **How to get your OpenWeather API key:**
     1. Sign up at [OpenWeather](https://openweathermap.org/api).
     2. Go to the **API Keys** section in your dashboard.
     3. Generate a new key and copy it.

---

## Permission Configuration on Discord

To ensure the bot works correctly, make sure to configure its permissions:
1. Go to the **OAuth2** tab in the [Discord Developer Portal](https://discord.com/developers/applications).
2. Select **URL Generator** and check the following scopes:
   - **bot**
3. Under **Bot Permissions**, check these permissions:
   - **Read Messages/View Channels**
   - **Send Messages**
   - (Optional) **Embed Links** and **Attach Files** for better responses.

Copy the generated URL, paste it into your browser, and invite the bot to your server.

---

## Usage

To run the bot, execute the following command:
```bash
npm start
```

The bot will listen for incoming messages and respond with the current weather information for any city. 

### Commands:
- `!weather <city>`: Returns the current weather for the specified city.
  - Example: `!weather Paris`

---

## Functionality

- Fetches real-time weather data from an external API.
- Supports queries for any city worldwide.
- Formats weather data for easy understanding.
- Provides helpful error messages for invalid inputs or unavailable cities.

---

## Notes

- Ensure you have the correct permissions set for the bot in Discord.
- The `.env` file is excluded from Git to protect sensitive information. Make sure to create your own `.env` file.
