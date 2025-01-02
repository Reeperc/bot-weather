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
│   │   └── index.ts         # Configuration constants for the bot
│   └── types
│       └── index.ts         # Type definitions for weather data and bot responses
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Documentation for  the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd weather-bot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Configure your API key in `src/config/index.ts`.

## Usage

To run the bot, execute the following command:
```
npm start
```

The bot will listen for incoming messages and respond with the current weather information for Le Petit-Quevilly.

## Functionality

- Fetches real-time weather data from an external API.
- Formats the weather data for easy understanding.
- Responds to user queries about the weather in Le Petit-Quevilly.
