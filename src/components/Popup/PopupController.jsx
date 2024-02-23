import React, { useEffect, useState } from 'react'
import PopupView from './PopupView'
import axiosInstance from '../../constant'

const PopupController = ({setShowPopup, username}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axiosInstance.get(`posts?user=${username}`)
        .then((res) => setData(res.data))
    },[username])
  return (
    <div>
        <PopupView setShowPopup={setShowPopup} username={username} data={data}/>
    </div>
  )
}

export default PopupController