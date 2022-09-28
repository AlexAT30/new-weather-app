export interface WeatherResponse_I {
  list: WeatherData_I[]
}
export interface WeatherData_I {
  dt: string
  main: WeatherDataMain_I
  weather: WeatherDataWeather_I[]
  clouds: WeatherDataClouds_I
  wind: WeatherDataWind_I
  pop: number
}
export interface WeatherDataMain_I {
  temp: number
  pressure: number
  humidity: number
}
export interface WeatherDataWeather_I {
  main: string
  description: string
  icon: string
}
export interface WeatherDataClouds_I {
  all: number
}
export interface WeatherDataWind_I {
  speed: number
}
