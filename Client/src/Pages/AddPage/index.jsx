

import { MdDeleteOutline } from "react-icons/md";
import React, { useEffect, useState } from "react"
import Formikk from "../../Components/Formik"
import { Helmet } from "react-helmet-async";
import axios from "axios";





const AddPage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [property, setProperty] = useState(null)


  async function getData() {
    const res = await axios("http://localhost:5000/")
    setData(res.data)
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:5000/${id}`)
    getData()
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formikk getData={getData} />
      <div className="filter">
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div onClick={() => setProperty({ name: "title", asc: true })} className="btn">a-z</div>
        <div onClick={() => setProperty({ name: "title", asc: false })} className="btn">z-a</div>
        <div onClick={() => setProperty({ name: "price", asc: true })} className="btn">inc</div>
        <div onClick={() => setProperty({ name: "price", asc: false })} className="btn">dec</div>
        <div onClick={() => setProperty({ name: "title", asc: null })} className="btn">default</div>
      </div>
      <div className="tabless">
        <div className="overflow-x-auto">
          <table className="table">

            <thead>
              <tr>
                <th>title</th>
                <th>desc</th>
                <th>price</th>
                <th> delete</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data
                  .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                  .sort((a, b) => {
                    if (property && property.asc === true) {
                      return (a[property.name] < b[property.name]) ? -1 : ((b[property.name] < a[property.name]) ? 1 : 0)
                    }
                    else if (property && property.asc === false) {
                      return (a[property.name] > b[property.name]) ? -1 : ((b[property.name] > a[property.name]) ? 1 : 0)
                    }
                    else {
                      return 0;
                    }
                  })
                  .map(x =>
                    <tr key={x._id}>
                      <td>{x.name}</td>
                      <td>{x.text}</td>
                      <td>{x.star}</td>
                      <td>{x.heart}.00$</td>

                      <td><MdDeleteOutline onClick={() => deleteData(x._id)} /></td>
                    </tr>
                  )
              }


            </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

export default AddPage