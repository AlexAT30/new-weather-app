import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherData_I, WeatherResponse_I } from '../types/weather.types'

const API_KEY = process.env.REACT_APP_OPENWEATHERAPI_KEY ?? 'NEED_API_KEY'

interface queryData {
  lat: number
  lon: number
}
export const weatherApi = createApi({
  reducerPath: 'geoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_WEATHER_API
  }),
  endpoints: (builder) => ({
    getWeatherDataCurrent: builder.query<WeatherData_I, queryData>({
      query: ({ lat, lon }: queryData) => `/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    }),
    getWeatherDataFuture: builder.query<WeatherResponse_I, queryData>({
      query: ({ lat, lon }: queryData) => `/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    })
  })
})

export const { useGetWeatherDataFutureQuery, useGetWeatherDataCurrentQuery } = weatherApi
