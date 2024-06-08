import React,  {Suspense, lazy } from 'react'
import Loading from './Loading';

const WeatherCard = lazy(() => import('./WeatherCard'));

const WeatherDisplay = ({data}) => {
  // console.log("icon",data);
  return (
    <>
    {
    data? (
      <Suspense fallback={<Loading/>}>
        <div className="col   d-flex align-items-center card-show">
          <WeatherCard data={data} />
        </div>
        </Suspense>
      ) : null}
    </>
  )
}

export default WeatherDisplay;