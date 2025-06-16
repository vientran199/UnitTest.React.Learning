import React, { useState } from 'react'

const TestingInputBox = () => {
    const [value, setValue] = useState('')
    return (
        <div>
            <input type="text" placeholder="Enter User Name" name='userName' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
};

export default TestingInputBox