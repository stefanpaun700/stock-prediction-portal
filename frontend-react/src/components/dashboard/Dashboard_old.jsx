import axios from 'axios'
import React, {useEffect, useState} from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
    useEffect(() => {
        const fatchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view/')
                console.log('Success: ', response.data)
            }catch(error) {
                console.error('Error fatching data:', error)
            }
        }
        fatchProtectedData()
    }, [])
  return (
    <>
        <div className='text-light container'>Dashboard</div>
    </>
  )
}

export default Dashboard
