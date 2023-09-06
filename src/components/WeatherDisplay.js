import React,  {Suspense, lazy } from 'react'

const WeatherCard = lazy(() => import('./WeatherCard'));

const WeatherDisplay = ({data}) => {
  // console.log("icon",data);
  return (
    <>
    {
    data? (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="col   d-flex align-items-center card-show">
          <WeatherCard data={data} />
        </div>
        </Suspense>
      ) : null}
    </>
  )
}

export default WeatherDisplay;