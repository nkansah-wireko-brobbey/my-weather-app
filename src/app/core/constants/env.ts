const API = 'http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=643cbfb8f3f8c80329b20f9fedcbdb93';

export const environment = {
    production: false,
    API
    };


export const constructAPI = (city: string) => {
    return `${API}&q=${city}`;
}