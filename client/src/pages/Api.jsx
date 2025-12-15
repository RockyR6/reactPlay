import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Api = () => {

    const [data, setData] = useState([])

    const getData =  async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(data)
        setData(data)
    //    const data = await response.json()
    //    console.log(data)
    }
     
  return (
    <div>
      <button onClick={getData}>getData</button>
      <div>
        {
            data.map((item, index) => {
                return <div key={index}>
                    <h1>userId:-{item.userId}</h1>
                    <h1>title:-{item.title}</h1>
                    <h1>status:-{item.completed}</h1>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Api
