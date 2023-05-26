import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherDisplay = ({data}) => {
  return (
    <>
    {data.name.length > 0 ? (
        <div className="col   d-flex align-items-center card-show">
          <WeatherCard data={data} />
        </div>
      ) : null}
    </>
  )
}

export default WeatherDisplay;