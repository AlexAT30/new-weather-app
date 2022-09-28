export const tempTransform = (k: number): string => {
  const c = Math.round(k - 273.15)
  return `${c}C°`
}

export const iconUrl = (icon: string): string => `http://openweathermap.org/img/wn/${icon}.png`
