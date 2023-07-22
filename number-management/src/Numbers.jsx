import React, { useEffect, useState } from 'react'

const Numbers = ({ params }) => {
    const [param, setParam] = useState(params)
    const[data, setData] = useState();
    const fetchD = async () => {
        console.log(param)
        const dataD = await fetch(param, {
            mode: 'no-cors'
        });
        const d = await dataD.json();
        setData(d.numbers);
        console.log(d)
    }
    useEffect(() => {
        fetchD()
    }, [])

    return (
        <div>
            {data.map((d)=>(
                <div>d</div>
            ))}
        </div>
    )
}

export default Numbers