import { useEffect, useState } from "react";
import { fetchData } from "../utils/Services";

const TestWithAPICall = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(fetchData)

        fetchData().then(data => {
            setData(data)
        })
    }, [])

    return (
        <div>
            {data.map(item => (
                <div>
                    {item.name}
                </div>
            ))}
        </div>
    )
};

export default TestWithAPICall