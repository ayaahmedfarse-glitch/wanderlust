const API = {
  TICKETMASTER_KEY: 'VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y',
  EXCHANGE_RATE_KEY: '805842951e5953ad31497176',

  NAGER: 'https://date.nager.at/api/v3',
  OPEN_METEO: 'https://api.open-meteo.com/v1',
  COUNTRIES_DEV: 'https://countries.dev',
  REST_COUNTRIES: 'https://restcountries.com/v3.1',
  WORLD_COUNTRIES: 'https://cdn.jsdelivr.net/npm/world-countries@5/countries.json',
  GEOCODING: 'https://geocoding-api.open-meteo.com/v1',
  TICKETMASTER: 'https://app.ticketmaster.com/discovery/v2',
  EXCHANGE_RATE: 'https://v6.exchangerate-api.com/v6',
  SUNRISE_SUNSET: 'https://api.sunrise-sunset.org/json',
  FLAG_CDN: 'https://flagcdn.com',
};

const STORAGE_KEYS = {
  PLANS: 'wanderlust_plans',
  SELECTION: 'wanderlust_selection',
};

const CITIES = {
  EG: [
    { name: 'Cairo', lat: 30.0444, lon: 31.2357 },
    { name: 'Alexandria', lat: 31.2001, lon: 29.9187 },
    { name: 'Giza', lat: 30.0131, lon: 31.2089 },
    { name: 'Luxor', lat: 25.6872, lon: 32.6396 },
    { name: 'Aswan', lat: 24.0889, lon: 32.8998 },
    { name: 'Hurghada', lat: 27.2579, lon: 33.8116 },
    { name: 'Sharm El Sheikh', lat: 27.9158, lon: 34.33 },
  ],
  US: [
    { name: 'New York', lat: 40.7128, lon: -74.006 },
    { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
    { name: 'Chicago', lat: 41.8781, lon: -87.6298 },
    { name: 'Miami', lat: 25.7617, lon: -80.1918 },
    { name: 'San Francisco', lat: 37.7749, lon: -122.4194 },
    { name: 'Las Vegas', lat: 36.1699, lon: -115.1398 },
  ],
  GB: [
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'Manchester', lat: 53.4808, lon: -2.2426 },
    { name: 'Edinburgh', lat: 55.9533, lon: -3.1883 },
    { name: 'Birmingham', lat: 52.4862, lon: -1.8904 },
    { name: 'Liverpool', lat: 53.4084, lon: -2.9916 },
  ],
  DE: [
    { name: 'Berlin', lat: 52.52, lon: 13.405 },
    { name: 'Munich', lat: 48.1351, lon: 11.582 },
    { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 },
    { name: 'Hamburg', lat: 53.5511, lon: 9.9937 },
    { name: 'Cologne', lat: 50.9375, lon: 6.9603 },
  ],
  FR: [
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Lyon', lat: 45.764, lon: 4.8357 },
    { name: 'Marseille', lat: 43.2965, lon: 5.3698 },
    { name: 'Nice', lat: 43.7102, lon: 7.262 },
    { name: 'Bordeaux', lat: 44.8378, lon: -0.5792 },
  ],
  IT: [
    { name: 'Rome', lat: 41.9028, lon: 12.4964 },
    { name: 'Milan', lat: 45.4642, lon: 9.19 },
    { name: 'Florence', lat: 43.7696, lon: 11.2558 },
    { name: 'Venice', lat: 45.4408, lon: 12.3155 },
    { name: 'Naples', lat: 40.8518, lon: 14.2681 },
  ],
  ES: [
    { name: 'Madrid', lat: 40.4168, lon: -3.7038 },
    { name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
    { name: 'Seville', lat: 37.3891, lon: -5.9845 },
    { name: 'Valencia', lat: 39.4699, lon: -0.3763 },
    { name: 'Bilbao', lat: 43.263, lon: -2.935 },
  ],
  NL: [
    { name: 'Amsterdam', lat: 52.3676, lon: 4.9041 },
    { name: 'Rotterdam', lat: 51.9244, lon: 4.4777 },
    { name: 'The Hague', lat: 52.0705, lon: 4.3007 },
    { name: 'Utrecht', lat: 52.0907, lon: 5.1214 },
  ],
  PT: [
    { name: 'Lisbon', lat: 38.7223, lon: -9.1393 },
    { name: 'Porto', lat: 41.1579, lon: -8.6291 },
    { name: 'Faro', lat: 37.0194, lon: -7.9322 },
  ],
  AT: [
    { name: 'Vienna', lat: 48.2082, lon: 16.3738 },
    { name: 'Salzburg', lat: 47.8095, lon: 13.055 },
    { name: 'Innsbruck', lat: 47.2692, lon: 11.4041 },
  ],
  CH: [
    { name: 'Zurich', lat: 47.3769, lon: 8.5417 },
    { name: 'Geneva', lat: 46.2044, lon: 6.1432 },
    { name: 'Bern', lat: 46.948, lon: 7.4474 },
  ],
  BE: [
    { name: 'Brussels', lat: 50.8503, lon: 4.3517 },
    { name: 'Antwerp', lat: 51.2194, lon: 4.4025 },
    { name: 'Bruges', lat: 51.2093, lon: 3.2247 },
  ],
  SE: [
    { name: 'Stockholm', lat: 59.3293, lon: 18.0686 },
    { name: 'Gothenburg', lat: 57.7089, lon: 11.9746 },
    { name: 'Malmo', lat: 55.6059, lon: 13.0007 },
  ],
  NO: [
    { name: 'Oslo', lat: 59.9139, lon: 10.7522 },
    { name: 'Bergen', lat: 60.3913, lon: 5.3221 },
  ],
  DK: [
    { name: 'Copenhagen', lat: 55.6761, lon: 12.5683 },
    { name: 'Aarhus', lat: 56.1629, lon: 10.2039 },
  ],
  PL: [
    { name: 'Warsaw', lat: 52.2297, lon: 21.0122 },
    { name: 'Krakow', lat: 50.0647, lon: 19.945 },
    { name: 'Gdansk', lat: 54.352, lon: 18.6466 },
  ],
  CZ: [
    { name: 'Prague', lat: 50.0755, lon: 14.4378 },
    { name: 'Brno', lat: 49.1951, lon: 16.6068 },
  ],
  GR: [
    { name: 'Athens', lat: 37.9838, lon: 23.7275 },
    { name: 'Thessaloniki', lat: 40.6401, lon: 22.9444 },
  ],
  TR: [
    { name: 'Istanbul', lat: 41.0082, lon: 28.9784 },
    { name: 'Ankara', lat: 39.9334, lon: 32.8597 },
    { name: 'Antalya', lat: 36.8969, lon: 30.7133 },
    { name: 'Izmir', lat: 38.4237, lon: 27.1428 },
  ],
  MA: [
    { name: 'Rabat', lat: 34.0209, lon: -6.8416 },
    { name: 'Casablanca', lat: 33.5731, lon: -7.5898 },
    { name: 'Marrakech', lat: 31.6295, lon: -7.9811 },
  ],
  JP: [
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
    { name: 'Osaka', lat: 34.6937, lon: 135.5023 },
    { name: 'Kyoto', lat: 35.0116, lon: 135.7681 },
  ],
  AU: [
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
    { name: 'Melbourne', lat: -37.8136, lon: 144.9631 },
    { name: 'Brisbane', lat: -27.4698, lon: 153.0251 },
  ],
  CA: [
    { name: 'Toronto', lat: 43.6532, lon: -79.3832 },
    { name: 'Vancouver', lat: 49.2827, lon: -123.1207 },
    { name: 'Montreal', lat: 45.5017, lon: -73.5673 },
  ],
  BR: [
    { name: 'São Paulo', lat: -23.5505, lon: -46.6333 },
    { name: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729 },
  ],
  MX: [
    { name: 'Mexico City', lat: 19.4326, lon: -99.1332 },
    { name: 'Cancun', lat: 21.1619, lon: -86.8515 },
  ],
  IE: [
    { name: 'Dublin', lat: 53.3498, lon: -6.2603 },
    { name: 'Cork', lat: 51.8985, lon: -8.4756 },
  ],
  FI: [{ name: 'Helsinki', lat: 60.1699, lon: 24.9384 }],
  ZA: [
    { name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
    { name: 'Johannesburg', lat: -26.2041, lon: 28.0473 },
  ],
};

const CURRENCY_NAMES = {
  USD: 'US Dollar', EUR: 'Euro', GBP: 'British Pound', JPY: 'Japanese Yen', AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar', CHF: 'Swiss Franc', CNY: 'Chinese Yuan', INR: 'Indian Rupee', EGP: 'Egyptian Pound',
  AED: 'UAE Dirham', SAR: 'Saudi Riyal', KWD: 'Kuwaiti Dinar', BHD: 'Bahraini Dinar', OMR: 'Omani Rial',
  QAR: 'Qatari Riyal', JOD: 'Jordanian Dinar', LBP: 'Lebanese Pound', MAD: 'Moroccan Dirham', TND: 'Tunisian Dinar',
  DZD: 'Algerian Dinar', LYD: 'Libyan Dinar', SDG: 'Sudanese Pound', IQD: 'Iraqi Dinar', SYP: 'Syrian Pound',
  YER: 'Yemeni Rial', TRY: 'Turkish Lira', ZAR: 'South African Rand', NGN: 'Nigerian Naira', KES: 'Kenyan Shilling',
  GHS: 'Ghanaian Cedi', BRL: 'Brazilian Real', MXN: 'Mexican Peso', ARS: 'Argentine Peso', CLP: 'Chilean Peso',
  COP: 'Colombian Peso', PEN: 'Peruvian Sol', NZD: 'New Zealand Dollar', SGD: 'Singapore Dollar', HKD: 'Hong Kong Dollar',
  TWD: 'Taiwan Dollar', KRW: 'South Korean Won', THB: 'Thai Baht', MYR: 'Malaysian Ringgit', IDR: 'Indonesian Rupiah',
  PHP: 'Philippine Peso', VND: 'Vietnamese Dong', PKR: 'Pakistani Rupee', BDT: 'Bangladeshi Taka', LKR: 'Sri Lankan Rupee',
  NPR: 'Nepalese Rupee', RUB: 'Russian Ruble', UAH: 'Ukrainian Hryvnia', PLN: 'Polish Zloty', CZK: 'Czech Koruna',
  HUF: 'Hungarian Forint', RON: 'Romanian Leu', BGN: 'Bulgarian Lev', RSD: 'Serbian Dinar', SEK: 'Swedish Krona',
  NOK: 'Norwegian Krone', DKK: 'Danish Krone', ISK: 'Icelandic Krona', ILS: 'Israeli Shekel', MUR: 'Mauritian Rupee',
  ETB: 'Ethiopian Birr', TZS: 'Tanzanian Shilling', UGX: 'Ugandan Shilling', XOF: 'West African CFA Franc',
};

const POPULAR_CURRENCIES = [
  { code: 'EUR', flag: 'eu' }, { code: 'GBP', flag: 'gb' }, { code: 'EGP', flag: 'eg' }, { code: 'AED', flag: 'ae' },
  { code: 'SAR', flag: 'sa' }, { code: 'JPY', flag: 'jp' }, { code: 'CAD', flag: 'ca' }, { code: 'INR', flag: 'in' },
];

const WEATHER_CODES = {
  0: { icon: 'fa-sun', desc: 'Clear sky', theme: 'sunny' },
  1: { icon: 'fa-sun', desc: 'Mainly clear', theme: 'sunny' },
  2: { icon: 'fa-cloud-sun', desc: 'Partly cloudy', theme: 'cloudy' },
  3: { icon: 'fa-cloud', desc: 'Overcast', theme: 'cloudy' },
  45: { icon: 'fa-smog', desc: 'Foggy', theme: 'foggy' },
  48: { icon: 'fa-smog', desc: 'Rime fog', theme: 'foggy' },
  51: { icon: 'fa-cloud-rain', desc: 'Light drizzle', theme: 'rainy' },
  53: { icon: 'fa-cloud-rain', desc: 'Drizzle', theme: 'rainy' },
  55: { icon: 'fa-cloud-rain', desc: 'Dense drizzle', theme: 'rainy' },
  56: { icon: 'fa-cloud-rain', desc: 'Freezing drizzle', theme: 'rainy' },
  57: { icon: 'fa-cloud-rain', desc: 'Freezing drizzle', theme: 'rainy' },
  61: { icon: 'fa-cloud-showers-heavy', desc: 'Slight rain', theme: 'rainy' },
  63: { icon: 'fa-cloud-showers-heavy', desc: 'Rain', theme: 'rainy' },
  65: { icon: 'fa-cloud-showers-heavy', desc: 'Heavy rain', theme: 'rainy' },
  66: { icon: 'fa-cloud-showers-heavy', desc: 'Freezing rain', theme: 'rainy' },
  67: { icon: 'fa-cloud-showers-heavy', desc: 'Freezing rain', theme: 'rainy' },
  71: { icon: 'fa-snowflake', desc: 'Slight snow', theme: 'snowy' },
  73: { icon: 'fa-snowflake', desc: 'Snow', theme: 'snowy' },
  75: { icon: 'fa-snowflake', desc: 'Heavy snow', theme: 'snowy' },
  77: { icon: 'fa-snowflake', desc: 'Snow grains', theme: 'snowy' },
  80: { icon: 'fa-cloud-rain', desc: 'Rain showers', theme: 'rainy' },
  81: { icon: 'fa-cloud-showers-heavy', desc: 'Moderate showers', theme: 'rainy' },
  82: { icon: 'fa-cloud-showers-heavy', desc: 'Violent showers', theme: 'rainy' },
  85: { icon: 'fa-snowflake', desc: 'Snow showers', theme: 'snowy' },
  86: { icon: 'fa-snowflake', desc: 'Heavy snow showers', theme: 'snowy' },
  95: { icon: 'fa-bolt', desc: 'Thunderstorm', theme: 'stormy' },
  96: { icon: 'fa-cloud-bolt', desc: 'Thunderstorm + hail', theme: 'stormy' },
  99: { icon: 'fa-cloud-bolt', desc: 'Heavy thunderstorm', theme: 'stormy' },
};

const EVENT_IMAGES = {
  music: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=250&fit=crop',
  sports: 'https://images.unsplash.com/photo-1461896836934-aba008cd3e95?w=400&h=250&fit=crop',
  arts: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=250&fit=crop',
  default: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=250&fit=crop',
};

const EVENT_SEGMENTS = {
  music: 'KZFzniwnSyZfZ7v7nJ',
  sports: 'KZFzniwnSyZfZ7v7nE',
  arts: 'KZFzniwnSyZfZ7v7na',
};

class Toast {
  static #icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-triangle-exclamation',
    info: 'fa-info-circle',
  };

  static show(message, type = 'info', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'warning' ? 'error' : type}`;
    toast.innerHTML = `
      <i class="fa-solid ${Toast.#icons[type] || Toast.#icons.info}"></i>
      <span>${escapeHtml(message)}</span>
      <button class="toast-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    `;
    toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(() => toast.remove(), 280);
    }, duration);
  }
}

class Loader {
  static show(text = 'Loading...') {
    const overlay = document.getElementById('loading-overlay');
    const label = document.getElementById('loading-text');
    if (label) label.textContent = text;
    overlay?.classList.remove('hidden');
  }

  static hide() {
    document.getElementById('loading-overlay')?.classList.add('hidden');
  }
}

const fmt = {
  date(value, opts = { month: 'short', day: 'numeric', year: 'numeric' }) {
    if (!value) return '';
    return new Date(value).toLocaleDateString('en-US', opts);
  },
  weekday(value) {
    return new Date(value).toLocaleDateString('en-US', { weekday: 'long' });
  },
  time(value) {
    return new Date(value).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  },
  hour(h) {
    if (h === 0) return '12 AM';
    if (h === 12) return '12 PM';
    return h > 12 ? `${h - 12} PM` : `${h} AM`;
  },
  number(n, digits = 2) {
    return Number(n).toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  },
  isoDate(d = new Date()) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  },
  compass(deg) {
    const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return dirs[Math.round(deg / 22.5) % 16];
  },
};

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function emptyState({ icon, title, text, action }) {
  return `
    <div class="empty-state">
      <div class="empty-icon"><i class="fa-solid ${icon}"></i></div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      ${action ? `<button class="btn-primary" data-navigate="${action.route}"><i class="fa-solid ${action.icon || 'fa-globe'}"></i> ${escapeHtml(action.label)}</button>` : ''}
    </div>
  `;
}

const needsCountryState = emptyState({
  icon: 'fa-globe',
  title: 'No Country Selected',
  text: 'Select a country from the dashboard first to explore this section.',
  action: { route: 'dashboard', label: 'Go to Dashboard' },
});

function errorState(text = 'Something went wrong. Please try again.', err = null) {
  const detail = err?.status === 429 ? ' The service is rate-limiting requests right now – wait a moment and retry.' : '';
  return `
    <div class="empty-state">
      <div class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <h3>Oops!</h3>
      <p>${escapeHtml(text + detail)}</p>
      <button class="btn-primary" data-retry><i class="fa-solid fa-rotate-right"></i> Try Again</button>
    </div>
  `;
}

class AppState {
  #listeners = new Set();

  constructor() {
    this.reset(false);
    this.#restore();
  }

  reset(notify = true) {
    this.countryCode = null;
    this.countryName = null;
    this.cityName = null;
    this.cityLat = null;
    this.cityLon = null;
    this.year = new Date().getFullYear();
    if (notify) this.#emit();
  }

  get hasCountry() {
    return Boolean(this.countryCode);
  }

  get hasCoords() {
    return this.cityLat !== null && this.cityLon !== null;
  }

  get cityQuery() {
    return this.cityName ? this.cityName.replace(' (Capital)', '') : '';
  }

  update(partial) {
    Object.assign(this, partial);
    this.#persist();
    this.#emit();
  }

  subscribe(fn) {
    this.#listeners.add(fn);
    return () => this.#listeners.delete(fn);
  }

  toJSON() {
    const { countryCode, countryName, cityName, cityLat, cityLon, year } = this;
    return { countryCode, countryName, cityName, cityLat, cityLon, year };
  }

  #emit() {
    this.#listeners.forEach((fn) => fn(this));
  }

  #persist() {
    try {
      localStorage.setItem(STORAGE_KEYS.SELECTION, JSON.stringify(this));
    } catch {}
  }

  #restore() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTION));
      if (saved && saved.countryCode) Object.assign(this, saved);
    } catch {}
  }
}

class PlansStore {
  #plans = [];
  #listeners = new Set();

  constructor() {
    this.#load();
  }

  get all() {
    return [...this.#plans];
  }

  get count() {
    return this.#plans.length;
  }

  byType(type) {
    return type === 'all' ? this.all : this.#plans.filter((p) => p.type === type);
  }

  counts() {
    return {
      all: this.#plans.length,
      holiday: this.byType('holiday').length,
      event: this.byType('event').length,
      longweekend: this.byType('longweekend').length,
    };
  }

  static keyFor(type, data) {
    switch (type) {
      case 'holiday':
        return `holiday:${data.countryCode}:${data.date}:${data.name}`;
      case 'event':
        return `event:${data.id}`;
      case 'longweekend':
        return `longweekend:${data.countryCode}:${data.startDate}:${data.endDate}`;
      default:
        return `${type}:${JSON.stringify(data)}`;
    }
  }

  has(type, data) {
    const key = PlansStore.keyFor(type, data);
    return this.#plans.some((p) => p.key === key);
  }

  add(type, data) {
    if (this.has(type, data)) return false;
    this.#plans.push({
      id: Date.now() + Math.floor(Math.random() * 1000),
      key: PlansStore.keyFor(type, data),
      type,
      data,
      savedAt: new Date().toISOString(),
    });
    this.#save();
    return true;
  }

  remove(id) {
    const before = this.#plans.length;
    this.#plans = this.#plans.filter((p) => p.id !== Number(id));
    if (this.#plans.length !== before) this.#save();
  }

  removeByKey(type, data) {
    const key = PlansStore.keyFor(type, data);
    this.#plans = this.#plans.filter((p) => p.key !== key);
    this.#save();
  }

  clear() {
    this.#plans = [];
    this.#save();
  }

  subscribe(fn) {
    this.#listeners.add(fn);
    return () => this.#listeners.delete(fn);
  }

  #load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.PLANS));
      this.#plans = Array.isArray(raw) ? raw : [];
    } catch {
      this.#plans = [];
    }
  }

  #save() {
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(this.#plans));
    this.#listeners.forEach((fn) => fn(this));
  }
}

class ApiClient {
  #cache = new Map();

  async get(url, { cache = true, ttl = Infinity } = {}) {
    const hit = cache ? this.#cache.get(url) : null;
    if (hit && hit.expires > Date.now()) return hit.data;

    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
      const err = new Error(`Request failed (${res.status}) for ${url}`);
      err.status = res.status;
      throw err;
    }
    const data = await res.json();
    if (cache) this.#cache.set(url, { data, expires: Date.now() + ttl });
    return data;
  }
}

const client = new ApiClient();

class HolidayService {
  async getCountries() {
    const list = await client.get(`${API.NAGER}/AvailableCountries`);
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }

  async getPublicHolidays(year, countryCode) {
    return client.get(`${API.NAGER}/PublicHolidays/${year}/${countryCode}`);
  }

  async getLongWeekends(year, countryCode) {
    return client.get(`${API.NAGER}/LongWeekend/${year}/${countryCode}`);
  }
}

class CountryService {
  #normalized = new Map();

  async getByCode(code) {
    const key = String(code).toUpperCase();
    if (this.#normalized.has(key)) return this.#normalized.get(key);

    const sources = [
      async () => CountryService.fromV2(await client.get(`${API.COUNTRIES_DEV}/alpha/${key}`)),
      async () => {
        const d = await client.get(`${API.REST_COUNTRIES}/alpha/${key}`);
        return CountryService.fromV3(Array.isArray(d) ? d[0] : d);
      },
      async () => {
        const all = await client.get(API.WORLD_COUNTRIES);
        const hit = all.find((c) => c.cca2 === key || c.cca3 === key);
        if (!hit) throw new Error('Not found');
        return CountryService.fromV3(hit);
      },
    ];

    let lastError;
    for (const source of sources) {
      try {
        const country = await source();
        if (country?.cca2) {
          this.#normalized.set(key, country);
          this.#normalized.set(country.cca2, country);
          return country;
        }
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError || new Error(`Country ${key} not found`);
  }

  async getCapital(code) {
    const country = await this.getByCode(code);
    const name = country.capital?.[0];
    if (!name) return null;

    if (!country.capitalInfo?.latlng) {
      const geo = await this.geocode(name, country.cca2);
      if (geo) country.capitalInfo = { latlng: [geo.lat, geo.lon], timezone: geo.timezone };
    }
    const latlng = country.capitalInfo?.latlng;
    return latlng ? { name, lat: latlng[0], lon: latlng[1] } : null;
  }

  async geocode(name, countryCode) {
    const params = new URLSearchParams({ name, count: 10, language: 'en', format: 'json' });
    const data = await client.get(`${API.GEOCODING}/search?${params}`);
    const results = data.results || [];
    const hit =
      results.find((r) => r.country_code === countryCode && r.feature_code === 'PPLC') ||
      results.find((r) => r.country_code === countryCode) ||
      null;
    return hit ? { lat: hit.latitude, lon: hit.longitude, timezone: hit.timezone } : null;
  }

  static fromV2(c) {
    const toMap = (arr, key, val) => Object.fromEntries((arr || []).map((x) => [x[key], val(x)]));
    return {
      cca2: c.alpha2Code,
      cca3: c.alpha3Code,
      name: { common: c.name, official: c.nativeName && c.nativeName !== c.name ? `${c.name} (${c.nativeName})` : c.name },
      capital: c.capital ? [c.capital] : [],
      capitalInfo: null,
      population: c.population,
      area: c.area,
      region: c.region,
      subregion: c.subregion,
      continents: c.region ? [c.region] : [],
      languages: toMap(c.languages, 'iso639_1', (l) => l.name),
      currencies: toMap(c.currencies, 'code', (cur) => ({ name: cur.name, symbol: cur.symbol })),
      timezones: c.timezones || [],
      borders: c.borders || [],
      idd: { root: c.callingCodes?.[0] ? `+${c.callingCodes[0]}` : '', suffixes: [] },
      flags: c.flags || { png: `${API.FLAG_CDN}/w320/${String(c.alpha2Code).toLowerCase()}.png` },
      maps: { googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name)}` },
      demonym: c.demonym,
      tld: c.topLevelDomain || [],
      latlng: c.latlng,
    };
  }

  static fromV3(c) {
    return {
      cca2: c.cca2,
      cca3: c.cca3,
      name: { common: c.name?.common, official: c.name?.official || c.name?.common },
      capital: c.capital || [],
      capitalInfo: c.capitalInfo?.latlng ? { latlng: c.capitalInfo.latlng } : null,
      population: c.population,
      area: c.area,
      region: c.region,
      subregion: c.subregion,
      continents: c.continents || (c.region ? [c.region] : []),
      languages: c.languages || {},
      currencies: c.currencies || {},
      timezones: c.timezones || [],
      borders: c.borders || [],
      idd: c.idd || { root: '', suffixes: [] },
      flags: c.flags || { png: `${API.FLAG_CDN}/w320/${String(c.cca2).toLowerCase()}.png` },
      maps: c.maps || { googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name?.common || '')}` },
      demonym: c.demonyms?.eng?.m,
      tld: c.tld || [],
      latlng: c.latlng,
      car: c.car,
      startOfWeek: c.startOfWeek,
    };
  }

  async getCities(code) {
    if (CITIES[code]) return CITIES[code];
    const capital = await this.getCapital(code);
    return capital ? [{ ...capital, name: `${capital.name} (Capital)` }] : [];
  }

  static flagUrl(code, size = 40) {
    return `${API.FLAG_CDN}/w${size}/${String(code).toLowerCase()}.png`;
  }
}

class WeatherService {
  async getForecast(lat, lon) {
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index',
      hourly: 'temperature_2m,weather_code,precipitation_probability',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant',
      timezone: 'auto',
      forecast_days: 7,
    });
    return client.get(`${API.OPEN_METEO}/forecast?${params}`, { ttl: 10 * 60 * 1000 });
  }

  async getTimezone(lat, lon) {
    const params = new URLSearchParams({ latitude: lat, longitude: lon, timezone: 'auto', forecast_days: 1 });
    const data = await client.get(`${API.OPEN_METEO}/forecast?${params}`);
    return data.timezone || 'UTC';
  }
}

class EventService {
  async search(city, countryCode, category = '') {
    const params = new URLSearchParams({
      apikey: API.TICKETMASTER_KEY,
      city,
      countryCode,
      size: 20,
      sort: 'date,asc',
    });
    if (category && EVENT_SEGMENTS[category]) params.set('segmentId', EVENT_SEGMENTS[category]);

    try {
      const data = await client.get(`${API.TICKETMASTER}/events.json?${params}`);
      const events = data?._embedded?.events || [];
      if (events.length) return { events, mock: false };
    } catch (err) {
      console.warn('Ticketmaster unavailable, using mock events:', err.message);
    }
    return { events: EventService.mockEvents(city, category), mock: true };
  }

  static mockEvents(city, category = '') {
    const catalog = {
      music: ['Jazz Night Live', 'Rock Festival', 'Symphony Orchestra', 'Electronic Dance Party', 'Oud & Strings Evening', 'World Music Celebration', 'Indie Band Showcase', 'Hip Hop Night'],
      sports: ['Football Derby', 'Basketball Game', 'Tennis Open', 'Marathon Race', 'Squash Championship', 'Boxing Night', 'Handball Cup', 'Cycling Tour'],
      arts: ['Theatre Play', 'Ballet Performance', 'Comedy Show', 'Opera Night', 'Art Exhibition', 'Stand-up Comedy', 'Film Festival', 'Dance Recital'],
    };
    const venues = {
      music: ['Music Hall', 'Concert Arena', 'Live House', 'Amphitheater', 'Jazz Club'],
      sports: ['Stadium', 'Sports Arena', 'Olympic Center', 'Athletic Complex', 'Sports Park'],
      arts: ['Theatre', 'Opera House', 'Cultural Center', 'Art Gallery', 'Playhouse'],
    };
    const types = category && catalog[category] ? [category] : Object.keys(catalog);
    const seed = [...city].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    const today = new Date();

    return Array.from({ length: 8 }, (_, i) => {
      const type = types[(i + seed) % types.length];
      const date = new Date(today);
      date.setDate(date.getDate() + ((i * 3 + seed) % 40) + 1);
      const name = catalog[type][(i + seed) % catalog[type].length];
      const venue = venues[type][(i + seed) % venues[type].length];
      return {
        id: `mock-${seed}-${i}`,
        name: `${name} in ${city}`,
        url: '#',
        mock: true,
        dates: { start: { localDate: date.toISOString().slice(0, 10), localTime: `${18 + (i % 4)}:00:00` } },
        classifications: [{ segment: { name: type.charAt(0).toUpperCase() + type.slice(1) } }],
        images: [{ url: EVENT_IMAGES[type], width: 400 }],
        priceRanges: [{ currency: 'USD', min: 25 + ((i + seed) % 50), max: 100 + ((i + seed) % 100) }],
        _embedded: { venues: [{ name: `${city} ${venue}`, city: { name: city } }] },
      };
    });
  }
}

class CurrencyService {
  async getRates(base = 'USD') {
    const data = await client.get(`${API.EXCHANGE_RATE}/${API.EXCHANGE_RATE_KEY}/latest/${base}`);
    if (data.result !== 'success') throw new Error(data['error-type'] || 'Exchange rate error');
    return data;
  }

  async convert(amount, from, to) {
    const data = await this.getRates(from);
    const rate = data.conversion_rates?.[to];
    if (rate === undefined) throw new Error(`Currency ${to} not supported`);
    return { rate, result: amount * rate, updated: data.time_last_update_utc };
  }
}

class SunService {
  async getSunTimes(lat, lon, date) {
    const params = new URLSearchParams({ lat, lng: lon, date, formatted: 0 });
    const data = await client.get(`${API.SUNRISE_SUNSET}?${params}`);
    if (data.status !== 'OK') throw new Error(data.status);
    return data.results;
  }
}

class Router {
  #routes = new Map();
  #onChange;
  #useHash = true;
  #base = '';

  constructor(routes, onChange) {
    routes.forEach((r) => this.#routes.set(r, r));
    this.#onChange = onChange;
    this.#base = this.#detectBase();

    window.addEventListener('popstate', () => this.#onChange(this.current));
    window.addEventListener('hashchange', () => this.#onChange(this.current));
  }

  get current() {
    let path = location.hash.startsWith('#/')
      ? location.hash.slice(2)
      : location.pathname.slice(this.#base.length);
    path = path.replace(/^\/+|\/+$/g, '');
    return this.#routes.has(path) ? path : 'dashboard';
  }

  go(route, { replace = false } = {}) {
    if (!this.#routes.has(route)) route = 'dashboard';

    if (this.#useHash) {
      const hash = route === 'dashboard' ? '#/' : `#/${route}`;
      if (location.hash === hash) return this.#onChange(route);
      if (replace) history.replaceState(null, '', hash);
      else location.hash = hash;
      if (replace) this.#onChange(route);
      return;
    }

    const url = `${this.#base}/${route === 'dashboard' ? '' : route}`;
    if (replace) history.replaceState({ route }, '', url);
    else history.pushState({ route }, '', url);
    this.#onChange(route);
  }

  async start() {
    this.#useHash = !(await this.#serverSupportsCleanUrls());

    this.go(this.current, { replace: true });
  }

  async #serverSupportsCleanUrls() {
    if (location.protocol === 'file:') return false;
    if (location.hash.startsWith('#/')) return false;
    try {
      const res = await fetch(`${this.#base}/weather`, { cache: 'no-store' });
      return res.ok && (res.headers.get('content-type') || '').includes('text/html');
    } catch {
      return false;
    }
  }

  #detectBase() {
    if (location.protocol === 'file:') return '';
    let path = location.pathname.replace(/\/index\.html$/, '').replace(/\/+$/, '');
    const last = path.split('/').pop();
    if (this.#routes.has(last)) path = path.slice(0, -(last.length + 1));
    return path;
  }
}

class DropdownRegistry {
  static #instances = new Set();
  static #bound = false;

  static register(instance) {
    this.#instances.add(instance);
    if (!this.#bound) {
      document.addEventListener('click', () => this.closeAll());
      document.addEventListener('keydown', (e) => e.key === 'Escape' && this.closeAll());
      this.#bound = true;
    }
  }

  static closeAll(except = null) {
    this.#instances.forEach((i) => i !== except && i.close());
  }
}

class BaseSelect {
  constructor(select) {
    this.select = select;
    this.select.style.display = 'none';
    this.wrapper = document.createElement('div');
    this.trigger = document.createElement('div');
    this.dropdown = document.createElement('div');
    DropdownRegistry.register(this);
  }

  mount() {
    this.wrapper.append(this.trigger, this.dropdown);
    this.select.insertAdjacentElement('afterend', this.wrapper);

    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.trigger.classList.contains('disabled')) return;
      this.isOpen ? this.close() : this.open();
    });
    this.dropdown.addEventListener('click', (e) => e.stopPropagation());
  }

  get isOpen() {
    return this.dropdown.classList.contains('open');
  }

  get value() {
    return this.select.value;
  }

  open() {
    DropdownRegistry.closeAll(this);
    this.trigger.classList.add('open');
    this.dropdown.classList.add('open');
  }

  close() {
    this.trigger.classList.remove('open');
    this.dropdown.classList.remove('open');
  }

  setDisabled(disabled) {
    this.trigger.classList.toggle('disabled', disabled);
  }

  emitChange() {
    this.select.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

class CountrySelect extends BaseSelect {
  #countries = [];
  #flagUrl;

  constructor(select, { placeholder = 'Select Country', flagUrl }) {
    super(select);
    this.placeholder = placeholder;
    this.#flagUrl = flagUrl;

    this.wrapper.className = 'custom-select-wrapper';
    this.trigger.className = 'custom-select-trigger';
    this.trigger.innerHTML = `
      <span class="flag"></span>
      <span class="selected-text placeholder">${escapeHtml(placeholder)}</span>
      <i class="fa-solid fa-chevron-down arrow"></i>
    `;
    this.dropdown.className = 'custom-select-dropdown';
    this.dropdown.innerHTML = `
      <div class="custom-select-search">
        <i class="fa-solid fa-search"></i>
        <input type="text" placeholder="Search countries..." autocomplete="off" />
      </div>
      <div class="custom-select-options"></div>
    `;
    this.mount();

    this.searchInput = this.dropdown.querySelector('input');
    this.optionsEl = this.dropdown.querySelector('.custom-select-options');
    this.searchInput.addEventListener('input', () => this.#renderOptions(this.searchInput.value));
    this.optionsEl.addEventListener('click', (e) => {
      const opt = e.target.closest('.custom-select-option[data-value]');
      if (opt) this.setValue(opt.dataset.value);
    });
  }

  setCountries(countries) {
    this.#countries = countries;
    this.select.innerHTML =
      `<option value="">${escapeHtml(this.placeholder)}</option>` +
      countries.map((c) => `<option value="${c.countryCode}">${escapeHtml(c.name)}</option>`).join('');
    this.#renderOptions();
  }

  open() {
    super.open();
    setTimeout(() => this.searchInput.focus(), 50);
  }

  close() {
    super.close();
    if (this.searchInput.value) {
      this.searchInput.value = '';
      this.#renderOptions();
    }
  }

  setValue(code, { silent = false } = {}) {
    const country = this.#countries.find((c) => c.countryCode === code);
    const flag = this.trigger.querySelector('.flag');
    const text = this.trigger.querySelector('.selected-text');

    if (!country) {
      this.select.value = '';
      flag.innerHTML = '';
      text.textContent = this.placeholder;
      text.classList.add('placeholder');
    } else {
      this.select.value = code;
      flag.innerHTML = `<img src="${this.#flagUrl(code)}" alt="${code}" class="flag-img" onerror="this.style.display='none'">`;
      text.textContent = country.name;
      text.classList.remove('placeholder');
    }
    this.optionsEl.querySelectorAll('.custom-select-option').forEach((o) => {
      o.classList.toggle('selected', o.dataset.value === code);
    });
    this.close();
    if (!silent) this.emitChange();
  }

  #renderOptions(query = '') {
    const q = query.trim().toLowerCase();
    const list = q
      ? this.#countries.filter((c) => c.name.toLowerCase().includes(q) || c.countryCode.toLowerCase().includes(q))
      : this.#countries;

    if (!list.length) {
      this.optionsEl.innerHTML = '<div class="custom-select-option no-results">No countries found</div>';
      return;
    }
    this.optionsEl.innerHTML = list
      .map(
        (c) => `
        <div class="custom-select-option ${c.countryCode === this.value ? 'selected' : ''}" data-value="${c.countryCode}">
          <img src="${this.#flagUrl(c.countryCode)}" alt="${c.countryCode}" class="flag-img" loading="lazy" onerror="this.style.display='none'">
          <span class="country-name">${escapeHtml(c.name)}</span>
          <span class="country-code">${c.countryCode}</span>
        </div>`
      )
      .join('');
  }
}

class CurrencySelect extends BaseSelect {
  #currencies = [];

  constructor(select) {
    super(select);
    this.wrapper.className = 'currency-custom-select';
    this.trigger.className = 'currency-custom-trigger';
    this.trigger.innerHTML = `
      <span class="currency-code">---</span>
      <span class="currency-name">Loading...</span>
      <i class="fa-solid fa-chevron-down arrow"></i>
    `;
    this.dropdown.className = 'currency-custom-dropdown';
    this.dropdown.innerHTML = `
      <div class="currency-custom-search">
        <i class="fa-solid fa-search"></i>
        <input type="text" placeholder="Search currency..." autocomplete="off" />
      </div>
      <div class="currency-custom-options"></div>
    `;
    this.mount();

    this.searchInput = this.dropdown.querySelector('input');
    this.optionsEl = this.dropdown.querySelector('.currency-custom-options');
    this.searchInput.addEventListener('input', () => this.#renderOptions(this.searchInput.value));
    this.optionsEl.addEventListener('click', (e) => {
      const opt = e.target.closest('.currency-custom-option[data-value]');
      if (opt) this.setValue(opt.dataset.value);
    });
  }

  setCurrencies(currencies, selected) {
    this.#currencies = currencies;
    this.select.innerHTML = currencies.map((c) => `<option value="${c.code}">${c.code} - ${escapeHtml(c.name)}</option>`).join('');
    this.setValue(selected || currencies[0]?.code, { silent: true });
  }

  open() {
    super.open();
    this.#renderOptions();
    setTimeout(() => this.searchInput.focus(), 50);
  }

  close() {
    super.close();
    this.searchInput.value = '';
  }

  setValue(code, { silent = false } = {}) {
    const cur = this.#currencies.find((c) => c.code === code);
    if (!cur) return;
    this.select.value = code;
    this.trigger.querySelector('.currency-code').textContent = cur.code;
    this.trigger.querySelector('.currency-name').textContent = cur.name;
    this.close();
    if (!silent) this.emitChange();
  }

  #renderOptions(query = '') {
    const q = query.trim().toLowerCase();
    const list = q ? this.#currencies.filter((c) => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)) : this.#currencies;
    if (!list.length) {
      this.optionsEl.innerHTML = '<div class="currency-custom-option no-results">No currencies found</div>';
      return;
    }
    this.optionsEl.innerHTML = list
      .map(
        (c) => `
        <div class="currency-custom-option ${c.code === this.value ? 'selected' : ''}" data-value="${c.code}">
          <span class="code">${c.code}</span>
          <span class="name">${escapeHtml(c.name)}</span>
        </div>`
      )
      .join('');
  }
}

class SimpleSelect extends BaseSelect {
  #options = [];

  constructor(select, { placeholder = 'Select', icon = 'fa-list', emptyText = 'No options available' } = {}) {
    super(select);
    this.placeholder = placeholder;
    this.emptyText = emptyText;

    this.wrapper.className = 'simple-select-wrapper';
    this.trigger.className = 'simple-select-trigger';
    this.trigger.innerHTML = `
      <span class="select-icon"><i class="fa-solid ${icon}"></i></span>
      <span class="selected-text placeholder">${escapeHtml(placeholder)}</span>
      <i class="fa-solid fa-chevron-down arrow"></i>
    `;
    this.dropdown.className = 'simple-select-dropdown';
    this.mount();

    this.dropdown.addEventListener('click', (e) => {
      const opt = e.target.closest('.simple-select-option[data-value]');
      if (opt) this.setValue(opt.dataset.value);
    });
  }

  setOptions(options, { selected = '', emptyText } = {}) {
    this.#options = options;
    this.setDisabled(false);
    this.select.innerHTML = options
      .map((o) => `<option value="${escapeHtml(o.value)}">${escapeHtml(o.text)}</option>`)
      .join('');

    if (!options.length) {
      this.dropdown.innerHTML = `<div class="simple-select-option no-results">${escapeHtml(emptyText || this.emptyText)}</div>`;
      this.#setLabel(null);
      return;
    }
    this.dropdown.innerHTML = options
      .map((o) => `<div class="simple-select-option" data-value="${escapeHtml(o.value)}">${escapeHtml(o.text)}</div>`)
      .join('');
    this.setValue(selected, { silent: true });
  }

  setLoading(text = 'Loading...') {
    this.setDisabled(true);
    this.dropdown.innerHTML = `<div class="simple-select-option loading"><i class="fa-solid fa-spinner fa-spin"></i> ${escapeHtml(text)}</div>`;
    this.#setLabel({ text }, true);
  }

  get selectedOption() {
    return this.#options.find((o) => o.value === this.value) || null;
  }

  setValue(value, { silent = false } = {}) {
    const option = this.#options.find((o) => o.value === value && o.value !== '');
    this.select.value = option ? option.value : '';
    this.#setLabel(option);
    this.dropdown.querySelectorAll('.simple-select-option').forEach((el) => {
      el.classList.toggle('selected', Boolean(option) && el.dataset.value === option.value);
    });
    this.close();
    if (!silent) this.emitChange();
  }

  #setLabel(option, placeholderStyle = false) {
    const text = this.trigger.querySelector('.selected-text');
    text.textContent = option ? option.text : this.placeholder;
    text.classList.toggle('placeholder', !option || placeholderStyle);
  }
}

class BaseView {
  constructor(app, meta) {
    this.app = app;
    this.id = meta.id;
    this.title = meta.title;
    this.subtitle = meta.subtitle;
    this.requiresCountry = Boolean(meta.requiresCountry);
    this.requiresCity = Boolean(meta.requiresCity);
    this.renderedKey = null;
    this.section = document.getElementById(`${this.id}-view`);
  }

  get state() {
    return this.app.state;
  }

  get plans() {
    return this.app.plans;
  }

  get services() {
    return this.app.services;
  }

  bind() {}

  async activate() {
    this.updateBadge();

    if (this.requiresCountry && !this.state.hasCountry) {
      this.renderedKey = null;
      this.renderNeedsCountry();
      return;
    }
    if (this.requiresCity && !this.state.hasCoords) {
      await this.app.ensureCity();
      this.updateBadge();
    }

    const key = this.selectionKey();
    if (key !== this.renderedKey) {
      this.renderedKey = key;
      await this.load();
    }
  }

  async load() {}

  get contentEl() {
    return null;
  }

  renderNeedsCountry() {
    const el = this.contentEl;
    if (el) el.innerHTML = needsCountryState;
  }

  selectionKey() {
    const s = this.state;
    return `${s.countryCode}|${s.cityName}|${s.year}`;
  }

  invalidate() {
    this.renderedKey = null;
  }

  updateBadge() {
    const badge = this.section?.querySelector('.view-header-selection');
    if (!badge) return;

    if (!this.state.hasCountry) {
      badge.style.display = 'none';
      return;
    }
    badge.style.display = 'flex';
    const flag = badge.querySelector('.selection-flag');
    const name = badge.querySelector('.selection-country');
    const city = badge.querySelector('.selection-city');
    const year = badge.querySelector('.selection-year');

    if (flag) {
      flag.src = CountryService.flagUrl(this.state.countryCode);
      flag.alt = this.state.countryCode;
    }
    if (name) name.textContent = this.state.countryName;
    if (city) city.textContent = this.state.cityQuery || '';
    if (year) year.textContent = this.state.year;
  }

  refreshHearts(type, items) {
    this.section.querySelectorAll(`[data-plan-type="${type}"]`).forEach((btn) => {
      const item = items[Number(btn.dataset.index)];
      if (!item) return;
      const saved = this.plans.has(type, item);
      btn.classList.toggle('saved', saved);
      const icon = btn.querySelector('i');
      if (icon) icon.className = `fa-${saved ? 'solid' : 'regular'} fa-heart`;
    });
  }
}

class DashboardView extends BaseView {
  #countries = [];
  #clockTimer = null;
  #countrySelect;
  #citySelect;
  #yearSelect;

  constructor(app) {
    super(app, {
      id: 'dashboard',
      title: 'Dashboard',
      subtitle: 'Welcome back! Ready to plan your next adventure?',
    });
  }

  bind() {
    const countryEl = document.getElementById('global-country');
    const cityEl = document.getElementById('global-city');
    const yearEl = document.getElementById('global-year');

    this.#countrySelect = new CountrySelect(countryEl, {
      placeholder: 'Select Country',
      flagUrl: (code) => CountryService.flagUrl(code),
    });
    this.#citySelect = new SimpleSelect(cityEl, {
      placeholder: 'Select City',
      icon: 'fa-city',
      emptyText: 'Select a country first',
    });
    this.#yearSelect = new SimpleSelect(yearEl, { placeholder: 'Select Year', icon: 'fa-calendar' });

    const thisYear = new Date().getFullYear();
    this.#yearSelect.setOptions(
      [thisYear, thisYear + 1, thisYear + 2].map((y) => ({ value: String(y), text: String(y) })),
      { selected: String(this.state.year) }
    );
    this.#citySelect.setOptions([], { emptyText: 'Select a country first' });

    countryEl.addEventListener('change', () => this.#onCountryChange());
    cityEl.addEventListener('change', () => this.#onCityChange());
    yearEl.addEventListener('change', () => this.#onYearChange());

    document.getElementById('global-search-btn').addEventListener('click', () => this.#explore());
    document.getElementById('clear-selection-btn').addEventListener('click', () => this.clearSelection());

    document.getElementById('dashboard-country-info').addEventListener('click', (e) => {
      const tag = e.target.closest('[data-border]');
      if (tag) this.#selectBorderCountry(tag.dataset.border);
    });
  }

  async init() {
    try {
      this.#countries = await this.services.holidays.getCountries();
      this.#countrySelect.setCountries(this.#countries);
      document.getElementById('stat-countries').textContent = `${this.#countries.length}`;
    } catch (err) {
      console.error(err);
      Toast.show('Failed to load the country list', 'error');
    }

    if (this.state.hasCountry) {
      this.#countrySelect.setValue(this.state.countryCode, { silent: true });
      await this.#loadCities(this.state.countryCode, this.state.cityQuery);
      this.#renderSelectedDestination();
      this.#loadCountryInfo();
      this.#loadStats();
    } else {
      this.#renderCountryPlaceholder();
    }
    this.#renderSavedStat();
  }

  async load() {
    this.#renderSavedStat();
  }

  get countries() {
    return this.#countries;
  }

  async #onCountryChange() {
    const code = this.#countrySelect.value;
    if (!code) return this.clearSelection();

    const country = this.#countries.find((c) => c.countryCode === code);
    this.state.update({ countryCode: code, countryName: country?.name || code, cityName: null, cityLat: null, cityLon: null });
    this.app.invalidateViews();

    await this.#loadCities(code);
    this.#afterSelectionChange();
  }

  #onCityChange() {
    const opt = this.#citySelect.selectedOption;
    if (opt?.data) {
      this.state.update({ cityName: opt.text, cityLat: opt.data.lat, cityLon: opt.data.lon });
    } else {
      this.state.update({ cityName: null, cityLat: null, cityLon: null });
    }
    this.app.invalidateViews();
    this.#renderSelectedDestination();
    this.#loadStats();
  }

  #onYearChange() {
    this.state.update({ year: Number(this.#yearSelect.value) || new Date().getFullYear() });
    this.app.invalidateViews();
    this.#loadStats();
  }

  #afterSelectionChange() {
    this.#renderSelectedDestination();
    this.#loadCountryInfo();
    this.#loadStats();
  }

  #explore() {
    if (!this.state.hasCountry) {
      Toast.show('Please select a country first', 'warning');
      this.#countrySelect.open();
      return;
    }
    Toast.show(`Exploring ${this.state.countryName}${this.state.cityQuery ? ', ' + this.state.cityQuery : ''}!`, 'success');
    this.#afterSelectionChange();
    document.getElementById('dashboard-country-info-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  clearSelection() {
    this.state.reset();
    this.app.invalidateViews();
    this.#countrySelect.setValue('', { silent: true });
    this.#citySelect.setOptions([], { emptyText: 'Select a country first' });
    document.getElementById('selected-destination').classList.add('hidden');
    this.#renderCountryPlaceholder();
    this.#loadStats();
    Toast.show('Selection cleared', 'info');
  }

  syncCityFromState() {
    if (this.state.cityName) this.#citySelect.setValue(this.state.cityName, { silent: true });
    this.#renderSelectedDestination();
  }

  async #loadCities(code, preselect = '') {
    this.#citySelect.setLoading('Loading cities...');
    try {
      const cities = await this.services.countries.getCities(code);
      const options = [
        { value: '', text: 'Select City' },
        ...cities.map((c) => ({ value: c.name, text: c.name, data: { lat: c.lat, lon: c.lon } })),
      ];
      const selected = preselect || (cities.length === 1 ? cities[0].name : '');
      this.#citySelect.setOptions(options, { selected });

      const opt = this.#citySelect.selectedOption;
      if (opt?.data) {
        this.state.update({ cityName: opt.text, cityLat: opt.data.lat, cityLon: opt.data.lon });
      }
    } catch (err) {
      console.error(err);
      this.#citySelect.setOptions([], { emptyText: 'No city data available' });
    }
  }

  async #selectBorderCountry(cca3) {
    try {
      const country = await this.services.countries.getByCode(cca3);
      const cca2 = country?.cca2;
      const supported = this.#countries.find((c) => c.countryCode === cca2);
      if (!supported) {
        Toast.show(`${country?.name?.common || cca3} is not available in the holiday database`, 'info');
        return;
      }
      this.#countrySelect.setValue(cca2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      Toast.show('Could not load that country', 'error');
    }
  }

  #renderSelectedDestination() {
    const box = document.getElementById('selected-destination');
    if (!this.state.hasCountry) return box.classList.add('hidden');
    document.getElementById('selected-country-flag').src = CountryService.flagUrl(this.state.countryCode, 80);
    document.getElementById('selected-country-name').textContent = this.state.countryName;
    document.getElementById('selected-city-name').textContent = this.state.cityName ? `• ${this.state.cityName}` : '';
    box.classList.remove('hidden');
  }

  #renderSavedStat() {
    document.getElementById('stat-saved').textContent = this.plans.count;
  }

  async #loadStats() {
    this.#renderSavedStat();
    const holidaysEl = document.getElementById('stat-holidays');
    const eventsEl = document.getElementById('stat-events');

    if (!this.state.hasCountry) {
      holidaysEl.textContent = '–';
      eventsEl.textContent = '500+';
      return;
    }
    holidaysEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    this.services.holidays
      .getPublicHolidays(this.state.year, this.state.countryCode)
      .then((list) => (holidaysEl.textContent = list.length))
      .catch(() => (holidaysEl.textContent = '–'));

    if (this.state.cityQuery) {
      eventsEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
      this.services.events
        .search(this.state.cityQuery, this.state.countryCode)
        .then(({ events, mock }) => {
          eventsEl.textContent = events.length;
          eventsEl.title = mock ? 'Sample events (no live listings for this city)' : 'Live events from Ticketmaster';
        })
        .catch(() => (eventsEl.textContent = '–'));
    } else {
      eventsEl.textContent = '500+';
    }
  }

  #renderCountryPlaceholder(error = false) {
    this.#stopClock();
    document.getElementById('dashboard-country-info').innerHTML = `
      <div class="country-info-placeholder">
        <div class="placeholder-icon ${error ? 'error' : ''}">
          <i class="fa-solid ${error ? 'fa-exclamation-triangle' : 'fa-globe'}"></i>
        </div>
        <p>${error ? 'Failed to load country information. Please try again.' : 'Select a country to view detailed information'}</p>
      </div>`;
  }

  async #loadCountryInfo() {
    const el = document.getElementById('dashboard-country-info');
    if (!this.state.hasCountry) return this.#renderCountryPlaceholder();

    el.innerHTML = `
      <div class="country-info-loading">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span>Loading country information...</span>
      </div>`;
    try {
      const country = await this.services.countries.getByCode(this.state.countryCode);
      this.#renderCountryInfo(country);
    } catch (err) {
      console.error(err);
      this.#renderCountryPlaceholder(true);
    }
  }

  #renderCountryInfo(c) {
    const el = document.getElementById('dashboard-country-info');
    const name = c.name?.common || this.state.countryName;
    const official = c.name?.official || name;
    const capital = c.capital?.[0] || 'N/A';
    const languages = c.languages ? Object.values(c.languages) : [];
    const currencies = c.currencies ? Object.entries(c.currencies) : [];
    const borders = c.borders || [];
    const tz = c.timezones?.[0] || 'UTC';
    const callingCode = c.idd?.root ? `${c.idd.root}${c.idd.suffixes?.length === 1 ? c.idd.suffixes[0] : ''}` : 'N/A';
    const tzLabel = c.timezones?.length > 1 ? `${c.timezones[0]} +${c.timezones.length - 1}` : tz;

    const detail = (icon, label, value) => `
      <div class="dashboard-country-detail">
        <i class="fa-solid ${icon}"></i>
        <span class="label">${label}</span>
        <span class="value">${escapeHtml(value)}</span>
      </div>`;

    const tagBlock = (icon, title, tags) =>
      tags.length
        ? `<div class="dashboard-country-extra">
            <h4><i class="fa-solid ${icon}"></i> ${title}</h4>
            <div class="extra-tags">${tags.join('')}</div>
          </div>`
        : '';

    el.innerHTML = `
      <div class="dashboard-country-header">
        <img src="${c.flags?.svg || c.flags?.png || CountryService.flagUrl(c.cca2, 160)}" alt="${escapeHtml(name)}" class="dashboard-country-flag">
        <div class="dashboard-country-title">
          <h3>${escapeHtml(name)}</h3>
          <p class="official-name">${escapeHtml(official)}</p>
          <span class="region"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(c.region || '')}${c.subregion ? ` • ${escapeHtml(c.subregion)}` : ''}</span>
        </div>
      </div>

      <div class="dashboard-local-time">
        <div class="local-time-display">
          <i class="fa-solid fa-clock"></i>
          <span class="local-time-value" id="country-local-time">--:--:--</span>
          <span class="local-time-zone">${escapeHtml(tz)}</span>
        </div>
      </div>

      <div class="dashboard-country-grid">
        ${detail('fa-building-columns', 'Capital', capital)}
        ${detail('fa-users', 'Population', c.population?.toLocaleString() || 'N/A')}
        ${detail('fa-ruler-combined', 'Area', c.area ? `${c.area.toLocaleString()} km²` : 'N/A')}
        ${detail('fa-globe', 'Continent', c.continents?.[0] || c.region || 'N/A')}
        ${detail('fa-phone', 'Calling Code', callingCode)}
        ${detail('fa-user-tag', 'Demonym', c.demonym || 'N/A')}
        ${detail('fa-clock', 'Timezone', tzLabel)}
        ${detail('fa-at', 'Domain', c.tld?.[0] || 'N/A')}
      </div>

      <div class="dashboard-country-extras">
        ${tagBlock('fa-coins', 'Currency', currencies.map(([code, cur]) => `<span class="extra-tag">${escapeHtml(cur.name)} (${code}${cur.symbol ? ' ' + escapeHtml(cur.symbol) : ''})</span>`))}
        ${tagBlock('fa-language', 'Languages', languages.map((l) => `<span class="extra-tag">${escapeHtml(l)}</span>`))}
        ${tagBlock('fa-map-location-dot', 'Neighbors', borders.map((b) => `<span class="extra-tag border-tag" data-border="${b}" title="Explore ${b}">${b}</span>`))}
      </div>

      <div class="dashboard-country-actions">
        <a href="${escapeHtml(c.maps?.googleMaps || '#')}" target="_blank" rel="noopener" class="btn-map-link">
          <i class="fa-solid fa-map"></i> View on Google Maps
        </a>
      </div>`;

    this.#startClock(tz);
  }

  #startClock(tz) {
    this.#stopClock();
    const tick = () => {
      const el = document.getElementById('country-local-time');
      if (!el) return this.#stopClock();
      el.textContent = DashboardView.localTime(tz);
    };
    tick();
    this.#clockTimer = setInterval(tick, 1000);
  }

  #stopClock() {
    if (this.#clockTimer) clearInterval(this.#clockTimer);
    this.#clockTimer = null;
  }

  static localTime(tz) {
    const now = new Date();
    const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const m = /^UTC([+-])(\d{2}):?(\d{2})?$/.exec(tz || '');
    if (m) {
      const sign = m[1] === '+' ? 1 : -1;
      const offsetMin = sign * (Number(m[2]) * 60 + Number(m[3] || 0));
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      return new Date(utc + offsetMin * 60000).toLocaleTimeString('en-US', opts);
    }
    try {
      return now.toLocaleTimeString('en-US', { ...opts, timeZone: tz });
    } catch {
      return now.toLocaleTimeString('en-US', opts);
    }
  }
}

class HolidaysView extends BaseView {
  #items = [];

  constructor(app) {
    super(app, {
      id: 'holidays',
      title: 'Holidays',
      subtitle: 'Explore public holidays around the world',
      requiresCountry: true,
    });
  }

  get contentEl() {
    return document.getElementById('holidays-content');
  }

  bind() {
    this.contentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-plan-type="holiday"]');
      if (btn) this.app.togglePlan('holiday', this.#items[Number(btn.dataset.index)]);
    });
    this.plans.subscribe(() => this.refreshHearts('holiday', this.#items));
  }

  selectionKey() {
    return `${this.state.countryCode}|${this.state.year}`;
  }

  async load() {
    Loader.show('Loading holidays...');
    try {
      const list = await this.services.holidays.getPublicHolidays(this.state.year, this.state.countryCode);
      this.#items = list.map((h) => ({ ...h, countryCode: this.state.countryCode, countryName: this.state.countryName }));
      this.#render();
    } catch (err) {
      console.error(err);
      this.invalidate();
      this.contentEl.innerHTML = errorState('Could not load holidays for this country.', err);
      Toast.show('Failed to load holidays', 'error');
    } finally {
      Loader.hide();
    }
  }

  #render() {
    if (!this.#items.length) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-calendar-xmark',
        title: 'No Holidays Found',
        text: `No public holidays found for ${this.state.countryName} in ${this.state.year}.`,
      });
      return;
    }

    const today = fmt.isoDate();
    this.contentEl.innerHTML = this.#items
      .map((h, i) => {
        const d = new Date(h.date);
        const past = h.date < today;
        return `
        <div class="holiday-card ${past ? 'is-past' : ''}">
          <div class="holiday-card-header">
            <div class="holiday-date-box">
              <span class="day">${d.getDate()}</span>
              <span class="month">${d.toLocaleString('en-US', { month: 'short' })}</span>
            </div>
            <div class="holiday-card-actions">
              <button class="holiday-action-btn" data-plan-type="holiday" data-index="${i}" title="Save to My Plans">
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
          <h3>${escapeHtml(h.localName)}</h3>
          <p class="holiday-name">${escapeHtml(h.name)}${h.global === false && h.counties?.length ? ' • Regional' : ''}</p>
          <div class="holiday-card-footer">
            <span class="holiday-day-badge"><i class="fa-regular fa-calendar"></i> ${fmt.weekday(h.date)}</span>
            <div class="holiday-types">
              ${(h.types || []).slice(0, 2).map((t) => `<span class="holiday-type-badge">${escapeHtml(t)}</span>`).join('')}
            </div>
          </div>
        </div>`;
      })
      .join('');

    this.refreshHearts('holiday', this.#items);
  }
}

class EventsView extends BaseView {
  #items = [];
  #category = 'all';
  #isMock = false;

  constructor(app) {
    super(app, {
      id: 'events',
      title: 'Events',
      subtitle: 'Find concerts, sports, and entertainment',
      requiresCountry: true,
      requiresCity: true,
    });
  }

  get contentEl() {
    return document.getElementById('events-content');
  }

  bind() {
    this.contentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-plan-type="event"]');
      if (btn) this.app.togglePlan('event', this.#items[Number(btn.dataset.index)]);

      const dead = e.target.closest('a[data-no-link]');
      if (dead) {
        e.preventDefault();
        Toast.show('Ticket link not available for this event', 'info');
      }
    });

    document.querySelectorAll('#events-view .filter-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        this.#category = chip.dataset.filter;
        document.querySelectorAll('#events-view .filter-chip').forEach((c) => c.classList.toggle('active', c === chip));
        this.#applyFilter();
      });
    });

    this.plans.subscribe(() => this.refreshHearts('event', this.#items));
  }

  selectionKey() {
    return `${this.state.countryCode}|${this.state.cityQuery}`;
  }

  async load() {
    if (!this.state.cityQuery) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-city',
        title: 'No City Available',
        text: 'Could not determine a city for this country. Please pick one on the dashboard.',
        action: { route: 'dashboard', label: 'Go to Dashboard' },
      });
      return;
    }

    Loader.show('Loading events...');
    try {
      const { events, mock } = await this.services.events.search(this.state.cityQuery, this.state.countryCode);
      this.#items = events;
      this.#isMock = mock;
      this.#render();
    } catch (err) {
      console.error(err);
      this.invalidate();
      this.contentEl.innerHTML = errorState('Could not load events for this city.', err);
    } finally {
      Loader.hide();
    }
  }

  #render() {
    const note = document.getElementById('events-mock-note');
    if (note) note.classList.toggle('hidden', !this.#isMock);

    if (!this.#items.length) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-ticket',
        title: 'No Events Found',
        text: `No upcoming events found in ${this.state.cityQuery}.`,
      });
      return;
    }

    this.contentEl.innerHTML = this.#items.map((ev, i) => EventsView.card(ev, i)).join('');
    this.refreshHearts('event', this.#items);
    this.#applyFilter();
  }

  #applyFilter() {
    let visible = 0;
    this.contentEl.querySelectorAll('.event-card').forEach((card) => {
      const show = this.#category === 'all' || card.dataset.category === this.#category;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    const empty = this.contentEl.querySelector('.filter-empty');
    empty?.remove();
    if (!visible && this.#items.length) {
      this.contentEl.insertAdjacentHTML(
        'beforeend',
        `<div class="filter-empty" style="grid-column:1/-1;text-align:center;padding:40px;color:var(--slate-500)">
          <i class="fa-solid fa-filter-circle-xmark" style="font-size:28px;margin-bottom:8px"></i>
          <p>No ${this.#category} events in ${escapeHtml(this.state.cityQuery)}</p>
        </div>`
      );
    }
  }

  static category(ev) {
    return (ev.classifications?.[0]?.segment?.name || 'Other').replace(/ & Theatre/i, '');
  }

  static image(ev) {
    const img = ev.images?.find((im) => im.width >= 300 && im.ratio === '16_9') || ev.images?.find((im) => im.width >= 300) || ev.images?.[0];
    return img?.url || EVENT_IMAGES[EventsView.category(ev).toLowerCase()] || EVENT_IMAGES.default;
  }

  static card(ev, i) {
    const category = EventsView.category(ev);
    const key = category.toLowerCase().includes('music') ? 'music' : category.toLowerCase().includes('sport') ? 'sports' : category.toLowerCase().includes('art') ? 'arts' : 'other';
    const venue = ev._embedded?.venues?.[0];
    const date = ev.dates?.start?.localDate || '';
    const time = ev.dates?.start?.localTime?.slice(0, 5) || '';
    const price = ev.priceRanges?.[0];
    const url = ev.url && ev.url !== '#' ? ev.url : '';

    return `
      <div class="event-card" data-category="${key}">
        <div class="event-card-image">
          <img src="${escapeHtml(EventsView.image(ev))}" alt="${escapeHtml(ev.name)}" loading="lazy" onerror="this.src='${EVENT_IMAGES.default}'">
          <span class="event-card-category">${escapeHtml(category)}</span>
          <button class="event-card-save" data-plan-type="event" data-index="${i}" title="Save to My Plans">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        <div class="event-card-body">
          <h3 title="${escapeHtml(ev.name)}">${escapeHtml(ev.name)}</h3>
          <div class="event-card-info">
            <div><i class="fa-regular fa-calendar"></i>${date ? fmt.date(date) : 'Date TBA'}${time ? ` at ${time}` : ''}</div>
            <div><i class="fa-solid fa-location-dot"></i>${escapeHtml(venue?.name || 'Venue TBA')}${venue?.city?.name ? `, ${escapeHtml(venue.city.name)}` : ''}</div>
            ${price ? `<div><i class="fa-solid fa-tag"></i>${price.currency || ''} ${fmt.number(price.min, 0)} – ${fmt.number(price.max, 0)}</div>` : ''}
          </div>
          <div class="event-card-footer">
            <button class="btn-event" data-plan-type="event" data-index="${i}"><i class="fa-regular fa-heart"></i> Save</button>
            <a href="${url || '#'}" ${url ? 'target="_blank" rel="noopener noreferrer"' : 'data-no-link'} class="btn-buy-ticket">
              <i class="fa-solid fa-ticket"></i> Buy Tickets
            </a>
          </div>
        </div>
      </div>`;
  }
}

class WeatherView extends BaseView {
  constructor(app) {
    super(app, {
      id: 'weather',
      title: 'Weather',
      subtitle: 'Check forecasts for any destination',
      requiresCountry: true,
      requiresCity: true,
    });
  }

  get contentEl() {
    return document.getElementById('weather-content');
  }

  selectionKey() {
    return `${this.state.cityLat}|${this.state.cityLon}`;
  }

  static info(code) {
    return WEATHER_CODES[code] || { icon: 'fa-cloud', desc: 'Unknown', theme: 'default' };
  }

  static uvLevel(uv) {
    if (uv <= 2) return { text: 'Low', cls: 'low' };
    if (uv <= 5) return { text: 'Moderate', cls: 'moderate' };
    if (uv <= 7) return { text: 'High', cls: 'high' };
    if (uv <= 10) return { text: 'Very High', cls: 'very-high' };
    return { text: 'Extreme', cls: 'extreme' };
  }

  async load() {
    if (!this.state.hasCoords) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-cloud-question',
        title: 'Location Unknown',
        text: 'Pick a city on the dashboard to see its forecast.',
        action: { route: 'dashboard', label: 'Go to Dashboard' },
      });
      return;
    }

    Loader.show('Loading weather...');
    try {
      const data = await this.services.weather.getForecast(this.state.cityLat, this.state.cityLon);
      this.#render(data);
    } catch (err) {
      console.error(err);
      this.invalidate();
      this.contentEl.innerHTML = errorState('Could not load the weather forecast.', err);
    } finally {
      Loader.hide();
    }
  }

  #render(data) {
    const { current, daily, hourly } = data;
    if (!daily) {
      this.contentEl.innerHTML = errorState('Weather data unavailable for this location.');
      return;
    }

    const code = current?.weather_code ?? daily.weather_code[0];
    const info = WeatherView.info(code);
    const temp = Math.round(current?.temperature_2m ?? daily.temperature_2m_max[0]);
    const feels = Math.round(current?.apparent_temperature ?? daily.apparent_temperature_max?.[0] ?? temp);
    const humidity = current?.relative_humidity_2m ?? 0;
    const wind = Math.round(current?.wind_speed_10m ?? daily.wind_speed_10m_max[0]);
    const windDir = fmt.compass(current?.wind_direction_10m ?? daily.wind_direction_10m_dominant?.[0] ?? 0);
    const uv = current?.uv_index ?? daily.uv_index_max?.[0] ?? 0;
    const uvLevel = WeatherView.uvLevel(uv);
    const hi = Math.round(daily.temperature_2m_max[0]);
    const lo = Math.round(daily.temperature_2m_min[0]);
    const precipSum = daily.precipitation_sum?.[0] ?? 0;
    const precipProb = daily.precipitation_probability_max?.[0] ?? 0;
    const sunrise = daily.sunrise?.[0];
    const sunset = daily.sunset?.[0];

    const nowKey = (current?.time || '').slice(0, 13);
    let startIdx = hourly?.time?.findIndex((t) => t.startsWith(nowKey)) ?? 0;
    if (startIdx < 0) startIdx = 0;
    const hours = (hourly?.time || []).slice(startIdx, startIdx + 24);

    this.contentEl.innerHTML = `
      <div class="weather-hero-card weather-${info.theme}">
        <div class="weather-hero-bg"></div>
        <div class="weather-hero-content">
          <div class="weather-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${escapeHtml(this.state.cityQuery)}, ${escapeHtml(this.state.countryName)}</span>
            <span class="weather-time">${current?.time ? fmt.date(current.time, { weekday: 'long', month: 'short', day: 'numeric' }) : ''}</span>
          </div>
          <div class="weather-hero-main">
            <div class="weather-hero-left">
              <div class="weather-hero-icon"><i class="fa-solid ${info.icon}"></i></div>
              <div class="weather-hero-temp">
                <span class="temp-value">${temp}</span>
                <span class="temp-unit">°C</span>
              </div>
            </div>
            <div class="weather-hero-right">
              <div class="weather-condition">${info.desc}</div>
              <div class="weather-feels">Feels like ${feels}°C</div>
              <div class="weather-high-low">
                <span class="high"><i class="fa-solid fa-arrow-up"></i> ${hi}°</span>
                <span class="low"><i class="fa-solid fa-arrow-down"></i> ${lo}°</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="weather-details-grid">
        <div class="weather-detail-card">
          <div class="detail-icon humidity"><i class="fa-solid fa-droplet"></i></div>
          <div class="detail-info"><span class="detail-label">Humidity</span><span class="detail-value">${humidity}%</span></div>
          <div class="detail-bar"><div class="detail-bar-fill" style="width:${humidity}%"></div></div>
        </div>
        <div class="weather-detail-card">
          <div class="detail-icon wind"><i class="fa-solid fa-wind"></i></div>
          <div class="detail-info"><span class="detail-label">Wind</span><span class="detail-value">${wind} km/h</span></div>
          <div class="detail-extra">Direction: ${windDir}</div>
        </div>
        <div class="weather-detail-card">
          <div class="detail-icon uv"><i class="fa-solid fa-sun"></i></div>
          <div class="detail-info"><span class="detail-label">UV Index</span><span class="detail-value">${Math.round(uv)}</span></div>
          <div class="detail-extra"><span class="uv-level ${uvLevel.cls}">${uvLevel.text}</span></div>
        </div>
        <div class="weather-detail-card">
          <div class="detail-icon precip"><i class="fa-solid fa-cloud-rain"></i></div>
          <div class="detail-info"><span class="detail-label">Precipitation</span><span class="detail-value">${precipProb}%</span></div>
          <div class="detail-extra">${precipSum} mm expected today</div>
        </div>
        <div class="weather-detail-card sunrise-sunset">
          <div class="sun-times-visual">
            <div class="sun-time sunrise">
              <i class="fa-solid fa-sun"></i>
              <span class="sun-label">Sunrise</span>
              <span class="sun-value">${sunrise ? fmt.time(sunrise) : 'N/A'}</span>
            </div>
            <div class="sun-arc">
              <div class="sun-arc-path"></div>
              <div class="sun-position" style="--sun-progress:${WeatherView.sunProgress(sunrise, sunset, current?.time)}%"></div>
            </div>
            <div class="sun-time sunset">
              <i class="fa-solid fa-moon"></i>
              <span class="sun-label">Sunset</span>
              <span class="sun-value">${sunset ? fmt.time(sunset) : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="weather-section">
        <h3 class="weather-section-title"><i class="fa-solid fa-clock"></i> Hourly Forecast</h3>
        <div class="hourly-scroll">
          ${hours
            .map((t, i) => {
              const idx = startIdx + i;
              const hInfo = WeatherView.info(hourly.weather_code[idx]);
              const p = hourly.precipitation_probability?.[idx] ?? 0;
              return `
              <div class="hourly-item ${i === 0 ? 'now' : ''}">
                <span class="hourly-time">${i === 0 ? 'Now' : fmt.hour(Number(t.slice(11, 13)))}</span>
                <div class="hourly-icon"><i class="fa-solid ${hInfo.icon}"></i></div>
                <span class="hourly-temp">${Math.round(hourly.temperature_2m[idx])}°</span>
                ${p > 0 ? `<span class="hourly-precip"><i class="fa-solid fa-droplet"></i> ${p}%</span>` : ''}
              </div>`;
            })
            .join('')}
        </div>
      </div>

      <div class="weather-section">
        <h3 class="weather-section-title"><i class="fa-solid fa-calendar-week"></i> 7-Day Forecast</h3>
        <div class="forecast-list">
          ${daily.time
            .map((day, i) => {
              const dInfo = WeatherView.info(daily.weather_code[i]);
              const p = daily.precipitation_probability_max?.[i] ?? 0;
              const d = new Date(day);
              return `
              <div class="forecast-day ${i === 0 ? 'today' : ''}" title="${dInfo.desc}">
                <div class="forecast-day-name">
                  <span class="day-label">${i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                  <span class="day-date">${d.getDate()} ${d.toLocaleDateString('en-US', { month: 'short' })}</span>
                </div>
                <div class="forecast-icon"><i class="fa-solid ${dInfo.icon}"></i></div>
                <div class="forecast-temps">
                  <span class="temp-max">${Math.round(daily.temperature_2m_max[i])}°</span>
                  <span class="temp-min">${Math.round(daily.temperature_2m_min[i])}°</span>
                </div>
                <div class="forecast-precip">${p > 0 ? `<i class="fa-solid fa-droplet"></i><span>${p}%</span>` : ''}</div>
              </div>`;
            })
            .join('')}
        </div>
      </div>`;
  }

  static sunProgress(sunrise, sunset, now) {
    if (!sunrise || !sunset || !now) return 50;
    const a = new Date(sunrise).getTime();
    const b = new Date(sunset).getTime();
    const n = new Date(now).getTime();
    if (n <= a) return 0;
    if (n >= b) return 100;
    return Math.round(((n - a) / (b - a)) * 100);
  }
}

class LongWeekendsView extends BaseView {
  #items = [];

  constructor(app) {
    super(app, {
      id: 'long-weekends',
      title: 'Long Weekends',
      subtitle: 'Find the perfect mini-trip opportunities',
      requiresCountry: true,
    });
  }

  get contentEl() {
    return document.getElementById('lw-content');
  }

  bind() {
    this.contentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-plan-type="longweekend"]');
      if (btn) this.app.togglePlan('longweekend', this.#items[Number(btn.dataset.index)]);
    });
    this.plans.subscribe(() => this.refreshHearts('longweekend', this.#items));
  }

  selectionKey() {
    return `${this.state.countryCode}|${this.state.year}`;
  }

  async load() {
    Loader.show('Finding long weekends...');
    try {
      const list = await this.services.holidays.getLongWeekends(this.state.year, this.state.countryCode);
      this.#items = list.map((lw) => ({ ...lw, countryCode: this.state.countryCode, countryName: this.state.countryName }));
      this.#render();
    } catch (err) {
      console.error(err);
      this.invalidate();
      this.contentEl.innerHTML = errorState('Could not load long weekends.', err);
      Toast.show('Failed to load long weekends', 'error');
    } finally {
      Loader.hide();
    }
  }

  #render() {
    if (!this.#items.length) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-umbrella-beach',
        title: 'No Long Weekends',
        text: `No long weekends found for ${this.state.countryName} in ${this.state.year}.`,
      });
      return;
    }

    this.contentEl.innerHTML = this.#items
      .map(
        (lw, i) => `
        <div class="lw-card">
          <div class="lw-card-header">
            <span class="lw-badge"><i class="fa-solid fa-calendar-days"></i> ${lw.dayCount} Days</span>
            <button class="holiday-action-btn" data-plan-type="longweekend" data-index="${i}" title="Save to My Plans">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
          <h3>Long Weekend #${i + 1}</h3>
          <div class="lw-dates">
            <i class="fa-regular fa-calendar"></i>
            ${fmt.date(lw.startDate)} – ${fmt.date(lw.endDate)}
          </div>
          <div class="lw-info-box ${lw.needBridgeDay ? 'warning' : 'success'}">
            <i class="fa-solid ${lw.needBridgeDay ? 'fa-info-circle' : 'fa-check-circle'}"></i>
            ${lw.needBridgeDay ? `Requires taking ${lw.bridgeDays?.length || 'a'} bridge day${lw.bridgeDays?.length > 1 ? 's' : ''} off` : 'No extra days off needed!'}
          </div>
          <div class="lw-days-visual">${LongWeekendsView.daysVisual(lw)}</div>
        </div>`
      )
      .join('');

    this.refreshHearts('longweekend', this.#items);
  }

  static daysVisual(lw) {
    const bridge = new Set(lw.bridgeDays || []);
    const start = new Date(lw.startDate);
    const cells = [];
    for (let i = 0; i < Math.min(lw.dayCount, 6); i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const iso = fmt.isoDate(d);
      const weekend = d.getDay() === 0 || d.getDay() === 6;
      const cls = bridge.has(iso) ? 'holiday' : weekend ? 'weekend' : '';
      cells.push(`
        <div class="lw-day ${cls}" title="${bridge.has(iso) ? 'Bridge day' : ''}">
          <span class="name">${d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
          <span class="num">${d.getDate()}</span>
        </div>`);
    }
    return cells.join('');
  }
}

class CurrencyView extends BaseView {
  #from;
  #to;
  #currencies = [];
  #ready = false;

  constructor(app) {
    super(app, {
      id: 'currency',
      title: 'Currency',
      subtitle: 'Convert currencies with live exchange rates',
    });
  }

  bind() {
    this.#from = new CurrencySelect(document.getElementById('currency-from'));
    this.#to = new CurrencySelect(document.getElementById('currency-to'));

    document.getElementById('convert-btn').addEventListener('click', () => this.convert());
    document.getElementById('swap-currencies-btn').addEventListener('click', () => this.#swap());
    document.getElementById('currency-amount').addEventListener('keydown', (e) => e.key === 'Enter' && this.convert());
    document.getElementById('popular-currencies').addEventListener('click', (e) => {
      const card = e.target.closest('[data-code]');
      if (card) {
        this.#to.setValue(card.dataset.code, { silent: true });
        this.convert();
      }
    });
  }

  selectionKey() {
    return 'static';
  }

  async load() {
    if (this.#ready) return;
    Loader.show('Loading exchange rates...');
    try {
      const data = await this.services.currency.getRates('USD');
      this.#currencies = Object.keys(data.conversion_rates)
        .map((code) => ({ code, name: CURRENCY_NAMES[code] || code }))
        .sort((a, b) => a.code.localeCompare(b.code));

      this.#from.setCurrencies(this.#currencies, 'USD');
      this.#to.setCurrencies(this.#currencies, 'EGP');
      this.#renderPopular(data);
      this.#ready = true;
      await this.convert();
    } catch (err) {
      console.error(err);
      this.invalidate();
      Toast.show('Failed to load exchange rates', 'error');
      document.getElementById('popular-currencies').innerHTML =
        '<p style="text-align:center;color:var(--slate-500);padding:20px">Failed to load rates</p>';
    } finally {
      Loader.hide();
    }
  }

  async convert() {
    const amount = parseFloat(document.getElementById('currency-amount').value);
    const from = this.#from.value;
    const to = this.#to.value;
    if (!this.#ready) return;
    if (!(amount > 0) || !from || !to) {
      Toast.show('Please enter a valid amount', 'error');
      return;
    }

    const btn = document.getElementById('convert-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Converting...';
    try {
      const { rate, result, updated } = await this.services.currency.convert(amount, from, to);
      document.getElementById('currency-result').innerHTML = `
        <div class="conversion-display">
          <div class="conversion-from">
            <span class="amount">${fmt.number(amount)}</span>
            <span class="currency-code">${from}</span>
          </div>
          <div class="conversion-equals"><i class="fa-solid fa-equals"></i></div>
          <div class="conversion-to">
            <span class="amount">${fmt.number(result)}</span>
            <span class="currency-code">${to}</span>
          </div>
        </div>
        <div class="exchange-rate-info">
          <p>1 ${from} = ${rate.toFixed(4)} ${to} &nbsp;•&nbsp; 1 ${to} = ${(1 / rate).toFixed(4)} ${from}</p>
          <small>Live rate • Last updated: ${updated ? new Date(updated).toLocaleString('en-US') : 'today'}</small>
        </div>`;
      document.getElementById('currency-result').classList.remove('hidden');
    } catch (err) {
      console.error(err);
      Toast.show('Conversion failed. Please try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-calculator"></i> Convert';
    }
  }

  #swap() {
    const from = this.#from.value;
    const to = this.#to.value;
    this.#from.setValue(to, { silent: true });
    this.#to.setValue(from, { silent: true });
    this.convert();
  }

  #renderPopular(data) {
    const rates = data.conversion_rates || {};
    document.getElementById('popular-currencies').innerHTML = POPULAR_CURRENCIES.map(
      (c) => `
      <div class="popular-currency-card" data-code="${c.code}" title="Convert to ${c.code}">
        <img src="https://flagcdn.com/w40/${c.flag}.png" alt="${c.code}" class="flag">
        <div class="info">
          <div class="code">${c.code}</div>
          <div class="name">${escapeHtml(CURRENCY_NAMES[c.code] || c.code)}</div>
        </div>
        <div class="rate">${rates[c.code] ? rates[c.code].toFixed(4) : '-'}</div>
      </div>`
    ).join('');
  }
}

class SunTimesView extends BaseView {
  #date = fmt.isoDate();

  constructor(app) {
    super(app, {
      id: 'sun-times',
      title: 'Sun Times',
      subtitle: 'Check sunrise and sunset times worldwide',
      requiresCountry: true,
      requiresCity: true,
    });
  }

  get contentEl() {
    return document.getElementById('sun-times-content');
  }

  bind() {
    const input = document.getElementById('sun-date');
    if (input) {
      input.value = this.#date;
      input.addEventListener('change', () => {
        this.#date = input.value || fmt.isoDate();
        this.invalidate();
        this.activate();
      });
    }
  }

  selectionKey() {
    return `${this.state.cityLat}|${this.state.cityLon}|${this.#date}`;
  }

  async load() {
    if (!this.state.hasCoords) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-sun',
        title: 'Location Unknown',
        text: 'Pick a city on the dashboard to see its sun times.',
        action: { route: 'dashboard', label: 'Go to Dashboard' },
      });
      return;
    }

    Loader.show('Getting sun times...');
    try {
      const [r, tz] = await Promise.all([
        this.services.sun.getSunTimes(this.state.cityLat, this.state.cityLon, this.#date),
        this.#resolveTimezone(),
      ]);
      this.#render(r, tz);
    } catch (err) {
      console.error(err);
      this.invalidate();
      this.contentEl.innerHTML = errorState('Could not load sun times.', err);
    } finally {
      Loader.hide();
    }
  }

  async #resolveTimezone() {
    try {
      return await this.services.weather.getTimezone(this.state.cityLat, this.state.cityLon);
    } catch {
      try {
        const geo = await this.services.countries.geocode(this.state.cityQuery, this.state.countryCode);
        return geo?.timezone || null;
      } catch {
        return null;
      }
    }
  }

  #render(r, tz) {
    const t = (iso) => {
      try {
        return new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: tz || undefined });
      } catch {
        return fmt.time(iso);
      }
    };
    const dayLen = r.day_length;
    const h = Math.floor(dayLen / 3600);
    const m = Math.floor((dayLen % 3600) / 60);
    const pct = (dayLen / 86400) * 100;
    const darkMin = 1440 - (h * 60 + m);
    const date = new Date(`${this.#date}T12:00:00`);

    const card = (cls, icon, label, time, sub) => `
      <div class="sun-time-card ${cls}">
        <div class="icon"><i class="fa-solid ${icon}"></i></div>
        <div class="label">${label}</div>
        <div class="time">${time}</div>
        <div class="sub-label">${sub}</div>
      </div>`;

    this.contentEl.innerHTML = `
      <div class="sun-main-card">
        <div class="sun-main-header">
          <div class="sun-location">
            <h2><i class="fa-solid fa-location-dot"></i> ${escapeHtml(this.state.cityQuery)}</h2>
            <p>${escapeHtml(this.state.countryName)} • ${tz ? `local time (${escapeHtml(tz)})` : 'times shown in your timezone'}</p>
          </div>
          <div class="sun-date-display">
            <div class="date">${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
            <div class="day">${date.toLocaleDateString('en-US', { weekday: 'long' })}</div>
          </div>
        </div>
        <div class="sun-times-grid">
          ${card('dawn', 'fa-moon', 'Dawn', t(r.civil_twilight_begin), 'Civil Twilight')}
          ${card('sunrise', 'fa-sun', 'Sunrise', t(r.sunrise), 'Golden Hour Start')}
          ${card('noon', 'fa-sun', 'Solar Noon', t(r.solar_noon), 'Sun at Highest')}
          ${card('sunset', 'fa-sun', 'Sunset', t(r.sunset), 'Golden Hour End')}
          ${card('dusk', 'fa-moon', 'Dusk', t(r.civil_twilight_end), 'Civil Twilight')}
          ${card('daylight', 'fa-hourglass-half', 'Day Length', `${h}h ${m}m`, 'Total Daylight')}
        </div>
      </div>

      <div class="day-length-card">
        <h3><i class="fa-solid fa-chart-pie"></i> Daylight Distribution</h3>
        <div class="day-progress">
          <div class="day-progress-bar"><div class="day-progress-fill" style="width:${pct.toFixed(1)}%"></div></div>
        </div>
        <div class="day-length-stats">
          <div class="day-stat"><div class="value">${h}h ${m}m</div><div class="label">Daylight</div></div>
          <div class="day-stat"><div class="value">${pct.toFixed(1)}%</div><div class="label">of 24 Hours</div></div>
          <div class="day-stat"><div class="value">${Math.floor(darkMin / 60)}h ${darkMin % 60}m</div><div class="label">Darkness</div></div>
        </div>
      </div>`;
  }
}

class PlansView extends BaseView {
  #filter = 'all';

  constructor(app) {
    super(app, {
      id: 'plans',
      title: 'My Plans',
      subtitle: 'Your saved holidays, events and long weekends',
    });
  }

  get contentEl() {
    return document.getElementById('plans-content');
  }

  bind() {
    document.querySelectorAll('.plan-filter').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.#filter = btn.dataset.filter;
        document.querySelectorAll('.plan-filter').forEach((b) => b.classList.toggle('active', b === btn));
        this.render();
      });
    });

    document.getElementById('clear-all-plans-btn').addEventListener('click', () => this.#clearAll());

    this.contentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-remove]');
      if (btn) this.#remove(Number(btn.dataset.remove));
    });

    this.plans.subscribe(() => {
      this.#renderCounts();
      if (this.app.currentRoute === 'plans') this.render();
    });
    this.#renderCounts();
  }

  selectionKey() {
    return 'static';
  }

  async load() {
    this.render();
  }

  #renderCounts() {
    const counts = this.plans.counts();
    document.getElementById('filter-all-count').textContent = counts.all;
    document.getElementById('filter-holiday-count').textContent = counts.holiday;
    document.getElementById('filter-event-count').textContent = counts.event;
    document.getElementById('filter-lw-count').textContent = counts.longweekend;

    const badge = document.getElementById('plans-count');
    if (badge) {
      badge.textContent = counts.all;
      badge.classList.toggle('hidden', counts.all === 0);
    }
  }

  render() {
    const list = this.plans.byType(this.#filter).sort((a, b) => b.id - a.id);
    if (!list.length) {
      this.contentEl.innerHTML = emptyState({
        icon: 'fa-heart-crack',
        title: this.#filter === 'all' ? 'No Saved Plans Yet' : 'Nothing Here Yet',
        text: 'Start exploring and save holidays, events, or long weekends you like!',
        action: { route: 'dashboard', label: 'Start Exploring', icon: 'fa-compass' },
      });
      return;
    }
    this.contentEl.innerHTML = list.map((p) => PlansView.card(p)).join('');
  }

  static card(plan) {
    const labels = { holiday: 'Holiday', event: 'Event', longweekend: 'Long Weekend' };
    const d = plan.data;
    let body = '';

    if (plan.type === 'holiday') {
      body = `
        <h4>${escapeHtml(d.localName)}</h4>
        <div class="plan-card-details">
          <div><i class="fa-regular fa-calendar"></i>${fmt.date(d.date)} • ${fmt.weekday(d.date)}</div>
          <div><i class="fa-solid fa-info-circle"></i>${escapeHtml(d.name)}</div>
          ${PlansView.countryLine(d)}
        </div>`;
    } else if (plan.type === 'event') {
      const venue = d._embedded?.venues?.[0];
      const date = d.dates?.start?.localDate;
      const time = d.dates?.start?.localTime?.slice(0, 5);
      const url = d.url && d.url !== '#' ? d.url : '';
      body = `
        <h4>${escapeHtml(d.name)}</h4>
        <div class="plan-card-details">
          <div><i class="fa-regular fa-calendar"></i>${date ? fmt.date(date) : 'Date TBA'}${time ? ` at ${time}` : ''}</div>
          <div><i class="fa-solid fa-location-dot"></i>${escapeHtml(venue?.name || 'Venue TBA')}${venue?.city?.name ? `, ${escapeHtml(venue.city.name)}` : ''}</div>
          ${url ? `<div><i class="fa-solid fa-ticket"></i><a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary-600)">Buy tickets</a></div>` : ''}
        </div>`;
    } else {
      body = `
        <h4>${d.dayCount}-Day Long Weekend</h4>
        <div class="plan-card-details">
          <div><i class="fa-regular fa-calendar"></i>${fmt.date(d.startDate)} – ${fmt.date(d.endDate)}</div>
          <div><i class="fa-solid fa-info-circle"></i>${d.needBridgeDay ? 'Bridge day needed' : 'No extra days needed'}</div>
          ${PlansView.countryLine(d)}
        </div>`;
    }

    return `
      <div class="plan-card">
        <span class="plan-card-type ${plan.type}">${labels[plan.type] || plan.type}</span>
        <div class="plan-card-content">
          ${body}
          <div class="plan-card-actions">
            <button class="btn-plan-remove" data-remove="${plan.id}"><i class="fa-solid fa-trash"></i> Remove</button>
          </div>
        </div>
      </div>`;
  }

  static countryLine(d) {
    if (!d.countryCode) return '';
    return `<div><img src="${CountryService.flagUrl(d.countryCode, 20)}" alt="" style="width:16px;border-radius:2px">${escapeHtml(d.countryName || d.countryCode)}</div>`;
  }

  async #remove(id) {
    const ok = await PlansView.confirm({
      title: 'Remove Plan?',
      text: 'Are you sure you want to remove this plan?',
      confirmText: 'Yes, remove it',
    });
    if (!ok) return;
    this.plans.remove(id);
    Toast.show('Plan removed', 'info');
  }

  async #clearAll() {
    if (!this.plans.count) {
      Toast.show('There are no saved plans to clear', 'info');
      return;
    }
    const ok = await PlansView.confirm({
      title: 'Clear All Plans?',
      text: `This will delete all ${this.plans.count} saved plans. This cannot be undone!`,
      confirmText: 'Yes, clear all',
    });
    if (!ok) return;
    this.plans.clear();
    Toast.show('All plans cleared', 'success');
  }

  static async confirm({ title, text, confirmText }) {
    if (window.Swal) {
      const res = await window.Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#64748b',
        confirmButtonText: confirmText,
        cancelButtonText: 'Cancel',
      });
      return res.isConfirmed;
    }
    return window.confirm(`${title}\n${text}`);
  }
}

class App {
  constructor() {
    this.state = new AppState();
    this.plans = new PlansStore();
    this.services = {
      holidays: new HolidayService(),
      countries: new CountryService(),
      weather: new WeatherService(),
      events: new EventService(),
      currency: new CurrencyService(),
      sun: new SunService(),
    };

    this.views = {
      dashboard: new DashboardView(this),
      holidays: new HolidaysView(this),
      events: new EventsView(this),
      weather: new WeatherView(this),
      'long-weekends': new LongWeekendsView(this),
      currency: new CurrencyView(this),
      'sun-times': new SunTimesView(this),
      plans: new PlansView(this),
    };

    this.currentRoute = null;
    this.router = new Router(Object.keys(this.views), (route) => this.#showView(route));
  }

  async init() {
    this.#bindLayout();
    Object.values(this.views).forEach((v) => v.bind());

    await this.router.start();
    await this.views.dashboard.init();

    if (this.currentRoute !== 'dashboard') this.views[this.currentRoute].activate();
  }

  #bindLayout() {
    document.querySelectorAll('.nav-item[data-view]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigate(link.dataset.view);
      });
    });

    document.addEventListener('click', (e) => {
      const nav = e.target.closest('[data-navigate]');
      if (nav) return this.navigate(nav.dataset.navigate);

      const retry = e.target.closest('[data-retry]');
      if (retry) {
        const view = this.views[this.currentRoute];
        view.invalidate();
        view.activate();
      }
    });

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('hidden');
      overlay.classList.toggle('active');
    });
    overlay?.addEventListener('click', () => this.#closeSidebar());

    const tick = () => {
      const el = document.getElementById('current-datetime');
      if (el) {
        el.textContent = new Date().toLocaleDateString('en-US', {
          weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
        });
      }
    };
    tick();
    setInterval(tick, 30000);

    document.getElementById('modal-close-btn')?.addEventListener('click', () => this.closeModal());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.#closeSidebar();
      }
    });

    this.plans.subscribe(() => {
      const stat = document.getElementById('stat-saved');
      if (stat) stat.textContent = this.plans.count;
    });
  }

  navigate(route) {
    this.router.go(route);
    this.#closeSidebar();
  }

  #showView(route) {
    const view = this.views[route] || this.views.dashboard;
    this.currentRoute = view.id;

    document.querySelectorAll('.nav-item').forEach((n) => n.classList.toggle('active', n.dataset.view === view.id));
    document.querySelectorAll('.view').forEach((s) => s.classList.toggle('active', s.id === `${view.id}-view`));

    document.getElementById('page-title').textContent = view.title;
    document.getElementById('page-subtitle').textContent = view.subtitle;
    document.title = `${view.title} • Wanderlust`;
    window.scrollTo({ top: 0 });

    view.activate();
  }

  #closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    const overlay = document.getElementById('sidebar-overlay');
    overlay?.classList.add('hidden');
    overlay?.classList.remove('active');
  }

  closeModal() {
    document.getElementById('modal-overlay')?.classList.add('hidden');
  }

  invalidateViews() {
    Object.values(this.views).forEach((v) => v.invalidate());
  }

  async ensureCity() {
    if (this.state.hasCoords || !this.state.hasCountry) return;
    try {
      const capital = await this.services.countries.getCapital(this.state.countryCode);
      if (capital) {
        this.state.update({ cityName: `${capital.name} (Capital)`, cityLat: capital.lat, cityLon: capital.lon });
        this.views.dashboard.syncCityFromState();
      }
    } catch (err) {
      console.error('Could not resolve capital city:', err);
    }
  }

  togglePlan(type, data) {
    if (!data) return;
    if (this.plans.has(type, data)) {
      this.plans.removeByKey(type, data);
      Toast.show('Removed from My Plans', 'info');
    } else {
      this.plans.add(type, data);
      Toast.show('Saved to My Plans!', 'success');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  window.app.init().catch((err) => {
    console.error('App failed to start:', err);
    Toast.show('Something went wrong while starting the app', 'error');
  });
});
