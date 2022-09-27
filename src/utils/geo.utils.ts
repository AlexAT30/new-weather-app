import axios from 'axios'
import { GeoData_I } from '../types/users.types'
const API_KEY = process.env.REACT_APP_API_KEY ?? 'NEED_API_KEY'

export const getGeoDataByCity = async (
  state: string
): Promise<GeoData_I | null> => {
  try {
    const rp = await axios({
      method: 'get',
      baseURL: process.env.REACT_APP_GEO_API,
      url: `/direct?q=${state}&appid=${API_KEY}`
    })
    if (rp.data.length === 0) return null
    return rp.data[0]
  } catch (error) {
    return null
  }
}
