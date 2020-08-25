type AirVisualResponseCodes = 'success' | 'call_limit_reached' | 'api_key_expired' | 'incorrect_api_key' | 'ip_location_failed' | 'no_nearest_station' | 'feature_not_available' | 'too_many_requests';

type AirVisualIcon = '10n';

export interface AirVisualForcast {
  ts: string;
  aqius: number;
  aqicn: number;
  tp: number;
  tp_min: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: AirVisualIcon;
}

export interface AirVisualWeather {
  ts: string;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: AirVisualIcon;
}

export interface AirVisualPollutant {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface AirVisualPollution {
  [pollutant: string]: number | string | AirVisualPollutant;
  ts: string;
  aqius: number;
  aqicn: number;
  mainus: string;
  maincn: string;
}

export interface AirVisualData {
  name?: string;
  city: string;
  state?: string;
  country: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  current: {
    weather: AirVisualWeather;
    pollution: AirVisualPollution;
  };
  forecasts?: AirVisualForcast[];
  history?: any;
  units?: {
    [key: string]: string;
  };
}

export interface AirVisualResponse {
  status: AirVisualResponseCodes;
  data: AirVisualData;
}