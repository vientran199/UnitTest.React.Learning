import { useState } from "react"
import { handleOtherMethod } from "../utils/helper"

export default function FunctionMethodTesting() {
    const [data, setData] = useState('')

    const handleUpdateData = () => {
        setData('hello')
    }

    return (
        <>
            <h1>Function component method testing</h1>
            <button data-testid="btn1" onClick={handleUpdateData}>Update</button>
            <button data-testid="btn2" onClick={handleOtherMethod}>Other</button>
            <h2>{data}</h2>
        </>
    )
};
