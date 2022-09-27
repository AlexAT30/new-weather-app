import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_API_KEY ?? 'NEED_API_KEY'

export const geoApi = createApi({
  reducerPath: 'geoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_WEATHER_API
  }),
  endpoints: (builder) => ({
    getLatAndLonByCity: builder.query({
      query: (city: string) => `/direct?q=${city}&appid=${API_KEY}`
    })
  })
})

export const { useGetLatAndLonByCityQuery } = geoApi
