# Wanderlust

My JavaScript exam project — a travel planner built with plain JS (ES modules + classes), no frameworks.

You pick a country, a city and a year on the dashboard, and the rest of the app follows that choice.

## Pages

- **Dashboard** – country / city / year selection, quick stats and info about the country (population, currency, languages, local time, neighbours...)
- **Holidays** – public holidays for that year (Nager.Date)
- **Events** – concerts, sports and shows in the selected city (Ticketmaster). If Ticketmaster has nothing for the city it shows sample events instead.
- **Weather** – current weather, hourly and 7 day forecast (Open-Meteo)
- **Long Weekends** – long weekends in the year with bridge day hints (Nager.Date)
- **Currency** – live converter with swap and quick convert cards (ExchangeRate-API)
- **Sun Times** – sunrise / sunset / golden hour for any date (Sunrise-Sunset API)
- **My Plans** – everything you saved with the heart button, stored in localStorage

Bonus: the URL changes with every page (`/holidays`, `/weather`, `/plans`...) and the whole thing is written in OOP style (one class per page, per API, etc).

## Files

```
index.html      the page
css/style.css   all the styles
js/main.js      all the JavaScript (classes for the app, the pages and each API)
```

## How to run

Just open `index.html` in the browser (double click works), or use Live Server in VS Code. No build step, no npm.

The URL follows the page you are on. On a normal host like Vercel it is `/weather`, `/plans`... and when the file is opened directly or from Live Server it falls back to `#/weather` because those can't serve clean URLs.

## Note

REST Countries (from the docs) got shut down and the new version needs an API key, so I'm using countries.dev which has the same data for free. Capital coordinates come from Open-Meteo geocoding.
