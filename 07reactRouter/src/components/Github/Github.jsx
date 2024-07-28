import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Anujkumarsony')
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    

  return (
    <div className='text-center m-4 bg-green-400 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <h1 className='text-center text-black w-56'>Anuj kumar sony</h1>
    </div>
  )
}

export default Github