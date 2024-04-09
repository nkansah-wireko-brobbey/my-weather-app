const LocationAPI = 'http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=643cbfb8f3f8c80329b20f9fedcbdb93';

const WeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=643cbfb8f3f8c80329b20f9fedcbdb93'

export const environment = {
    production: false,
    API: LocationAPI
    };


export const constructLocationAPI = (city: string) => {
    return `${LocationAPI}&q=${city}`;
}

export const constructWeatherAPI = (lat: number, lon: number) => {
    return `${WeatherAPI}&lat=${lat}&lon=${lon}`;
}