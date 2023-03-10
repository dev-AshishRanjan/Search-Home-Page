import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'

interface WeatherData {
  name: string
  sys: any
  main: any
  weather: Array<Iicons>
}
interface Iicons {
  description: string
  icon: string
  id: number
  main: string
}

const Index = () => {
  const API_KEY = 'f33a484cf794d08d0148764789aaba32'
  const [data, setData] = useState<WeatherData>({
    name: 'Delhi',
    sys: { country: 'IN', sunrise: 1674865969, sunset: 1674905417 },
    main: {
      feels_like: 15.85,
      grnd_level: 1010,
      humidity: 64,
      pressure: 1013,
      sea_level: 1013,
      temp: 16.48,
      temp_max: 16.48,
      temp_min: 16.48,
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
    ],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`,
      )
        .then((res) => res.json())
        .then((res: WeatherData) => {
          setData(res)
          console.log(res)
        })
    })
    setLoading(false)
  }, [])

  return (
    <div className={styles.weather}>
      {!loading && Object.keys(data).length > 2 && (
        <div className={styles.card}>
          <div className={styles.name}>
            <h2>
              {data.name} <sup>{data.sys.country}</sup>
            </h2>
          </div>
          <div className={styles.temp1}>
            <h1>
              {Math.round(data.main.temp)} <sup>&deg;C</sup>
            </h1>
          </div>
          <div className={styles.temp2}>
            <p>min: {data.main.temp_min}&deg;C</p>
            <h3>|</h3>
            <p>max: {data.main.temp_max}&deg;C</p>
            <h3>|</h3>
            <p>humidity: {data.main.humidity}</p>
          </div>
          {/* <p>{Date(data.dat).toString()}</p> */}
          <div className={styles.icons}>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
            <p>{data.weather[0].description}</p>
          </div>
        </div>
      )}
      {loading && (
        <div className={styles.weather}>
          <div className={styles.card}>
            <div className={styles.name}>
              <h2>
                {data.name} <sup>{data.sys.country}</sup>
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index
