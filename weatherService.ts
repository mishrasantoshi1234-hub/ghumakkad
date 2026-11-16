/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Live Weather Service using Open-Meteo API (Free, Keyless)
 */

import { WeatherInfo } from '../types/travel';

// WMO Weather interpretation codes (WW)
const WMO_CODE_MAP: Record<number, string> = {
  0: 'Clear sky ☀️',
  1: 'Mainly clear 🌤️',
  2: 'Partly cloudy ⛅',
  3: 'Overcast ☁️',
  45: 'Foggy 🌫️',
  48: 'Depositing rime fog 🌫️',
  51: 'Light drizzle 🌦️',
  53: 'Moderate drizzle 🌦️',
  55: 'Dense drizzle 🌧️',
  61: 'Slight rain 🌧️',
  63: 'Moderate rain 🌧️',
  65: 'Heavy rain 🌧️',
  71: 'Slight snowfall 🌨️',
  73: 'Moderate snowfall 🌨️',
  75: 'Heavy snowfall ❄️',
  80: 'Rain showers 🌦️',
  81: 'Moderate rain showers 🌧️',
  82: 'Violent rain showers ⛈️',
  95: 'Thunderstorm ⛈️',
  96: 'Thunderstorm with hail ⛈️'
};

export async function fetchLiveWeather(
  lat: number,
  lng: number,
  fallbackInfo: WeatherInfo
): Promise<WeatherInfo> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second safety timeout

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Open-Meteo error: ${response.status}`);
    }

    const data = await response.json();
    const current = data.current;

    if (current && typeof current.temperature_2m === 'number') {
      const weatherCode = current.weather_code ?? 0;
      const conditionText = WMO_CODE_MAP[weatherCode] || 'Pleasant & Clear 🌤️';

      return {
        temperatureC: Math.round(current.temperature_2m),
        conditionText,
        humidity: current.relative_humidity_2m,
        windSpeedKmH: Math.round(current.wind_speed_10m || 10),
        isLive: true,
        weatherCode,
        bestMonthsToVisit: fallbackInfo.bestMonthsToVisit,
        seasonalHighlights: fallbackInfo.seasonalHighlights,
        rainfallInfo: fallbackInfo.rainfallInfo
      };
    }
  } catch (err) {
    console.log('[WeatherService] Live weather request bypassed/failed, utilizing seasonal data:', err);
  }

  // Graceful fallback to verified seasonal data
  return {
    ...fallbackInfo,
    isLive: false
  };
}
