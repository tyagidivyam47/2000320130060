import { useEffect, useState } from 'react'
import './App.css'
import TrainTable from './TrainTable';
import { Route, Routes } from 'react-router-dom';
import Train from './Train';

const data1 = {
  clientID: "1508a9b7-6c3f-4de0-b6a3-c3c148ce7029",
  clientSecret: "zxPbmXGYPZRoCcAj",
  companyName: "Train Central",
  ownerEmail: "Divyam.20B0131024@abes.ac.in",
  ownerName: "Divyam",
  rollNo: "60"
}

function App() {
  const [token, setToken] = useState();
  // console.log(token);

  const fetchData = async () => {
    const fetchedData = await fetch("http://20.244.56.144/train/auth", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data1)
    });
    const data = await fetchedData.json();
    setToken(data.access_token);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Routes>
        {token && <Route path="/" element={<TrainTable token={token} />} />}
        {token && <Route path="/train/:trainNumber" element={<Train token={token} />} />}
      </Routes>

    </div>
  )
}

export default App
