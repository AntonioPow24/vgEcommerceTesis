import React, { useEffect } from 'react'
import { useWeather } from '../../../hooks/weatherHooks/useWeather'
import LoadingSpinner from '../../LoadingSpinner'
import WeatherInfo from './WeatherInfo'

const WeatherContainer = () => {

    const { weatherData, loading, error } = useWeather( 'chimbote' )



  return (
    <section className='flex justify-center items-center flex-1'>

        {
            loading ? <LoadingSpinner sizeSpinner={'40'} />

            : error ? <p>{error}</p>

            :
                <WeatherInfo {...weatherData} />
        }


    </section>
  )
}

export default WeatherContainer
