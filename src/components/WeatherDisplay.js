import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherDisplay = ({data}) => {
  console.log("icon",data);
  return (
    <>
    {data? (
        <div className="col   d-flex align-items-center card-show">
          <WeatherCard data={data} />
        </div>
      ) : null}
    </>
  )
}

export default WeatherDisplay;