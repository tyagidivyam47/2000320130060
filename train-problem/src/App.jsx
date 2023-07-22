import { useEffect, useState } from 'react'
import './App.css'

const data1 = {
  clientID: "1508a9b7-6c3f-4de0-b6a3-c3c148ce7029",
  clientSecret: "zxPbmXGYPZRoCcAj",
  companyName: "Train Central",
  ownerEmail: "Divyam.20B0131024@abes.ac.in",
  ownerName: "Divyam",
  rollNo: "60"
}

function App() {
  const [count, setCount] = useState(0)

  const fetchData = async () => {
    const fetchedData = await fetch("http://20.244.56.144/train/auth/", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: {
        "clientID": "1508a9b7-6c3f-4de0-b6a3-c3c148ce7029",
        "clientSecret": "zxPbmXGYPZRoCcAj",
        "companyName": "Train Central",
        "ownerEmail": "Divyam.20B0131024@abes.ac.in",
        "ownerName": "Divyam",
        "rollNo": "60"
      }
    });
    const data = await fetchedData.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App
