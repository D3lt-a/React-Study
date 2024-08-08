import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom" //this method is used durind the github..

function Github() {

  // const data = useLoaderData() //use the method

  

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/D3lt-a')
      .then((response) => response.json())
      .then((data) => {
        (
          console.log(data),
          setData(data)
        )
      })
  }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl">
      Github Folllowers: {data.followers}00
      <img src={data.avatar_url} width={300} alt="My Github Avatar" />
    </div>
  )
}

export default Github


/* 
    **This Will enable you to fetch data before the clicks on Github tab;
    Normaly the data was fetched when he CLICKS in the Github tab

  export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/D3lt-a')
    return response.json
  } 
*/