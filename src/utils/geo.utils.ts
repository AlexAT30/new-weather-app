import axios from 'axios'
import { GeoData_I } from '../types/users.types'
const API_KEY = process.env.REACT_APP_WEATHERAPI_KEY ?? 'NEED_API_KEY'

export const getGeoData = async (
  state: string
): Promise<GeoData_I | null> => {
  try {
    const rp = await axios({
      method: 'get',
      baseURL: process.env.REACT_APP_GEO_API,
      url: `/current.json?key=${API_KEY}&q=${state}&aqi=no`
    })
    return rp.data.location
  } catch (error) {
    return null
  }
}
