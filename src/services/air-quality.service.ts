import { AirVisualResponse, AirVisualData } from '@/models/air-visual.model';

const API_BASE = 'https://api.airvisual.com/v2';

export async function airQualityByLatLong(lat: number, lon: number): Promise<AirVisualData|null> {
  try {
    const response = await fetch(`${API_BASE}/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.VUE_APP_IQAIR_API_KEY}`);
    const information: AirVisualResponse = await response.json();
    if (information?.status !== 'success') {
      throw new Error('Error from server');
    }
    return information.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function airQualityByIP(): Promise<AirVisualData|null> {
  try {
    const response = await fetch(`${API_BASE}/nearest_city?&key=${process.env.VUE_APP_IQAIR_API_KEY}`);
    const information = await response.json();
    if (information?.status !== 'success') {
      throw new Error('Error from server');
    }
    return information.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
}
