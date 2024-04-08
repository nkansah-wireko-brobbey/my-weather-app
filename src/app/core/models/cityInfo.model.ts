interface CityInfo {
    name: string;
    local_names: { [languageCode: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}

// Example API response interface
export type LocationsAPIResponse = CityInfo[];
