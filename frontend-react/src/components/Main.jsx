import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>
            References to particular companies or securities, if any, are included for informational or illustrative purposes only and should not be considered as an endorsement by Capital Group. Views expressed regarding a particular company, security, industry or market sector should not be considered an indication of trading intent of any investment funds or current holdings of any investment funds. These views should not be considered as investment advice nor should they be considered a recommendation to buy or sell.
          </p>
          <Button text='Explore..' class='btn-outline-info' url="dashboard"/>
        </div>
      </div>
    </>
  )
}

export default Main
