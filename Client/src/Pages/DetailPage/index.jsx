import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
  const [detail, setDetail] = useState()
  const { id } = useParams()
  const fetchDetails = async () => {
    const res = await axios(`http://localhost:5000/sets/${id}`)
    setDetail(res.data)
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <h1>Deatil</h1>
      {detail ? <>
        <div className="DetailCard">
          <ul>
            <li><img src={detail.image} alt="" /></li>
            <li>{detail.title}</li>
            <li>{detail.star}</li>
            <li>{detail.heart}</li>
            <li>{detail.text}</li>
          </ul>
        </div>

      </> : ''}
    </div>
  )
}

export default Detail
